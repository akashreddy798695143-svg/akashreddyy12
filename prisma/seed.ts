import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const prisma = new PrismaClient();

async function main() {
  const results: any[] = [];
  const csvFilePath = path.join(process.cwd(), 'prisma', 'amazon_copy.csv');

  console.log("--- డేటా సీడింగ్ ప్రక్రియ మొదలైంది ---");

  // 1. CSV డేటాను చదవడం
  await new Promise((resolve, reject) => {
    fs.createReadStream(csvFilePath)
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', resolve)
      .on('error', reject);
  });

  const seller = await prisma.seller.findFirst();
  if (!seller) {
    console.error("ఎర్రర్: డేటాబేస్ లో Seller దొరకలేదు.");
    return;
  }

  // 2. డేటాను అప్‌సెర్ట్ (Upsert) చేయడం
  let successCount = 0;
  for (const p of results) {
    if (!p.product_name) continue;

    // కేటగిరీ మ్యాపింగ్: CSV లోని కేటగిరీని బట్టి డేటాబేస్ నుండి వెతకడం
    let category = await prisma.category.findFirst({
      where: { name: p.category } 
    });

    // కేటగిరీ లేకపోతే కొత్తది క్రియేట్ చేయడం
    if (!category) {
      category = await prisma.category.create({
        data: { name: p.category || "General" }
      });
    }

    const productSlug = p.product_name.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);

    try {
      await prisma.product.upsert({
        where: { slug: productSlug },
        update: {
          name: p.product_name,
          basePrice: parseFloat(p.discounted_price) || 100,
        },
        create: {
          name: p.product_name,
          slug: productSlug,
          description: p.product_name,
          basePrice: parseFloat(p.discounted_price) || 100,
          stock: 50,
          categoryId: category.id, // డైనమిక్ కేటగిరీ ID
          sellerId: seller.id,
          images: JSON.stringify([`https://picsum.photos/seed/${productSlug}/400/400`])
        },
      });
      successCount++;
      if (successCount % 50 === 0) console.log(`ప్రస్తుతం ${successCount} ప్రొడక్ట్స్ ప్రాసెస్ అయ్యాయి...`);
    } catch (error) {
      console.error(`ఎర్రర్: ${p.product_name} యాడ్ అవ్వలేదు.`);
    }
  }

  console.log(`--- సక్సెస్! మొత్తం ${successCount} ప్రొడక్ట్స్ వాటి కేటగిరీలతో యాడ్ అయ్యాయి ---`);
}

main()
  .catch((e) => {
    console.error("క్రికెటికల్ ఎర్రర్:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });