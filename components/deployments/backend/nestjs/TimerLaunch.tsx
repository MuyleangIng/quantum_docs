import React, { useState, useEffect } from 'react'

interface TimerLaunchProps {
  launchDate: Date
  onDateUpdate: () => void
}

export function TimerLaunch({ launchDate, onDateUpdate }: TimerLaunchProps) {
  const [timeLeft, setTimeLeft] = useState<string>('')
  const [isLaunched, setIsLaunched] = useState(false)

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      if (now >= launchDate && !isLaunched) {
        setTimeLeft('Launched!')
        setIsLaunched(true)
        onDateUpdate()
      } else if (!isLaunched) {
        const difference = launchDate.getTime() - now.getTime()
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      }
    }

    updateTimer() // Run immediately

    const timer = setInterval(updateTimer, 1000)

    return () => clearInterval(timer)
  }, [launchDate, onDateUpdate, isLaunched])

  return (
    <div className="bg-purple-100 border border-purple-300 rounded-lg p-4 text-center">
      <h3 className="text-purple-700 text-xl font-semibold mb-2">Content Launch Countdown</h3>
      <p className="text-purple-600 text-3xl font-bold" aria-live="polite">
        {isLaunched ? 'Feature Launched!' : timeLeft}
      </p>
    </div>
  )
}

