'use client'

import { Zap, Timer, Palette, ExternalLink, Github, Twitter, Mail, Command } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="tech-card border-t border-neon-purple-500/20 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-neon-purple-500/5 rounded-full -translate-y-32 -translate-x-32 animate-tech-pulse"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-neon-cyan-400/5 rounded-full translate-y-32 translate-x-32 animate-tech-pulse" style={{ animationDelay: '2s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="relative">
                                <div className="w-12 h-12 tech-border bg-gradient-to-br from-neon-purple-500 to-neon-cyan-400 flex items-center justify-center shadow-neon-purple">
                                    <Command className="w-7 h-7 text-white" />
                                </div>
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green-400 rounded-full animate-pulse"></div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-white font-tech">WPLACE PIXEL</div>
                                <div className="text-sm text-neon-cyan-400 font-tech">COMMAND CENTER</div>
                            </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed max-w-md mb-6">
                            The ultimate Wplace Pixel command center featuring live cooldown timers, complete color palette access,
                            and advanced strategic planning tools for serious Wplace pixel dominance.
                        </p>
                        <div className="flex items-center space-x-2 text-gray-400 font-tech">
                            <span>Built for</span>
                            <div className="w-2 h-2 bg-neon-pink-400 rounded-full animate-pulse"></div>
                            <span className="text-neon-pink-400">ELITE STRATEGISTS</span>
                        </div>
                    </div>

                    {/* System Resources */}
                    <div>
                        <h4 className="text-xl font-bold text-white mb-6 font-tech">SYSTEM_STATUS</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="https://wplace.live"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-neon-pink-400 transition-colors duration-300 flex items-center space-x-2 font-tech group"
                                >
                                    <span>WPLACE_MAP</span>
                                    <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Separator */}
                <div className="h-px bg-gradient-to-r from-transparent via-neon-purple-400/20 to-transparent mb-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0 font-tech">
                        <p>© 2025 WPLACE PIXEL COMMAND CENTER. ALL_RIGHTS_RESERVED.</p>
                        <p className="text-sm mt-1 text-neon-cyan-400">
                            INDEPENDENT_TOOL • NOT_AFFILIATED_WITH_WPLACE.APP
                        </p>
                    </div>

                    {/* System Info */}
                    <div className="flex items-center space-x-4 text-gray-500 font-tech text-xs">
                        <div className="flex items-center space-x-1">
                            <Timer className="w-3 h-3" />
                            <span>v2.0.1</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Palette className="w-3 h-3" />
                            <span>64_COLORS</span>
                        </div>
                        <div className="flex items-center space-x-1">
                            <Zap className="w-3 h-3" />
                            <span>REAL_TIME</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tech border decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <div className="h-1 bg-gradient-to-r from-neon-purple-500 via-neon-cyan-400 to-neon-pink-500 opacity-50"></div>
            </div>
        </footer>
    )
}