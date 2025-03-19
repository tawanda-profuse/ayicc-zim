import User from '../../../(models)/user'
import { NextResponse } from 'next/server'
import bcrypt from "bcrypt"

export async function POST (req) {
  try {
    const { token, newPassword } = await req.json()

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() }
    })

    if (!user) {
      return NextResponse.json(
        { message: 'Invalid or expired token' },
        { status: 400 }
      )
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10)
    user.password = hashedPassword // Hash the password before saving
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()

    return NextResponse.json(
      { message: 'Password has been reset successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error: ', error)
    return NextResponse.json(
      { message: 'An error has occurred' },
      { status: 500 }
    )
  }
}
