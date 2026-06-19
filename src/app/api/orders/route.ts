import { NextResponse } from "next/server";
import { db } from "@/lib/db"; 

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // అవసరమైన ఫీల్డ్స్ చెక్ చేయడం
    if (!body.userId || !body.productId || !body.total || !body.addressId) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    // ఆర్డర్ క్రియేషన్ - స్కీమాకి సరిపోయేలా ఫీల్డ్స్ అన్నీ యాడ్ చేశాను
    const order = await db.order.create({
      data: {
        userId: body.userId,
        orderNumber: `ORD-${Date.now()}`,
        status: body.status || "pending",
        paymentMethod: body.paymentMethod || "COD",
        
        // ముఖ్యమైన ఫీల్డ్స్
        subtotal: parseFloat(body.total), // ప్రైస్ ఇక్కడ సెట్ చేయాలి
        total: parseFloat(body.total),
        addressId: body.addressId,
        
        // OrderItems రిలేషన్
        items: {
          create: [
            {
              productId: body.productId,
              sellerId: body.sellerId || "default_seller_id", // ఇది నీ స్కీమా ప్రకారం తప్పనిసరి
              quantity: body.quantity || 1,
              price: parseFloat(body.total),
              total: parseFloat(body.total),
            }
          ]
        }
      },
    });

    return NextResponse.json(order);
  } catch (error: any) {
    console.error("[ORDER_POST_ERROR]", error);
    return new NextResponse("Internal Server Error: " + error.message, { status: 500 });
  }
}