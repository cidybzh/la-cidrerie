export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient simulating orchard at dawn */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, #1a3a0e 0%, #2e5c1a 25%, #4a7c2a 45%, #6d9b32 65%, #d98b17 85%, #e6a82a 100%)',
        }}
      />

      {/* Overlay texture */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-cider-300/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-apple-300/10 blur-3xl" />

      {/* Apple illustration — CSS art */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block opacity-20">
        <div
          className="w-64 h-72 rounded-full"
          style={{
            background: 'radial-gradient(circle at 40% 35%, #8db84f, #2e5c1a)',
            boxShadow: 'inset -20px -20px 40px rgba(0,0,0,0.3)',
          }}
        />
        <div
          className="absolute top-4 left-1/2 -translate-x-1/2 w-4 h-10 rounded-full"
          style={{ background: '#4d3f2f', transform: 'translateX(8px) rotate(5deg)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-cider-300 text-sm tracking-[0.3em] uppercase font-medium mb-6 animate-fade-in">
          Cidrerie artisanale — Hénansal, Côtes-d'Armor
        </p>

        <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-6">
          Cidrerie du Penthièvre
          <br />
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: 'linear-gradient(90deg, #ecc14e, #e6a82a)',
            }}
          >
            La Rainette
          </span>
        </h1>

        <p className="text-white/80 text-xl md:text-2xl font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          Cidre et jus de pomme artisanaux, issus de vergers naturels bretons.<br />
          Une histoire de famille, un hommage à la terre.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#produits" className="btn-primary text-base px-10 py-4">
            Découvrir nos produits
          </a>
          <a href="/reserver" className="btn-outline text-base px-10 py-4">
            Réserver une visite
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
