// components/NewsletterForm.tsx

'use client'
import { useState } from 'react'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      setMessage('Thanks for subscribing!')
      setEmail('')
    } else {
      setMessage(data.message || 'Something went wrong.')
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-sm">
      <label htmlFor="email" className="block text-sm font-medium">
        Enter your email to subscribe:
      </label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-2 border rounded-md"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full px-3 py-2 bg-black text-white rounded-md"
      >
        {loading ? 'Submitting...' : 'Subscribe'}
      </button>
      {message && <p className="text-sm mt-2">{message}</p>}
    </form>
  )
}
