import User from '@/app/(models)/user'
import { NextResponse } from 'next/server'

export async function GET (
  request,
  { params }
) {
  const { id } = await params

  try {
    if (!id) {
      return NextResponse.json(
        { message: 'User ID is required' },
        { status: 400 }
      )
    }

    const user = await User.findById(id)

    if (!user) {
      return NextResponse.json(
        { message: 'User details not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: `Error fetching user details: ${error}` },
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
        { message: 'User ID is required' },
        { status: 400 }
      )
    }
    const user = await User.findById(id)

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    const body = await request.json()

    Object.assign(user, body)

    await user.save()

    return NextResponse.json(
      { message: 'User details updated successfully', user },
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
        { message: 'User ID is required' },
        { status: 400 }
      )
    }
    const user = await User.findByIdAndDelete(id)

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: 'User deleted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error: ', error)
    return NextResponse.json({ message: 'Error: ', error }, { status: 500 })
  }
}
