import { animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface Props {
  to: number
  suffix?: string
  decimals?: number
  duration?: number
}

// Counts up from 0 when scrolled into view.
export default function Counter({ to, suffix = '', decimals = 0, duration = 2 }: Props) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    const node = ref.current
    if (!inView || !node) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => {
        node.textContent =
          v.toLocaleString('en-IN', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix
      },
    })
    return () => controls.stop()
  }, [inView, to, suffix, decimals, duration])

  return <span ref={ref}>{(0).toFixed(decimals)}{suffix}</span>
}
