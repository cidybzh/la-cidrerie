const schedule = [
  { day: 'Mercredi', hours: '17h30 – 19h30', icon: '🌿' },
  { day: 'Vendredi',  hours: '17h30 – 19h30', icon: '🌿' },
]

const visitContent = [
  {
    step: '01',
    title: 'Accueil & présentation',
    text: 'Découvrez l'histoire de la cidrerie, la fratrie Bouguet et leur vision d'un cidre artisanal breton authentique.',
  },
  {
    step: '02',
    title: 'Visite du chai',
    text: 'Explorez les installations, comprenez le processus de fermentation naturelle et admirez le soin apporté à chaque étape.',
  },
  {
    step: '03',
    title: 'Dégustation',
    text: 'Goûtez notre cidre et notre jus de pomme, et repartez avec vos coups de cœur directement depuis la cidrerie.',
  },
]

export default function Visits() {
  return (
    <section id="visites" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-apple-500 text-sm tracking-[0.3em] uppercase font-medium mb-3">
            Visites & dégustations
          </p>
          <h2 className="section-title">Venez vivre l'expérience</h2>
          <p className="section-subtitle">
            À partir d'avril 2026, Eva et Nathan vous ouvrent les portes de
            leur cidrerie pour vous faire découvrir les secrets de leur savoir-faire.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: schedule & inauguration */}
          <div className="reveal space-y-8">
            {/* Weekly schedule */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-apple-800 mb-6">
                Horaires d'ouverture
              </h3>
              <div className="space-y-4">
                {schedule.map((s) => (
                  <div
                    key={s.day}
                    className="flex items-center justify-between bg-apple-50 border border-apple-100 rounded-2xl px-6 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{s.icon}</span>
                      <span className="font-semibold text-apple-800 text-lg">
                        {s.day}
                      </span>
                    </div>
                    <span className="text-bark-600 font-medium">{s.hours}</span>
                  </div>
                ))}
              </div>
              <p className="text-bark-500 text-sm mt-3 italic">
                À partir du mois d'avril 2026
              </p>
            </div>

            {/* Inauguration */}
            <div
              className="rounded-3xl p-8 text-white relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #537c25, #6d9b32, #d98b17)',
              }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
              <p className="text-white/80 text-sm tracking-widest uppercase mb-2">
                Inauguration officielle
              </p>
              <h4 className="font-serif text-3xl font-bold mb-3">
                Samedi 16 mai 2026
              </h4>
              <p className="text-white/90 leading-relaxed mb-5">
                Venez fêter l'ouverture de la cidrerie ! Entrée libre, restauration
                disponible sur place. Une journée festive et conviviale à ne pas manquer.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full">
                  Entrée libre
                </span>
                <span className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full">
                  Restauration sur place
                </span>
                <span className="bg-white/20 backdrop-blur text-white text-sm px-4 py-2 rounded-full">
                  Tout public
                </span>
              </div>
            </div>
          </div>

          {/* Right: visit steps */}
          <div className="reveal space-y-6">
            <h3 className="font-serif text-2xl font-bold text-apple-800 mb-6">
              Au programme de votre visite
            </h3>
            {visitContent.map((v, i) => (
              <div key={v.step} className="flex gap-5">
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-serif font-bold text-white text-sm"
                    style={{ background: 'linear-gradient(135deg, #6d9b32, #537c25)' }}
                  >
                    {v.step}
                  </div>
                  {i < visitContent.length - 1 && (
                    <div className="w-0.5 h-10 bg-apple-100 mx-auto mt-2" />
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <h4 className="font-serif text-xl font-semibold text-apple-800 mb-2">
                    {v.title}
                  </h4>
                  <p className="text-bark-600 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="bg-bark-50 border border-bark-100 rounded-2xl p-6 mt-2">
              <p className="text-bark-700 font-medium mb-1">Renseignements & réservations</p>
              <a
                href="tel:0652081587"
                className="text-apple-600 hover:text-apple-700 text-2xl font-serif font-bold tracking-wide transition-colors"
              >
                06 52 08 15 87
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
