import './globals.css'

export const metadata = {
  title: 'Wplace Pixel | Live Cooldown Timer, Color Palette & Info',
  description: 'Your central command for the Wplace Pixel! This site features a live cooldown timer, the official 64-color palette, and powerful planning tools to help your faction succeed on the wplace.live world map. Stop wasting pixels and start conquering!',
  keywords: 'wplace pixel, live cooldown timer, color palette, wplace pixel timer, wplace strategy, pixel planning, wplace coordination, wplace pixel tools',
  openGraph: {
    title: 'Wplace Pixel | Live Cooldown Timer, Color Palette & Info',
    description: 'Your central command for the Wplace Pixel! Features live cooldown timer, 64-color palette, and strategic planning tools.',
    type: 'website',
    siteName: 'Wplace Pixel Command Center',
    url: 'https://www.wplacepixel.info',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wplace Pixel | Live Cooldown Timer, Color Palette & Info',
    description: 'Your central command for the Wplace Pixel! Features live cooldown timer, 64-color palette, and strategic planning tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.wplacepixel.info" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}