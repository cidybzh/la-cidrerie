const products = [
  {
    name: 'Cidre artisanal',
    subtitle: 'La Rainette',
    description:
      'Notre premier cidre artisanal, fruit d'une fermentation naturelle soignée. Élaboré à partir de pommes sélectionnées dans nos vergers bretons, il exprime toute la fraîcheur et la complexité du terroir du Penthièvre.',
    note: 'Disponible à partir d'avril 2026',
    available: false,
    details: ['Fermentation naturelle', 'Vergers bretons', '20 000 bouteilles'],
    gradient: 'from-cider-400 to-cider-600',
    bg: 'from-cider-50 to-amber-50',
    badge: 'Bientôt disponible',
    badgeColor: 'bg-cider-100 text-cider-700',
    icon: '🍺',
  },
  {
    name: 'Jus de pomme',
    subtitle: 'Pur jus naturel',
    description:
      'Pressé à froid depuis les pommes de notre verger naturel de Saint-Carreuc. Un jus pur, sans conservateurs ni additifs, qui concentre toute la douceur et la vivacité des pommes bretonnes.',
    note: 'Disponible dès maintenant',
    available: true,
    details: ['Sans conservateurs', 'Pressé à froid', 'Verger de Saint-Carreuc'],
    gradient: 'from-apple-400 to-apple-600',
    bg: 'from-apple-50 to-green-50',
    badge: 'Disponible',
    badgeColor: 'bg-apple-100 text-apple-700',
    icon: '🍎',
  },
]

export default function Products() {
  return (
    <section
      id="produits"
      className="py-28"
      style={{
        background: 'linear-gradient(180deg, #f7f5f0 0%, #fafaf7 100%)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-apple-500 text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Nos produits
          </p>
          <h2 className="section-title">Du verger à la bouteille</h2>
          <p className="section-subtitle">
            Deux produits artisanaux, élaborés avec soin à partir de pommes
            bretonnes cultivées dans le respect de la nature.
          </p>
        </div>

        {/* Products */}
        <div className="grid md:grid-cols-2 gap-10">
          {products.map((p) => (
            <div
              key={p.name}
              className={`reveal rounded-3xl bg-gradient-to-br ${p.bg} border border-white shadow-sm overflow-hidden group hover:shadow-xl transition-shadow duration-500`}
            >
              {/* Top color bar */}
              <div className={`h-2 bg-gradient-to-r ${p.gradient}`} />

              <div className="p-10">
                {/* Badge + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl">{p.icon}</span>
                  <span
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full ${p.badgeColor}`}
                  >
                    {p.badge}
                  </span>
                </div>

                {/* Title */}
                <p className="text-bark-500 text-sm tracking-widest uppercase mb-1">
                  {p.subtitle}
                </p>
                <h3 className="font-serif text-3xl font-bold text-apple-900 mb-4">
                  {p.name}
                </h3>

                {/* Description */}
                <p className="text-bark-600 leading-relaxed mb-6">{p.description}</p>

                {/* Details */}
                <ul className="space-y-2 mb-6">
                  {p.details.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-bark-700 text-sm">
                      <svg
                        className="w-4 h-4 text-apple-500 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {d}
                    </li>
                  ))}
                </ul>

                {/* Note */}
                <div
                  className={`rounded-xl px-4 py-3 text-sm font-medium ${
                    p.available
                      ? 'bg-apple-100 text-apple-700'
                      : 'bg-cider-100 text-cider-700'
                  }`}
                >
                  {p.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Market info */}
        <div className="reveal mt-12 bg-white rounded-2xl border border-apple-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-6">
          <span className="text-5xl">🛒</span>
          <div>
            <h4 className="font-serif text-xl font-semibold text-apple-800 mb-2">
              Retrouvez nos produits au marché
            </h4>
            <p className="text-bark-600">
              Eva propose le jus de pomme chaque{' '}
              <strong>samedi matin sur le marché d'Erquy</strong>. Venez à sa
              rencontre pour découvrir les produits de la cidrerie et en apprendre
              davantage sur notre démarche artisanale.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
