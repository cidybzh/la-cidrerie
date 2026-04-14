'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ReserverPage() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    telephone: '',
    jour: '',
    personnes: '2',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Envoi via Formspree — remplacez YOUR_FORM_ID par votre identifiant Formspree
    // Créez un compte gratuit sur formspree.io pour recevoir les demandes par email
    try {
      const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          nom: form.nom,
          email: form.email,
          telephone: form.telephone,
          jour: form.jour,
          personnes: form.personnes,
          message: form.message,
        }),
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        // Fallback : ouvrir le client mail
        window.location.href = `mailto:contact@cidrerie-larainette.fr?subject=Demande de visite — ${form.nom}&body=Nom : ${form.nom}%0AEmail : ${form.email}%0ATéléphone : ${form.telephone}%0AJour souhaité : ${form.jour}%0ANombre de personnes : ${form.personnes}%0AMessage : ${form.message}`
      }
    } catch {
      window.location.href = `mailto:contact@cidrerie-larainette.fr?subject=Demande de visite — ${form.nom}&body=Nom : ${form.nom}%0AEmail : ${form.email}%0ATéléphone : ${form.telephone}%0AJour souhaité : ${form.jour}%0ANombre de personnes : ${form.personnes}%0AMessage : ${form.message}`
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(160deg, #f5f9ee 0%, #e8f2d5 100%)' }}>
      {/* Header */}
      <div
        className="py-20 px-6 text-white text-center relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #2e431c 0%, #537c25 60%, #6d9b32 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 left-10 text-8xl">🍎</div>
          <div className="absolute bottom-4 right-10 text-8xl">🐸</div>
        </div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Retour au site
        </Link>
        <p className="text-cider-300 text-sm tracking-[0.3em] uppercase font-medium mb-3">
          Cidrerie du Penthièvre La Rainette
        </p>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Réserver une visite
        </h1>
        <p className="text-white/80 text-lg max-w-xl mx-auto">
          Visites et dégustations les mercredis et vendredis de 17h30 à 19h30,
          à partir d'avril 2026.
        </p>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        {submitted ? (
          /* Success state */
          <div className="bg-white rounded-3xl shadow-sm border border-apple-100 p-12 text-center">
            <div className="w-20 h-20 bg-apple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-apple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl font-bold text-apple-800 mb-4">
              Demande envoyée !
            </h2>
            <p className="text-bark-600 text-lg leading-relaxed mb-8">
              Merci {form.nom}, votre demande de visite a bien été reçue. Eva ou Nathan
              vous recontacteront rapidement pour confirmer votre créneau.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Retour à l'accueil
              </Link>
              <a href="tel:0652081587" className="inline-flex items-center justify-center gap-2 border-2 border-apple-600 text-apple-600 px-8 py-3 rounded-full font-medium hover:bg-apple-600 hover:text-white transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appeler directement
              </a>
            </div>
          </div>
        ) : (
          /* Form */
          <div className="bg-white rounded-3xl shadow-sm border border-apple-100 overflow-hidden">
            {/* Info banner */}
            <div className="bg-apple-50 border-b border-apple-100 px-8 py-5 flex flex-wrap gap-6 text-sm text-apple-700">
              <span className="flex items-center gap-2">
                <span>📅</span> Mercredi & Vendredi
              </span>
              <span className="flex items-center gap-2">
                <span>🕠</span> 17h30 – 19h30
              </span>
              <span className="flex items-center gap-2">
                <span>📍</span> Hénansal, Côtes-d'Armor
              </span>
              <span className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:0652081587" className="underline underline-offset-2">06 52 08 15 87</a>
              </span>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-6">
              {/* Nom + Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="nom">
                    Nom complet <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="nom"
                    name="nom"
                    type="text"
                    required
                    value={form.nom}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 placeholder-bark-300 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="email">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jean@exemple.fr"
                    className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 placeholder-bark-300 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition"
                  />
                </div>
              </div>

              {/* Téléphone */}
              <div>
                <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="telephone">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="06 XX XX XX XX"
                  className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 placeholder-bark-300 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition"
                />
              </div>

              {/* Jour + Nb personnes */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="jour">
                    Jour souhaité <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="jour"
                    name="jour"
                    required
                    value={form.jour}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition bg-white"
                  >
                    <option value="" disabled>Choisir un jour…</option>
                    <option value="Mercredi">Mercredi (17h30 – 19h30)</option>
                    <option value="Vendredi">Vendredi (17h30 – 19h30)</option>
                    <option value="Inauguration (16 mai)">Inauguration — 16 mai 2026</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="personnes">
                    Nombre de personnes <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="personnes"
                    name="personnes"
                    required
                    value={form.personnes}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition bg-white"
                  >
                    {[1,2,3,4,5,6,7,8,9,10].map(n => (
                      <option key={n} value={n}>{n} personne{n > 1 ? 's' : ''}</option>
                    ))}
                    <option value="Plus de 10">Plus de 10 personnes</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-apple-800 mb-2" htmlFor="message">
                  Message (questions, date précise…)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Précisez une date souhaitée ou toute question particulière…"
                  className="w-full rounded-xl border border-apple-200 px-4 py-3 text-apple-900 placeholder-bark-300 focus:outline-none focus:ring-2 focus:ring-apple-400 focus:border-transparent transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-apple-600 hover:bg-apple-700 disabled:opacity-60 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-lg"
              >
                {loading ? 'Envoi en cours…' : 'Envoyer ma demande de visite'}
              </button>

              <p className="text-center text-bark-400 text-sm">
                Vous pouvez aussi nous appeler directement au{' '}
                <a href="tel:0652081587" className="text-apple-600 hover:underline font-medium">
                  06 52 08 15 87
                </a>
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  )
}
