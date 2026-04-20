'use client'

export default function Error({ reset }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-apple-50">
      <div className="text-center px-6">
        <h2 className="font-serif text-3xl font-bold text-apple-800 mb-4">
          Une erreur est survenue
        </h2>
        <button
          onClick={reset}
          className="btn-primary"
        >
          Réessayer
        </button>
      </div>
    </div>
  )
}
