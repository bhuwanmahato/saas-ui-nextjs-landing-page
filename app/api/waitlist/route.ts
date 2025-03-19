import { NextResponse } from 'next/server'

const WAITLIST_API_KEY = process.env.WAITLIST_API_KEY
const WAITLIST_ID = process.env.WAITLIST_ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    if (!WAITLIST_API_KEY || !WAITLIST_ID) {
      return NextResponse.json(
        { error: 'Missing API configuration' },
        { status: 500 },
      )
    }

    const response = await fetch(
      'https://api.getwaitlist.com/api/v1/waitlist/submit',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${WAITLIST_API_KEY}`,
        },
        body: JSON.stringify({
          email,
          waitlist_id: WAITLIST_ID,
        }),
      },
    )

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json(
        { error: data.message || 'Waitlist submission failed' },
        { status: response.status },
      )
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    )
  }
}
