import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';

const prisma = new PrismaClient();

async function main() {
  const results: any[] = [];
  const csvFilePath = path.join(process.cwd(), 'prisma', 'amazon_copy.csv');

  console.log("--- 🚀 సీడింగ్ ప్రక్రియ మొదలైంది ---");

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
    console.error("❌ ఎర్రర్: డేటాబేస్ లో Seller దొరకలేదు.");
    return;
  }

  // 2. డేటాను అప్‌సెర్ట్ (Upsert) చేయడం
  let successCount = 0;
  let errorCount = 0;

  for (const [index, p] of results.entries()) {
    if (!p.product_name || !p.category) continue;

    const createSlug = (text: string) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 50);
    const categoryName = p.category || "General";
    const categorySlug = createSlug(categoryName);

    // కేటగిరీ మ్యాపింగ్
    let category = await prisma.category.findFirst({ where: { slug: categorySlug } });
    if (!category) {
      category = await prisma.category.create({ data: { name: categoryName, slug: categorySlug } });
    }

    const productSlug = createSlug(p.product_name);

    try {
      await prisma.product.upsert({
        where: { slug: productSlug },
        update: { name: p.product_name, basePrice: parseFloat(p.discounted_price) || 100 },
        create: {
          name: p.product_name,
          slug: productSlug,
          description: p.product_name,
          basePrice: parseFloat(p.discounted_price) || 100,
          stock: 50,
          categoryId: category.id,
          sellerId: seller.id,
          images: JSON.stringify([`https://picsum.photos/seed/${productSlug}/400/400`])
        },
      });
      successCount++;
      // ప్రతి 10 ప్రొడక్ట్స్ కి ఒకసారి స్టేటస్ అప్‌డేట్
      if (successCount % 10 === 0) {
        console.log(`✅ ఇప్పటివరకు ${successCount} ప్రొడక్ట్స్ విజయవంతంగా యాడ్ అయ్యాయి...`);
      }
    } catch (error) {
      errorCount++;
      console.error(`❌ ఎర్రర్: ${p.product_name} యాడ్ అవ్వలేదు.`);
    }
  }

  console.log(`
--- 🎉 సీడింగ్ పూర్తయింది! ---
మొత్తం చదివిన రోస్: ${results.length}
విజయవంతంగా యాడ్ అయినవి: ${successCount}
ఫెయిల్ అయినవి: ${errorCount}
----------------------------`);
}

main()
  .catch((e) => {
    console.error("🔥 క్రికెటికల్ ఎర్రర్:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });