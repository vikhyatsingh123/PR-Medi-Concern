import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Resets scroll position on route change (path only, so filters in the query string don't jump the page).
export default function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}
