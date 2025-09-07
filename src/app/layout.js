import './globals.css'

export const metadata = {
  title: 'Wplace Image Converter - Create Pixel-Perfect Art & Maps',
  description: 'Instantly convert any image into a pixel-perfect grid for Wplace, using the official color palette. The ultimate tool for planning your faction\'s masterpiece and preparing your next move. Stop guessing and start creating!',
  keywords: 'Wplace image converter, Wplace pixel art, image to pixel grid, pixel art generator, Wplace tool, Wplace map creator, Wplace faction planner, Wplace strategy, pixel-perfect grid, Wplace color palette, image to Wplace converter',
  openGraph: {
    title: 'Wplace Image Converter - Create Pixel-Perfect Art & Maps',
    description: 'Instantly convert any image into a pixel-perfect grid for Wplace, using the official color palette. The ultimate tool for planning your faction\'s masterpiece and preparing your next move. Stop guessing and start creating!',
    type: 'website',
    siteName: 'Wplace Pixel Command Center',
    url: 'https://www.wplacepixel.info',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wplace Image Converter - Create Pixel-Perfect Art & Maps',
    description: 'Instantly convert any image into a pixel-perfect grid for Wplace, using the official color palette. The ultimate tool for planning your faction\'s masterpiece and preparing your next move. Stop guessing and start creating!',
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-KRVV2MYK7Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-KRVV2MYK7Z');
    `,
          }}
        />
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