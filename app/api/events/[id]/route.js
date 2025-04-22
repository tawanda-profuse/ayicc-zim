import Event from '@/app/(models)/events'
import { NextResponse } from 'next/server'

export async function GET (
  request,
  { params }
) {
  const { id } = await params

  try {
    if (!id) {
      return NextResponse.json(
        { message: 'Event ID is required' },
        { status: 400 }
      )
    }

    const event = await Event.findById(id)

    if (!event) {
      return NextResponse.json(
        { message: 'Event details not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ event }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching event details: ${error}` },
      { status: 500 }
    )
  }
}

export async function PUT (
  request,
  { params }
) {
  const { id } = await params
  try {
    if (!id) {
      return NextResponse.json(
        { message: 'Event ID is required' },
        { status: 400 }
      )
    }
    const event = await Event.findById(id)

    if (!event) {
      return NextResponse.json(
        { message: 'Event not found' },
        { status: 404 }
      )
    }

    const body = await request.json()
    if(!body.image){
      body.image = "https://i.ibb.co/KMBKtsx/ayicc-logo.png"
    }

    Object.assign(event, body)

    await event.save()

    return NextResponse.json(
      { message: 'Event details updated successfully', event },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error: ', error)
    return NextResponse.json({ message: 'Error: ', error }, { status: 500 })
  }
}

export async function DELETE (
  request,
  { params }
) {
  const { id } = await params
  try {
    if (!id) {
      return NextResponse.json(
        { message: 'Event ID is required' },
        { status: 400 }
      )
    }
    const event = await Event.findByIdAndDelete(id)

    if (!event) {
      return NextResponse.json(
        { message: 'Event not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'Event deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error: ', error)
    return NextResponse.json({ message: 'Error: ', error }, { status: 500 })
  }
}
