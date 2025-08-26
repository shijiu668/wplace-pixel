'use client'

import { Crown, Star, Palette, Activity, Database } from 'lucide-react'
import { WPLACE_COLORS } from '../utils/colorMapping'

export default function ColorPalette({ usedColors = {} }) {
    const colorsPerRow = 32
    const firstRow = WPLACE_COLORS.slice(0, colorsPerRow)
    const secondRow = WPLACE_COLORS.slice(colorsPerRow)

    const renderColorRow = (colors, rowIndex) => (
        <div className="color-grid gap-1 sm:gap-2">
            {colors.map((color, index) => {
                const isUsed = usedColors.hasOwnProperty(color.name)
                const count = usedColors[color.name] || 0

                return (
                    <div
                        key={color.name}
                        className={`
                            relative aspect-square tech-border-sm cursor-pointer group transition-all duration-300 min-h-[20px] min-w-[20px]
                            ${isUsed
                                ? 'border-2 border-neon-purple-400 shadow-neon-purple scale-105 animate-pulse-neon'
                                : 'border border-gray-600/30 hover:border-neon-cyan-400/60 hover:scale-105 hover:shadow-neon-cyan'
                            }
                        `}
                        style={{ backgroundColor: color.hex }}
                        onMouseEnter={(e) => {
                            const tooltip = document.getElementById(`tooltip-${color.name}`)
                            if (tooltip) {
                                const rect = e.target.getBoundingClientRect()
                                tooltip.style.left = (rect.left + rect.width / 2) + 'px'
                                tooltip.style.top = (rect.top - 70) + 'px'
                                tooltip.style.opacity = '1'
                            }
                        }}
                        onMouseLeave={() => {
                            const tooltip = document.getElementById(`tooltip-${color.name}`)
                            if (tooltip) {
                                tooltip.style.opacity = '0'
                            }
                        }}
                    >
                        {/* 使用指示器 */}
                        {isUsed && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full shadow-tech animate-pulse border border-neon-purple-400"></div>
                            </div>
                        )}

                        {/* 使用计数 */}
                        {isUsed && count > 0 && (
                            <div className="absolute -top-1 -right-1 bg-gradient-to-br from-neon-purple-500 to-neon-cyan-400 text-white text-xs rounded-full min-w-[16px] h-4 flex items-center justify-center px-1 font-bold text-[10px] font-tech border border-white/20">
                                {count > 999 ? '999+' : count}
                            </div>
                        )}

                        {/* 类型指示器 */}
                        {color.type === 'premium' && (
                            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center tech-border-sm">
                                <Crown className="w-1.5 h-1.5 text-white" />
                            </div>
                        )}

                        {color.type === 'free' && !isUsed && (
                            <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity tech-border-sm">
                                <Star className="w-1.5 h-1.5 text-white" />
                            </div>
                        )}
                    </div>
                )
            })}

            {/* Fixed定位的提示框 - 避免被容器截断 */}
            {colors.map((color) => {
                const isUsed = usedColors.hasOwnProperty(color.name)
                const count = usedColors[color.name] || 0

                return (
                    <div
                        key={`tooltip-${color.name}`}
                        id={`tooltip-${color.name}`}
                        className="fixed bg-gray-900 border border-gray-600 text-white px-3 py-2 text-xs rounded whitespace-nowrap z-[9999] opacity-0 transition-opacity pointer-events-none shadow-lg"
                        style={{ transform: 'translateX(-50%)' }}
                    >
                        <div className="font-medium font-tech">{color.name.replace(/_/g, ' ')}</div>
                        <div className="text-gray-300 font-tech">{color.hex}</div>
                        <div className={`font-tech ${color.type === 'free' ? 'text-green-400' : 'text-yellow-400'}`}>
                            {color.type === 'free' ? '✨ Free' : '👑 Premium'}
                        </div>
                        {isUsed && <div className="font-bold text-neon-purple-400 font-tech">{count} pixels used</div>}
                    </div>
                )
            })}
        </div>
    )

    const usedColorCount = Object.keys(usedColors).length
    const totalPixelCount = Object.values(usedColors).reduce((sum, count) => sum + count, 0)
    const freeColors = Object.keys(usedColors).filter(name => {
        const color = WPLACE_COLORS.find(c => c.name === name)
        return color?.type === 'free'
    }).length
    const premiumColors = usedColorCount - freeColors

    return (
        <div id="palette" className="tech-card tech-border p-8 animate-slide-in-up relative" style={{ animationDelay: '0.4s', overflow: 'visible' }}>
            {/* 标题区域 */}
            <div className="text-center mb-8">
                <div className="flex items-center justify-center space-x-3 mb-4">
                    <div className="w-12 h-12 tech-border bg-gradient-to-br from-neon-pink-500 to-neon-purple-500 flex items-center justify-center shadow-neon-pink">
                        <Palette size={24} className="text-white" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white font-pixel">WPLACE_PALETTE</h2>
                        <p className="text-neon-cyan-400 font-tech text-sm">64_OFFICIAL_COLORS</p>
                    </div>
                </div>
                <p className="text-gray-300 text-lg max-w-4xl mx-auto">
                    Official 64-color palette for Wplace pixel operations. Used colors are highlighted and show pixel counts in real-time.
                </p>
            </div>

            {/* 统计信息 */}
            {usedColorCount > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div className="tech-card rounded-lg p-4 text-center border border-gray-600/30">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Activity className="w-5 h-5 text-neon-purple-400" />
                            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400 font-tech">
                                {usedColorCount}
                            </div>
                        </div>
                        <div className="text-gray-400 text-sm font-tech">COLORS_ACTIVE</div>
                    </div>
                    <div className="tech-card rounded-lg p-4 text-center border border-gray-600/30">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Database className="w-5 h-5 text-white" />
                            <div className="text-2xl font-bold text-white font-tech">{totalPixelCount}</div>
                        </div>
                        <div className="text-gray-400 text-sm font-tech">TOTAL_PIXELS</div>
                    </div>
                    <div className="tech-card rounded-lg p-4 text-center border border-gray-600/30">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Star className="w-5 h-5 text-green-400" />
                            <div className="text-2xl font-bold text-green-400 font-tech">{freeColors}</div>
                        </div>
                        <div className="text-gray-400 text-sm font-tech">FREE_COLORS</div>
                    </div>
                    <div className="tech-card rounded-lg p-4 text-center border border-gray-600/30">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <Crown className="w-5 h-5 text-yellow-400" />
                            <div className="text-2xl font-bold text-yellow-400 font-tech">{premiumColors}</div>
                        </div>
                        <div className="text-gray-400 text-sm font-tech">PREMIUM_COLORS</div>
                    </div>
                </div>
            )}

            {/* 颜色网格 */}
            <div className="space-y-2 mb-8" style={{ overflow: 'visible' }}>
                {/* 第一行 */}
                <div className="relative">
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-neon-cyan-400 font-tech text-sm">
                    </div>
                    {renderColorRow(firstRow, 0)}
                </div>

                {/* 第二行 */}
                <div className="relative">
                    <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 text-neon-purple-400 font-tech text-sm">
                    </div>
                    {renderColorRow(secondRow, 1)}
                </div>
            </div>

            {/* 图例 */}
            <div className="tech-card rounded-lg p-6 border border-gray-600/30">
                <h3 className="text-lg font-bold text-white font-tech mb-4 text-center">LEGEND</h3>
                <div className="flex flex-wrap justify-center items-center gap-6">
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center tech-border-sm">
                            <Star className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-green-400 font-tech text-sm">FREE_ACCESS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center tech-border-sm">
                            <Crown className="w-2 h-2 text-white" />
                        </div>
                        <span className="text-yellow-400 font-tech text-sm">PREMIUM_ONLY</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-neon-purple-400 rounded-full bg-white/20 animate-pulse"></div>
                        <span className="text-neon-purple-400 font-tech text-sm">ACTIVE_USE</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 bg-neon-cyan-400 rounded-full text-white text-xs flex items-center justify-center font-tech tech-border-sm">
                            #
                        </div>
                        <span className="text-neon-cyan-400 font-tech text-sm">PIXEL_COUNT</span>
                    </div>
                </div>
            </div>
        </div>
    )
}