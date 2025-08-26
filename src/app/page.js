'use client'

import { useState } from 'react'
import { Timer, Palette, Command, Target, Zap, Activity } from 'lucide-react'
import Header from '../components/Header'
import ImageUploader from '../components/ImageUploader'
import ImageProcessor from '../components/ImageProcessor'
import ColorPalette from '../components/ColorPalette'
import SEOSection from '../components/SEOSection'
import Footer from '../components/Footer'

export default function Home() {
  const [uploadedImage, setUploadedImage] = useState(null)
  const [processedImageData, setProcessedImageData] = useState(null)
  const [usedColors, setUsedColors] = useState({})
  const [pixelSize, setPixelSize] = useState(8)

  const handleImageUpload = (imageData) => {
    setUploadedImage(imageData)
  }

  const handleImageProcess = (data) => {
    setProcessedImageData(data)
    setUsedColors(data.colorStats)
  }

  const handleNewUpload = () => {
    setUploadedImage(null)
    setProcessedImageData(null)
    setUsedColors({})
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">

        {/* Hero Section */}
        <section className="py-16 px-4 relative">
          {/* Animated background elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple-500/10 rounded-full animate-tech-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-neon-cyan-400/10 rounded-full animate-tech-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-neon-pink-500/10 rounded-full animate-tech-pulse" style={{ animationDelay: '2s' }}></div>

          <div className="max-w-7xl mx-auto text-center relative z-10">
            {/* Status indicators */}
            <div className="flex justify-center items-center space-x-6 mb-8">
              <div className="flex items-center space-x-2 tech-card rounded-full px-4 py-2 border border-neon-green-400/30">
                <div className="w-2 h-2 bg-neon-green-400 rounded-full animate-pulse"></div>
                <span className="text-neon-green-400 font-tech text-sm">SYSTEM_ONLINE</span>
              </div>
              <div className="flex items-center space-x-2 tech-card rounded-full px-4 py-2 border border-neon-cyan-400/30">
                <Activity className="w-3 h-3 text-neon-cyan-400" />
                <span className="text-neon-cyan-400 font-tech text-sm">LIVE_DATA</span>
              </div>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-white font-pixel leading-normal animate-slide-in-up">
              <div className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">
                WPLACE PIXEL
              </div>
              <div className="text-white mt-2">
                Live Cooldown Timer,
              </div>
              <div className="text-white">
                Color Palette & Info
              </div>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light mb-12 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Your central command for the Wplace Pixel! This site features a live cooldown timer,
              the official 64-color palette, and powerful planning tools to help your faction succeed
              on the wplace.app world map. Stop wasting pixels and start conquering!
            </p>

            {/* Feature highlights */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
              <div className="tech-card tech-border p-6 tech-hover animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 mx-auto mb-4 tech-border bg-gradient-to-br from-neon-purple-500 to-neon-pink-500 flex items-center justify-center">
                  <Timer className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-tech mb-2">LIVE_TIMER</h3>
                <p className="text-gray-400 text-sm">Precision cooldown tracking</p>
              </div>

              <div className="tech-card tech-border p-6 tech-hover animate-slide-in-up" style={{ animationDelay: '0.6s' }}>
                <div className="w-12 h-12 mx-auto mb-4 tech-border bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-tech mb-2">64_COLORS</h3>
                <p className="text-gray-400 text-sm">Complete palette access</p>
              </div>

              <div className="tech-card tech-border p-6 tech-hover animate-slide-in-up" style={{ animationDelay: '0.8s' }}>
                <div className="w-12 h-12 mx-auto mb-4 tech-border bg-gradient-to-br from-neon-green-400 to-neon-purple-500 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white font-tech mb-2">STRATEGY</h3>
                <p className="text-gray-400 text-sm">Advanced planning tools</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Function Area */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-6 py-3 tech-card rounded-full border border-neon-purple-400/30 mb-6 tech-border-sm">
                <Command className="w-5 h-5 text-neon-purple-400 mr-2" />
                <span className="text-neon-purple-300 font-tech">PIXEL_CONVERTER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white font-pixel mb-4">
                <div className="text-white">Transform Images</div>
                <div>
                  <span className="text-white">to </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 to-neon-purple-400">Wplace Pixels</span>
                </div>
              </h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Upload any image and convert it to a pixel-perfect Wplace overlay with our advanced color mapping system.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Side - Image Upload/Preview */}
              <div className="space-y-6">
                {!uploadedImage ? (
                  <ImageUploader onImageUpload={handleImageUpload} />
                ) : (
                  <ImageProcessor
                    image={uploadedImage}
                    onImageProcess={handleImageProcess}
                    onNewUpload={handleNewUpload}
                    processedData={processedImageData}
                    pixelSize={pixelSize}
                    showPreview={true}
                  />
                )}
              </div>

              {/* Right Side - Controls and Stats */}
              <div className="space-y-6">
                {!uploadedImage ? (
                  <div className="tech-card tech-border p-8 h-full flex items-center justify-center animate-slide-in-right">
                    <div className="text-center text-gray-400">
                      <div className="w-16 h-16 tech-border bg-gradient-to-br from-dark-700/50 to-dark-800/50 flex items-center justify-center mx-auto mb-4">
                        <div className="text-2xl">⚙️</div>
                      </div>
                      <p className="text-lg font-medium font-tech">UPLOAD_IMAGE_TO_BEGIN</p>
                      <p className="text-sm mt-2 text-neon-cyan-400 font-tech">
                        Controls and statistics will appear here
                      </p>
                    </div>
                  </div>
                ) : (
                  <ImageProcessor
                    image={uploadedImage}
                    onImageProcess={handleImageProcess}
                    onNewUpload={handleNewUpload}
                    processedData={processedImageData}
                    pixelSize={pixelSize}
                    setPixelSize={setPixelSize}
                    showControls={true}
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Color Palette Section */}
        <section className="pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <ColorPalette usedColors={usedColors} />
          </div>
        </section>

        {/* SEO Section */}
        <SEOSection />

        {/* Footer */}
      </main>
      <Footer />
    </>
  )
}