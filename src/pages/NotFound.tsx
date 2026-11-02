import { Home } from 'lucide-react'
import Button from '../components/ui/Button'
import Page from '../components/ui/Page'

export default function NotFound() {
  return (
    <Page title="Page not found">
      <section className="container-x grid min-h-[60vh] place-items-center py-20 text-center">
        <div>
          <p className="font-display text-8xl font-extrabold text-brand-500">404</p>
          <h1 className="mt-4 text-3xl font-extrabold">Page not found</h1>
          <p className="mt-3 text-slate-600">The page you are looking for doesn't exist or has been moved.</p>
          <Button to="/" className="mt-8">
            <Home className="h-4 w-4" /> Back to home
          </Button>
        </div>
      </section>
    </Page>
  )
}
