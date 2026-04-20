export default function Manifeste() {
  return (
    <section className="py-20 md:py-32 bg-apple-900 relative overflow-hidden">
      {/* Décorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-apple-800/50 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cider-900/30 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* Label */}
        <p className="text-apple-400 text-xs font-semibold tracking-[0.4em] uppercase mb-12 reveal">
          Notre manifeste
        </p>

        {/* Accroche principale */}
        <div className="reveal mb-16">
          <h2 className="font-serif font-bold text-white leading-tight mb-0">
            <span className="block text-4xl md:text-6xl lg:text-7xl">On n'a pas créé</span>
            <span className="block text-4xl md:text-6xl lg:text-7xl">une cidrerie.</span>
            <span
              className="block text-4xl md:text-6xl lg:text-7xl mt-4"
              style={{ color: '#c8f07a' }}
            >
              On a tenu une promesse...
            </span>
          </h2>
        </div>

        {/* Corps du manifeste */}
        <div className="reveal space-y-6 border-l-2 border-apple-600 pl-8">
          <div className="text-white/80 text-lg md:text-xl leading-relaxed font-serif italic space-y-3">
            <p>À notre grand-père, qui nous emmenait ramasser des pommes et nous parlait de grenouilles rainettes.</p>
            <p>À la Bretagne, qui nous a façonnés.</p>
            <p>À nous-mêmes, qui avons tout quitté pour faire quelque chose de vrai.</p>
          </div>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Ce cidre n'est pas un produit. C'est une histoire. Celle d'un frère et
            d'une sœur qui se sont regardés dans les yeux et ont dit oui — oui à la
            terre, oui au risque, oui à l'artisanat. Sans filet, avec conviction.
          </p>
          <p className="text-white/60 text-base md:text-lg leading-relaxed">
            Chaque bouteille que vous tenez entre vos mains porte ce oui.
            Elle porte les mains de Nathan dans le chai, la voix d'Eva sur le marché,
            et le souvenir d'un grand-père qui savait que ses petits-enfants
            reviendraient aux pommes.
          </p>
        </div>

        {/* Signature */}
        <div className="reveal mt-16 flex items-center gap-6">
          <div className="h-px flex-1 bg-apple-700" />
          <p className="text-white/40 text-sm font-medium tracking-widest uppercase">
            Eva & Nathan Bouguet · Hénansal, 2025
          </p>
          <div className="h-px flex-1 bg-apple-700" />
        </div>

      </div>
    </section>
  )
}
