import { useEffect, useMemo, useState } from 'react'

export function TextType({ text, className = '', speed = 90, pause = 1400 }) {
  const letters = useMemo(() => Array.from(text), [text])
  const [visibleCount, setVisibleCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisibleCount((current) => {
        if (!isDeleting) {
          if (current >= letters.length) {
            setIsDeleting(true)
            return current
          }
          return current + 1
        }

        if (current <= 0) {
          setIsDeleting(false)
          return current
        }

        return current - 1
      })
    }, isDeleting ? speed * 0.75 : visibleCount === letters.length ? pause : speed)

    return () => window.clearTimeout(timer)
  }, [letters.length, visibleCount, isDeleting, speed, pause])

  return (
    <span className={className} aria-label={text}>
      {letters.slice(0, visibleCount).join('')}
      <span className="ml-1 inline-block animate-pulse text-current">|</span>
    </span>
  )
}
