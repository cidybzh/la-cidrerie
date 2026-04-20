import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-apple-50">
      <div className="text-center px-6">
        <span className="text-6xl mb-6 block">🍎</span>
        <h2 className="font-serif text-3xl font-bold text-apple-800 mb-4">
          Page introuvable
        </h2>
        <p className="text-bark-500 mb-6">On a cherché partout — même dans le verger.</p>
        <Link href="/" className="btn-primary">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
