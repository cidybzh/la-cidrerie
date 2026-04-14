const infos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresse',
    value: '15, route des Salles\nLaunay-Congard, Hénansal\nCôtes-d\'Armor (22)',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '06 52 08 15 87',
    href: 'tel:0652081587',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: 'Visites',
    value: 'Mercredi & Vendredi\n17h30 – 19h30\nÀ partir d\'avril 2026',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28"
      style={{
        background: 'linear-gradient(180deg, #f5f9ee 0%, #e8f2d5 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
          <p className="text-apple-500 text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Nous trouver
          </p>
          <h2 className="section-title">Venez nous rendre visite</h2>
          <p className="section-subtitle">
            La cidrerie est ouverte les mercredis et vendredis. N'hésitez pas
            à nous contacter pour plus d'informations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <div className="reveal space-y-5">
            {infos.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl border border-apple-100 shadow-sm p-6 flex gap-5 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-apple-100 text-apple-600 flex items-center justify-center flex-shrink-0">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-bark-400 uppercase tracking-wider font-medium mb-1">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-apple-700 hover:text-apple-600 font-semibold text-lg transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-apple-800 font-medium leading-relaxed whitespace-pre-line">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Eva's market */}
            <div className="bg-cider-50 border border-cider-100 rounded-2xl p-6 flex gap-5 items-start">
              <div className="w-10 h-10 rounded-xl bg-cider-200 text-cider-700 flex items-center justify-center flex-shrink-0 text-lg">
                🛒
              </div>
              <div>
                <p className="text-xs text-cider-500 uppercase tracking-wider font-medium mb-1">
                  Marché d'Erquy
                </p>
                <p className="text-cider-800 font-medium">
                  Retrouvez Eva chaque <strong>samedi matin</strong> sur le marché
                  d'Erquy avec notre jus de pomme.
                </p>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="reveal">
            <div
              className="rounded-3xl overflow-hidden shadow-lg aspect-square relative flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #d0e5ac 0%, #afd07a 50%, #8db84f 100%)',
              }}
            >
              {/* Stylized map illustration */}
              <div className="text-center text-white px-8">
                <svg className="w-20 h-20 mx-auto mb-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-serif text-2xl font-bold drop-shadow">Hénansal</p>
                <p className="text-white/80 mt-1">Côtes-d'Armor, Bretagne</p>
              </div>

              {/* Pin */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-8 w-6 h-6 bg-cider-500 rounded-full border-4 border-white shadow-lg animate-bounce" />

              {/* Address overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur p-5 text-center">
                <p className="font-semibold text-apple-800">
                  15, route des Salles — Launay-Congard
                </p>
                <a
                  href="https://www.google.com/maps/search/15+route+des+Salles+Hénansal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-apple-500 hover:text-apple-600 text-sm font-medium mt-1 inline-block transition-colors"
                >
                  Ouvrir dans Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
