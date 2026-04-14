import './globals.css'

export const metadata = {
  title: 'Cidrerie du Penthièvre La Rainette',
  description: 'Cidrerie artisanale à Hénansal, Côtes-d\'Armor. Cidre et jus de pomme issus de vergers naturels. Visites et dégustations les mercredis et vendredis.',
  keywords: 'cidrerie, cidre artisanal, Hénansal, Penthièvre, La Rainette, Bretagne, jus de pomme, dégustation',
  openGraph: {
    title: 'Cidrerie du Penthièvre La Rainette',
    description: 'Cidrerie artisanale bretonne — Cidre & Jus de pomme naturels',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
