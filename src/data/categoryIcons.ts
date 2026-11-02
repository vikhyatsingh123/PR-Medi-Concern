import { Droplets, FlaskConical, Leaf, Pill, Sparkles, Syringe, type LucideIcon } from 'lucide-react'
import type { ProductCategory } from './products'

export const categoryIcon: Record<ProductCategory, LucideIcon> = {
  Tablets: Pill,
  Capsules: FlaskConical,
  'Syrups & Suspensions': Droplets,
  Injectables: Syringe,
  'Ointments & Creams': Sparkles,
  Nutraceuticals: Leaf,
}
