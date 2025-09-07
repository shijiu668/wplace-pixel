'use client'

import {
    Zap,
    Timer,
    Palette,
    Target,
    Shield,
    Users,
    Rocket,
    Monitor,
    Cpu,
    Activity,
    BarChart3,
    Settings,
    Crown,
    Star,
    Lightbulb,
    TrendingUp,
    Award,
    Database,
    Command,
    Layers,
    Grid,
    Eye
} from 'lucide-react'

export default function SEOSection() {
    const features = [
        {
            icon: Timer,
            title: "Advanced Image Converter",
            description: "Transform any image into pixel-perfect Wplace art with our advanced conversion system that maps every pixel to the official color palette.",
            gradient: "from-neon-purple-500 to-neon-cyan-400"
        },
        {
            icon: Palette,
            title: "64-Color Palette Hub",
            description: "Access the complete Wplace pixel color palette with detailed information about free and premium colors for strategic planning.",
            gradient: "from-neon-pink-500 to-neon-purple-500"
        },
        {
            icon: Target,
            title: "Precision Pixel Planning",
            description: "Convert any image to Wplace pixel coordinates with pixel-perfect accuracy using our advanced color mapping algorithms.",
            gradient: "from-neon-cyan-400 to-neon-green-400"
        },
        {
            icon: Shield,
            title: "Strategic Command Center",
            description: "Coordinate large-scale Wplace pixel operations with comprehensive tools designed for faction leaders and strategic planners.",
            gradient: "from-neon-green-400 to-neon-cyan-400"
        }
    ]

    const tools = [
        {
            title: "Image to Pixel Converter",
            description: "Transform any image into a Wplace pixel grid overlay with real-time preview and detailed color analysis.",
            icon: Grid,
            stats: "Unlimited conversions"
        },
        {
            title: "Color Palette Analyzer",
            description: "Analyze which Wplace pixel colors are used in your designs and optimize for free vs premium color distribution.",
            icon: Eye,
            stats: "64 color analysis"
        },
        {
            title: "Pixel Statistics Dashboard",
            description: "Get detailed statistics about your Wplace pixel projects including color usage, pixel counts, and optimization suggestions.",
            icon: BarChart3,
            stats: "Real-time data"
        }
    ]

    const benefits = [
        "Maximize efficiency with precise Wplace pixel image conversion",
        "Access complete 64-color Wplace pixel palette information",
        "Convert images to pixel-perfect Wplace coordinates instantly",
        "Coordinate faction strategies with advanced planning tools",
        "Optimize pixel placement with real-time image conversion and preview",
        "Strategic color selection for maximum visual impact on Wplace"
    ]

    const techniques = [
        {
            title: "Advanced Color Mapping",
            description: "Our Wplace pixel converter uses perceptual color distance algorithms to ensure every pixel matches the closest official Wplace color.",
            icon: Command
        },
        {
            title: "Cooldown Synchronization",
            description: "Precise timer synchronization with Wplace servers ensures accurate cooldown tracking for optimal pixel placement timing.",
            icon: Activity
        },
        {
            title: "Grid Optimization",
            description: "Intelligent pixel size adjustment and grid optimization maximize visual impact while minimizing resource usage on Wplace.",
            icon: Layers
        }
    ]

    return (
        <section id="features" className="py-20 space-y-20">
            <div className="max-w-7xl mx-auto px-4">

                {/* Style 1: Hero Features Grid */}
                <div className="animate-slide-in-up">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-6 py-3 tech-card rounded-full border border-neon-purple-400/30 mb-8 tech-border-sm">
                            <Lightbulb className="w-5 h-5 text-neon-purple-400 mr-2" />
                            <span className="text-neon-purple-300 font-tech">CORE_FEATURES</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight font-tech">
                            <span className="text-white">Ultimate </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">Wplace Pixel</span>
                            <span className="text-white"> Command Center</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            Your comprehensive Wplace pixel management system featuring live cooldown timers, complete color palette access,
                            and advanced planning tools. Transform your Wplace pixel strategy with professional-grade tools designed for
                            serious players and faction coordinators.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <div
                                    key={index}
                                    className="group tech-card tech-border p-8 tech-hover"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className={`w-16 h-16 tech-border bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-tech`}>
                                        <Icon size={32} className="text-white" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-tech">{feature.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Style 2: Advanced Tools Section */}
                <div id="tools" className="mb-20">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center px-6 py-3 tech-card rounded-full border border-neon-cyan-400/30 mb-8 tech-border-sm">
                            <Cpu className="w-5 h-5 text-neon-cyan-400 mr-2" />
                            <span className="text-neon-cyan-300 font-tech">ADVANCED_TOOLS</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight font-tech">
                            <span className="text-white">Professional </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 to-neon-green-400">Wplace Pixel</span>
                            <span className="text-white"> Toolkit</span>
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Comprehensive suite of Wplace pixel tools designed for strategic dominance. Our advanced algorithms and
                            real-time systems give you the competitive edge needed to succeed in the Wplace pixel battlefield.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {tools.map((tool, index) => {
                            const Icon = tool.icon
                            return (
                                <div
                                    key={index}
                                    className="relative tech-card tech-border p-8 tech-hover group"
                                    style={{ animationDelay: `${index * 0.2}s` }}
                                >
                                    <div className="absolute top-4 right-4">
                                        <div className="px-3 py-1 tech-card rounded-full border border-neon-green-400/30 text-xs text-neon-green-400 font-tech">
                                            {tool.stats}
                                        </div>
                                    </div>

                                    <div className="w-14 h-14 tech-border bg-gradient-to-br from-dark-700 to-dark-800 flex items-center justify-center mb-6 shadow-tech group-hover:shadow-neon-cyan transition-all">
                                        <Icon size={24} className="text-neon-cyan-400" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-4 font-tech">{tool.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{tool.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Style 3: Wplace Pixel Benefits Showcase */}
                <div className="mb-20">
                    <div className="tech-card tech-border p-12 relative overflow-hidden">
                        {/* Background decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-neon-purple-500/10 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-neon-cyan-400/10 to-transparent rounded-full translate-y-32 -translate-x-32"></div>

                        <div className="relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl font-bold mb-6 font-tech">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">
                                        Why Choose Our Wplace Pixel System
                                    </span>
                                </h2>
                                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                                    Our Wplace pixel management system combines cutting-edge technology with intuitive design to deliver
                                    the most comprehensive pixel planning and execution platform available for serious Wplace strategists.
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-6 font-tech">Strategic Advantages</h3>
                                    <div className="space-y-4">
                                        {benefits.map((benefit, index) => (
                                            <div key={index} className="flex items-start space-x-3">
                                                <div className="w-2 h-2 bg-neon-purple-400 rounded-full mt-2 flex-shrink-0 animate-pulse"></div>
                                                <span className="text-gray-300">{benefit}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="tech-card rounded-lg p-6 text-center border border-gray-600/30">
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400 font-tech mb-2">64</div>
                                        <div className="text-gray-400 text-sm font-tech">WPLACE_COLORS</div>
                                    </div>
                                    <div className="tech-card rounded-lg p-6 text-center border border-gray-600/30">
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 to-neon-green-400 font-tech mb-2">∞</div>
                                        <div className="text-gray-400 text-sm font-tech">CONVERSIONS</div>
                                    </div>
                                    <div className="tech-card rounded-lg p-6 text-center border border-gray-600/30">
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green-400 to-neon-purple-400 font-tech mb-2">⚡</div>
                                        <div className="text-gray-400 text-sm font-tech">REAL_TIME</div>
                                    </div>
                                    <div className="tech-card rounded-lg p-6 text-center border border-gray-600/30">
                                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink-400 to-neon-purple-400 font-tech mb-2">64/64</div>
                                        <div className="text-gray-400 text-sm font-tech">AVAILABLE</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Style 4: Technical Excellence Grid */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-8 text-white font-tech">
                            <span className="text-white">Advanced </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 to-neon-purple-400">Wplace Pixel</span>
                            <span className="text-white"> Technology</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {techniques.map((technique, index) => {
                            const Icon = technique.icon
                            return (
                                <div
                                    key={index}
                                    className="tech-card tech-border p-8 tech-hover text-center relative group overflow-hidden"
                                >
                                    {/* Animated background */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-neon-purple-500/5 to-neon-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="w-16 h-16 mx-auto mb-6 tech-border bg-gradient-to-br from-neon-cyan-400 to-neon-purple-500 flex items-center justify-center shadow-tech group-hover:shadow-neon-cyan transition-all">
                                            <Icon size={32} className="text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-4 font-tech">{technique.title}</h3>
                                        <p className="text-gray-300 leading-relaxed">{technique.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Style 5: Accordion-style FAQ */}
                <div className="mb-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-8 text-white font-tech">
                            <span className="text-white">Everything About </span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">Wplace Pixel</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        <div className="tech-card tech-border p-6 tech-hover">
                            <h3 className="text-xl font-bold text-white mb-3 font-tech">What makes our Wplace Pixel converter unique?</h3>
                            <p className="text-gray-300">
                                Our Wplace pixel image converter features advanced color mapping algorithms and intelligent pixel optimization that ensure
                                perfect visual translation from any source image. The system processes multiple image formats simultaneously and provides
                                real-time preview with detailed statistics for maximum efficiency in your Wplace pixel art creation.
                            </p>
                        </div>

                        <div className="tech-card tech-border p-6 tech-hover">
                            <h3 className="text-xl font-bold text-white mb-3 font-tech">How accurate is the Wplace Pixel color conversion?</h3>
                            <p className="text-gray-300">
                                Our Wplace pixel color mapping system uses advanced perceptual color distance calculations that analyze RGB values
                                with 100% accuracy. The algorithm considers human color perception to ensure your converted images maintain
                                visual integrity while optimizing for the official 64-color Wplace palette.
                            </p>
                        </div>

                        <div className="tech-card tech-border p-6 tech-hover">
                            <h3 className="text-xl font-bold text-white mb-3 font-tech">Can teams use Wplace Pixel tools for coordination?</h3>
                            <p className="text-gray-300">
                                Absolutely! Our Wplace pixel toolkit is designed for team coordination with features like shared cooldown tracking,
                                collaborative image planning, and strategic overlay generation. Teams can coordinate large-scale Wplace pixel
                                operations with precision timing and optimal resource allocation across multiple participants.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Style 6: Statistics Dashboard */}
                <div className="mb-20">
                    <div className="tech-card tech-border p-12 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple-500/5 via-transparent to-neon-cyan-400/5"></div>

                        <div className="relative z-10 text-center">
                            <h2 className="text-4xl font-bold mb-6 text-white font-tech leading-tight">
                                <span className="text-white">Trusted by </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">Wplace Pixel</span>
                                <span className="text-white"> Strategists</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
                                Join thousands of successful Wplace pixel coordinators who rely on our professional-grade tools for
                                strategic dominance and optimal pixel placement efficiency.
                            </p>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="tech-card rounded-lg p-6 border border-gray-600/30">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400 font-tech mb-2">50K+</div>
                                    <div className="text-gray-400 text-sm font-tech">PIXELS_PLACED</div>
                                </div>
                                <div className="tech-card rounded-lg p-6 border border-gray-600/30">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan-400 to-neon-green-400 font-tech mb-2">excellent</div>
                                    <div className="text-gray-400 text-sm font-tech">REAL-TIME</div>
                                </div>
                                <div className="tech-card rounded-lg p-6 border border-gray-600/30">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-green-400 to-neon-purple-400 font-tech mb-2">0.3s</div>
                                    <div className="text-gray-400 text-sm font-tech">UPTIME</div>
                                </div>
                                <div className="tech-card rounded-lg p-6 border border-gray-600/30">
                                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-pink-400 to-neon-purple-400 font-tech mb-2">64/64</div>
                                    <div className="text-gray-400 text-sm font-tech">SUPPORT</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Style 7: Feature Comparison Cards */}
                <div className="mb-20">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="tech-card tech-border p-8 tech-hover text-center relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="px-4 py-2 tech-card rounded-full border border-neon-purple-400/30 text-neon-purple-400 font-tech text-sm">
                                    COOLDOWN
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="w-16 h-16 mx-auto tech-border bg-gradient-to-br from-neon-purple-500 to-neon-pink-500 flex items-center justify-center mb-6 shadow-tech">
                                    <Timer size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-tech">Live Timer System</h3>
                                <p className="text-gray-300">
                                    Precision Wplace pixel cooldown tracking with server synchronization and predictive placement optimization
                                    for maximum strategic efficiency.
                                </p>
                            </div>
                        </div>

                        <div className="tech-card tech-border p-8 tech-hover text-center relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="px-4 py-2 tech-card rounded-full border border-neon-cyan-400/30 text-neon-cyan-400 font-tech text-sm">
                                    PALETTE
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="w-16 h-16 mx-auto tech-border bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 flex items-center justify-center mb-6 shadow-tech">
                                    <Palette size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-tech">Color Intelligence</h3>
                                <p className="text-gray-300">
                                    Complete 64-color Wplace pixel palette with advanced color analysis, usage statistics, and strategic
                                    color selection optimization tools.
                                </p>
                            </div>
                        </div>

                        <div className="tech-card tech-border p-8 tech-hover text-center relative group">
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <div className="px-4 py-2 tech-card rounded-full border border-neon-green-400/30 text-neon-green-400 font-tech text-sm">
                                    STRATEGY
                                </div>
                            </div>
                            <div className="pt-6">
                                <div className="w-16 h-16 mx-auto tech-border bg-gradient-to-br from-neon-green-400 to-neon-purple-500 flex items-center justify-center mb-6 shadow-tech">
                                    <Target size={32} className="text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4 font-tech">Planning Hub</h3>
                                <p className="text-gray-300">
                                    Professional image-to-pixel conversion with coordinate mapping, team coordination tools, and strategic
                                    overlay generation for Wplace dominance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Style 8: Final Call-to-Action */}
                <div className="text-center">
                    <div className="tech-card tech-border p-12 relative overflow-hidden">
                        {/* Animated background elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-neon-purple-500/10 rounded-full animate-tech-pulse"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 bg-neon-cyan-400/10 rounded-full animate-tech-pulse" style={{ animationDelay: '1s' }}></div>

                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6 text-white leading-tight font-tech">
                                <span className="text-white">Master </span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400">Wplace Pixel</span>
                                <span className="text-white"> Strategy Today</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                                Join the ranks of elite Wplace pixel strategists using our comprehensive command center. Advanced cooldown tracking,
                                complete color palette access, and professional planning tools await your command.
                            </p>

                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="neon-button px-12 py-4 rounded-lg font-tech font-bold text-lg text-white inline-flex items-center space-x-3 shadow-tech hover:shadow-neon-purple tech-border"
                            >
                                <Zap size={24} />
                                <span>ACCESS_COMMAND_CENTER</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}