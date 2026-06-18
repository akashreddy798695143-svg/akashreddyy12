import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getUserIdFromRequest } from '@/lib/auth-utils'

export async function GET(request: NextRequest) {
  try {
    const userId = getUserIdFromRequest(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const addresses = await db.address.findMany({
      where: { userId },
      orderBy: [{ isDefault: 'desc' }, { createdAt: 'desc' }],
    })

    return NextResponse.json({ addresses })
  } catch (error) {
    console.error('Addresses GET API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const userId = getUserIdFromRequest(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { name, phone, addressLine1, addressLine2, city, state, pincode, country, addressType, isDefault } = body

    if (!name || !phone || !addressLine1 || !city || !state || !pincode) {
      return NextResponse.json(
        { error: 'Name, phone, address line 1, city, state and pincode are required' },
        { status: 400 }
      )
    }

    // If this is the default address, unset any existing default
    if (isDefault) {
      await db.address.updateMany({
        where: { userId, isDefault: true },
        data: { isDefault: false },
      })
    }

    // If user has no addresses yet, make this the default automatically
    const existingCount = await db.address.count({ where: { userId } })

    const address = await db.address.create({
      data: {
        userId,
        name,
        phone,
        addressLine1,
        addressLine2: addressLine2 || null,
        city,
        state,
        pincode,
        country: country || 'India',
        addressType: addressType || 'home',
        isDefault: isDefault ?? existingCount === 0,
      },
    })

    return NextResponse.json({ address }, { status: 201 })
  } catch (error) {
    console.error('Addresses POST API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}

export async function PUT(request: NextRequest) {
  try {
    const userId = getUserIdFromRequest(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { id, name, phone, addressLine1, addressLine2, city, state, pincode, country, addressType, isDefault } = body

    if (!id) {
      return NextResponse.json({ error: 'Address ID is required' }, { status: 400 })
    }

    // Verify ownership
    const existing = await db.address.findFirst({ where: { id, userId } })
    if (!existing) {
      return NextResponse.json({ error: 'Address not found' }, { status: 404 })
    }

    if (isDefault) {
      await db.address.updateMany({
        where: { userId, isDefault: true, NOT: { id } },
        data: { isDefault: false },
      })
    }

    const address = await db.address.update({
      where: { id },
      data: {
        name, phone, addressLine1, addressLine2, city, state, pincode,
        country, addressType, isDefault,
      },
    })

    return NextResponse.json({ address })
  } catch (error) {
    console.error('Addresses PUT API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
