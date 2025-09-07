'use client'

import { useState } from 'react'
import { Menu, X, Zap, Timer, Palette } from 'lucide-react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        setIsMenuOpen(false)
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="bg-transparent backdrop-blur-sm border-b border-neon-purple-500/10">
                <nav className="max-w-7xl mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="/" className="flex items-center space-x-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 tech-border-sm bg-gradient-to-br from-neon-purple-500 to-neon-cyan-400 flex items-center justify-center shadow-neon-purple">
                                    <Zap className="w-5 h-5 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <div className="hidden sm:block">
                                <div className="text-lg font-bold text-white font-tech tracking-wide">WPLACE</div>
                                <div className="text-xs text-neon-cyan-400 font-tech">PIXEL COMMAND</div>
                            </div>
                        </a>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="text-gray-300 hover:text-neon-purple-400 transition-colors duration-300 font-medium relative group"
                            >
                                Features
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-purple-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('palette')}
                                className="text-gray-300 hover:text-neon-cyan-400 transition-colors duration-300 font-medium relative group"
                            >
                                Color Palette
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                            <button
                                onClick={() => scrollToSection('tools')}
                                className="text-gray-300 hover:text-neon-pink-400 transition-colors duration-300 font-medium relative group"
                            >
                                Tools
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink-400 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="neon-button px-6 py-2 rounded-lg font-medium text-white relative z-10 tech-border-sm"
                            >
                                <Timer className="w-4 h-4 inline mr-2" />
                                Image Converter
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-white p-2 tech-card rounded-lg"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-4 pt-4 border-t border-gray-700/50 space-y-4">
                            <button
                                onClick={() => scrollToSection('features')}
                                className="block w-full text-left text-gray-300 hover:text-neon-purple-400 transition-colors font-medium py-2"
                            >
                                Features
                            </button>
                            <button
                                onClick={() => scrollToSection('palette')}
                                className="block w-full text-left text-gray-300 hover:text-neon-cyan-400 transition-colors font-medium py-2"
                            >
                                Color Palette
                            </button>
                            <button
                                onClick={() => scrollToSection('tools')}
                                className="block w-full text-left text-gray-300 hover:text-neon-pink-400 transition-colors font-medium py-2"
                            >
                                Tools
                            </button>
                            <button
                                onClick={() => {
                                    window.scrollTo({ top: 0, behavior: 'smooth' })
                                    setIsMenuOpen(false)
                                }}
                                className="neon-button w-full px-6 py-3 rounded-lg font-medium text-white tech-border-sm flex items-center justify-center"
                            >
                                <Timer className="w-4 h-4 mr-2" />
                                Image Converter
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}