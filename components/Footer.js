export default function Footer() {
  return (
    <footer
      className="py-12 md:py-16 text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2e431c 0%, #406020 50%, #537c25 100%)',
      }}
    >
      {/* Decoration */}
      <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute top-0 left-0 w-48 h-48 rounded-full bg-cider-400/10 blur-2xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🍎</span>
              <div>
                <p className="font-serif text-xl font-bold">La Rainette</p>
                <p className="text-white/60 text-xs tracking-widest uppercase">
                  Cidrerie du Penthièvre
                </p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm">
              On a tout quitté pour faire ce cidre. On espère que vous l'aimerez
              autant qu'on aime le faire.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {[
                ['#histoire', 'Notre histoire'],
                ['#produits', 'Nos produits'],
                ['#visites', 'Visites & dégustations'],
                ['#contact', 'Nous trouver'],
              ].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-white/70 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-white/70 text-sm space-y-2">
              <p>15, route des Salles</p>
              <p>Launay-Congard, Hénansal</p>
              <p>22400 Côtes-d'Armor</p>
              <a
                href="tel:0652081587"
                className="block mt-4 text-cider-300 hover:text-cider-200 font-medium transition-colors"
              >
                06 52 08 15 87
              </a>
            </address>

            <div className="mt-6">
              <p className="text-white/40 text-xs italic">Réseaux sociaux à venir</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-xs">
          <p>© 2026 Cidrerie du Penthièvre La Rainette — Eva & Nathan Bouguet</p>
          <p>Site propulsé par <span className="text-white/60 font-medium">MlleCindy</span></p>
        </div>
      </div>
    </footer>
  )
}
