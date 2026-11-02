import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

// Shown in place of a form after a (dummy) submission.
export default function FormSuccess({ title, text, onReset }: { title: string; text: string; onReset: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center py-10 text-center"
      role="status"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', delay: 0.15, stiffness: 260, damping: 14 }}
        className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600"
      >
        <CheckCircle2 className="h-9 w-9" />
      </motion.span>
      <h3 className="mt-5 text-xl font-bold">{title}</h3>
      <p className="mt-2 max-w-xs text-sm text-slate-600">{text}</p>
      <button onClick={onReset} className="mt-5 text-sm font-semibold text-brand-600 hover:underline">
        Send another
      </button>
    </motion.div>
  )
}
