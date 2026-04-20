const products = [
  {
    name: 'Cidre artisanal',
    subtitle: 'La Rainette',
    description:
      "Notre premier cidre. On a tout donné pour qu'il soit à la hauteur de ce qu'on avait promis — naturel, breton, fait à la main. Goûtez-le et dites-nous si on a tenu parole.",
    note: 'Disponible dès maintenant',
    available: true,
    details: ['Fermentation naturelle', 'Vergers bretons', '20 000 bouteilles'],
    gradient: 'from-cider-400 to-cider-600',
    bg: 'from-cider-50 to-amber-50',
    badge: 'Disponible',
    badgeColor: 'bg-apple-100 text-apple-700',
    icon: '🌳',
  },
  {
    name: 'Jus de pomme',
    subtitle: 'Pur jus naturel',
    description:
      "Pressé à froid depuis notre verger de Saint-Carreuc. On n'a rien ajouté, rien enlevé. Juste la pomme, telle qu'elle est. C'est le premier produit qu'Eva a posé sur le marché d'Erquy — et les gens sont revenus.",
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
      className="py-16 md:py-28"
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
            Deux produits. Tout ce qu'on sait faire, tout ce qu'on aime,
            dans chaque bouteille qu'on vous tend.
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

              <div className="p-6 md:p-10">
                {/* Badge + icon */}
                <div className="flex items-start justify-between mb-6">
                  <span className="text-6xl transition-transform duration-300 group-hover:scale-110 inline-block">{p.icon}</span>
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
                  className={`rounded-xl px-4 py-3 text-sm font-medium mb-4 ${
                    p.available
                      ? 'bg-apple-100 text-apple-700'
                      : 'bg-cider-100 text-cider-700'
                  }`}
                >
                  {p.note}
                </div>

                {/* CTA */}
                <a
                  href="#contact"
                  className="inline-block w-full text-center bg-apple-600 hover:bg-apple-700 text-white font-semibold text-sm rounded-xl px-6 py-3 transition-colors duration-200"
                >
                  Nous contacter pour commander
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Market info */}
        <div className="reveal mt-12 bg-white rounded-2xl border border-apple-100 shadow-sm p-8 flex flex-col md:flex-row items-center gap-6">
          <div>
            <h4 className="font-serif text-xl font-semibold text-apple-800 mb-2">
              Retrouvez nos produits au marché
            </h4>
            <p className="text-bark-600">
              Chaque <strong>samedi matin au marché d'Erquy</strong>, Eva est là.
              Venez lui parler. Elle vous racontera le reste mieux que n'importe quel site.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
