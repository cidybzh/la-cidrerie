export default function About() {
  return (
    <section id="histoire" className="py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'radial-gradient(circle at 70% 50%, #6d9b32 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-apple-500 text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Notre histoire
          </p>
          <h2 className="section-title">Une fratrie, une passion,<br />un héritage</h2>
          <p className="section-subtitle">
            Eva et Nathan Bouguet ont créé leur cidrerie en septembre 2025, portés
            par le souvenir de leur grand-père et l'amour de leur terroir breton.
          </p>
        </div>

        {/* Story grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Illustration */}
          <div className="reveal order-2 md:order-1">
            <div className="relative">
              <div
                className="w-full aspect-square rounded-3xl"
                style={{
                  background:
                    'linear-gradient(135deg, #d0e5ac 0%, #8db84f 40%, #537c25 100%)',
                }}
              >
                {/* Decorative frog */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10rem] opacity-30">🐸</span>
                </div>
                {/* Card overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur rounded-2xl p-5 shadow-lg">
                  <p className="text-apple-800 font-serif text-lg font-semibold mb-1">
                    Fondée en septembre 2025
                  </p>
                  <p className="text-bark-500 text-sm">
                    Hénansal, Côtes-d'Armor — Bretagne
                  </p>
                </div>
              </div>
              {/* Floating stat */}
              <div className="absolute -top-6 -right-6 bg-cider-400 text-white rounded-2xl p-5 shadow-xl">
                <p className="text-3xl font-bold font-serif">20 000</p>
                <p className="text-sm font-medium opacity-90">bouteilles</p>
                <p className="text-xs opacity-75">1ère production</p>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal order-1 md:order-2 space-y-6">
            <blockquote className="border-l-4 border-cider-400 pl-6 italic text-bark-700 text-xl leading-relaxed">
              «&nbsp;Quand nous étions petits, notre grand-père faisait son cidre.
              Nous allions ramasser les pommes et il nous disait que nous allions
              voir des grenouilles rainettes.&nbsp;»
            </blockquote>
            <p className="text-bark-600 text-lg leading-relaxed">
              Originaires d'Erquy, Eva et Nathan Bouguet ont grandi entre vergers
              et traditions. Le nom <strong className="text-apple-700">La Rainette</strong> rend
              hommage à leur grand-père, artisan de leur passion pour le cidre naturel.
            </p>
            <p className="text-bark-600 text-lg leading-relaxed">
              Après une première année intense — aménagement du local, installation
              des machines, premiers processus de fermentation — leur cidrerie artisanale
              prend vie au cœur du Penthièvre breton.
            </p>
          </div>
        </div>

        {/* Orchards section */}
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🌳',
              title: 'Verger naturel',
              text: "Les pommes proviennent d'un verger naturel situé à Saint-Carreuc, sélectionnées pour leur richesse en arômes.",
              color: 'from-apple-50 to-apple-100',
              border: 'border-apple-200',
            },
            {
              icon: '🌱',
              title: '5 hectares plantés',
              text: 'Eva et Nathan viennent de planter 5 hectares de pommiers à Hénansal et La Bouillie pour les prochaines récoltes.',
              color: 'from-cider-50 to-cider-100',
              border: 'border-cider-200',
            },
            {
              icon: '🧪',
              title: 'Fermentation naturelle',
              text: 'Nos cidres sont élaborés selon un procédé de fermentation naturelle, sans additifs, pour préserver toute la typicité du fruit.',
              color: 'from-bark-50 to-bark-100',
              border: 'border-bark-200',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`reveal rounded-2xl bg-gradient-to-br ${card.color} border ${card.border} p-8`}
            >
              <span className="text-4xl mb-4 block">{card.icon}</span>
              <h3 className="font-serif text-xl font-semibold text-apple-800 mb-3">
                {card.title}
              </h3>
              <p className="text-bark-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
