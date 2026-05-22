import { useEffect, useMemo, useState } from 'react'

function pickTexts(text, texts) {
  if (Array.isArray(texts) && texts.length > 0) return texts
  if (Array.isArray(text) && text.length > 0) return text
  if (typeof text === 'string' && text.length > 0) return [text]
  return ['']
}

function getDelay(baseDelay, variableSpeedEnabled, variableSpeedMin, variableSpeedMax) {
  if (!variableSpeedEnabled) return baseDelay
  const min = Number(variableSpeedMin) || baseDelay
  const max = Number(variableSpeedMax) || baseDelay
  const lower = Math.min(min, max)
  const upper = Math.max(min, max)

  return Math.floor(lower + Math.random() * (upper - lower + 1))
}

export default function TextType({
  text,
  texts,
  className = '',
  typingSpeed = 90,
  pauseDuration = 1400,
  showCursor = true,
  cursorCharacter = '|',
  deletingSpeed = 50,
  variableSpeedEnabled = false,
  variableSpeedMin = 60,
  variableSpeedMax = 120,
  cursorBlinkDuration = 0.5,
}) {
  const sequence = useMemo(() => pickTexts(text, texts), [text, texts])
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const activeText = sequence[activeIndex] ?? ''

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (visibleCount >= activeText.length) {
          setIsDeleting(true)
          return
        }

        setVisibleCount((current) => current + 1)
        return
      }

      if (visibleCount <= 0) {
        setIsDeleting(false)
        setActiveIndex((current) => (current + 1) % sequence.length)
        return
      }

      setVisibleCount((current) => current - 1)
    },
    getDelay(
      isDeleting ? deletingSpeed : typingSpeed,
      variableSpeedEnabled,
      variableSpeedMin,
      variableSpeedMax,
    ))

    return () => window.clearTimeout(timer)
  }, [
    activeIndex,
    deletingSpeed,
    isDeleting,
    sequence,
    typingSpeed,
    variableSpeedEnabled,
    variableSpeedMax,
    variableSpeedMin,
    visibleCount,
    pauseDuration,
  ])

  useEffect(() => {
    const activeText = sequence[activeIndex] ?? ''

    if (!isDeleting && visibleCount === activeText.length && activeText.length > 0) {
      const timer = window.setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => window.clearTimeout(timer)
    }

    return undefined
  }, [activeIndex, isDeleting, pauseDuration, sequence, visibleCount])

  const activeText = sequence[activeIndex] ?? ''
  const displayedText = activeText.slice(0, visibleCount)

  return (
    <span className={className} aria-label={activeText}>
      {displayedText}
      {showCursor ? (
        <span
          className="ml-1 inline-block text-current"
          style={{ animation: `text-type-cursor ${cursorBlinkDuration}s step-end infinite` }}
        >
          {cursorCharacter}
        </span>
      ) : null}
    </span>
  )
}