import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import { getUserIdFromRequest } from '@/lib/auth-utils'

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const userId = getUserIdFromRequest(request)
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { id } = await params

    const address = await db.address.findFirst({ where: { id, userId } })
    if (!address) {
      return NextResponse.json({ error: 'Address not found' }, { status: 404 })
    }

    await db.address.delete({ where: { id } })

    // If the deleted address was the default, make the most recent one the default
    if (address.isDefault) {
      const next = await db.address.findFirst({
        where: { userId },
        orderBy: { createdAt: 'desc' },
      })
      if (next) {
        await db.address.update({ where: { id: next.id }, data: { isDefault: true } })
      }
    }

    return NextResponse.json({ message: 'Address deleted' })
  } catch (error) {
    console.error('Address DELETE API error:', error)
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
  }
}
