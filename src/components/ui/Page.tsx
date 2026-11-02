import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Wraps each route: sets the document title (React 19 hoists <title>) and fades the page in.
export default function Page({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <title>{`${title} | PR Medi Concern`}</title>
      {children}
    </motion.main>
  )
}
