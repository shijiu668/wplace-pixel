'use client'

import { useState, useEffect, useRef } from 'react'
import { Download, RotateCcw, Maximize, X, Settings, BarChart3, Cpu, Monitor, Zap, Crown, Star } from 'lucide-react'
import { getClosestColor, WPLACE_COLORS } from '../utils/colorMapping'

export default function ImageProcessor({
    image,
    onImageProcess,
    onNewUpload,
    processedData,
    pixelSize = 8,
    setPixelSize = () => { },
    showPreview = false,
    showControls = false
}) {
    const [processedImage, setProcessedImage] = useState(null)
    const [colorStats, setColorStats] = useState({})
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [hoveredPixel, setHoveredPixel] = useState(null)
    const canvasRef = useRef(null)
    const fullscreenCanvasRef = useRef(null)
    const drawGrid = (ctx, width, height, gridSize) => {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)' // 半透明白色网格线
        ctx.lineWidth = 1
        ctx.setLineDash([]) // 实线

        // 绘制垂直线
        for (let x = 0; x <= width; x += gridSize) {
            ctx.beginPath()
            ctx.moveTo(x, 0)
            ctx.lineTo(x, height)
            ctx.stroke()
        }

        // 绘制水平线
        for (let y = 0; y <= height; y += gridSize) {
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(width, y)
            ctx.stroke()
        }
    }
    useEffect(() => {
        if (image && (showPreview || showControls)) {
            processImage()
        }
    }, [image, pixelSize, showPreview, showControls])

    const processImage = () => {
        if (!canvasRef.current) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        const img = new Image()
        img.onload = () => {
            const aspectRatio = img.width / img.height
            let newWidth, newHeight

            if (aspectRatio > 1) {
                newWidth = Math.floor(600 / pixelSize) * pixelSize
                newHeight = Math.floor(newWidth / aspectRatio / pixelSize) * pixelSize
            } else {
                newHeight = Math.floor(600 / pixelSize) * pixelSize
                newWidth = Math.floor(newHeight * aspectRatio / pixelSize) * pixelSize
            }

            canvas.width = newWidth
            canvas.height = newHeight

            ctx.imageSmoothingEnabled = false
            ctx.drawImage(img, 0, 0, newWidth, newHeight)

            const imageData = ctx.getImageData(0, 0, newWidth, newHeight)
            const data = imageData.data
            const stats = {}
            const pixelData = []
            let totalPixels = 0

            for (let y = 0; y < newHeight; y += pixelSize) {
                for (let x = 0; x < newWidth; x += pixelSize) {
                    const pixelIndex = (y * newWidth + x) * 4
                    const r = data[pixelIndex]
                    const g = data[pixelIndex + 1]
                    const b = data[pixelIndex + 2]

                    const closestColor = getClosestColor(r, g, b)
                    const colorKey = closestColor.name

                    stats[colorKey] = (stats[colorKey] || 0) + 1
                    totalPixels++

                    pixelData.push({
                        x: x / pixelSize,
                        y: y / pixelSize,
                        color: closestColor,
                        position: { x, y }
                    })

                    ctx.fillStyle = closestColor.hex
                    ctx.fillRect(x, y, pixelSize, pixelSize)
                }
            }

            setColorStats(stats)
            setProcessedImage(canvas.toDataURL())

            onImageProcess({
                processedImage: canvas.toDataURL(),
                colorStats: stats,
                totalPixels,
                pixelSize,
                dimensions: { width: newWidth, height: newHeight },
                pixelData
            })
        }
        img.src = image.src
    }

    const handleDownload = () => {
        if (processedData?.processedImage) {
            const link = document.createElement('a')
            link.download = `wplace-pixel-${Date.now()}.png`
            link.href = processedData.processedImage
            link.click()
        }
    }

    const openFullscreen = () => {
        setIsFullscreen(true)
        // 延迟执行以确保画布已渲染
        setTimeout(() => {
            if (fullscreenCanvasRef.current && processedData) {
                const canvas = fullscreenCanvasRef.current
                const ctx = canvas.getContext('2d')
                const img = new Image()
                img.onload = () => {
                    canvas.width = processedData.dimensions.width * 2
                    canvas.height = processedData.dimensions.height * 2
                    ctx.imageSmoothingEnabled = false
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

                    // 绘制网格线显示像素块边界
                    drawGrid(ctx, canvas.width, canvas.height, pixelSize * 2)
                }
                img.src = processedData.processedImage
            }
        }, 100)
    }

    const handleCanvasMouseMove = (e) => {
        if (!fullscreenCanvasRef.current || !processedData) return

        const canvas = fullscreenCanvasRef.current
        const rect = canvas.getBoundingClientRect()
        const scaleX = canvas.width / rect.width
        const scaleY = canvas.height / rect.height

        const x = Math.floor((e.clientX - rect.left) * scaleX / (pixelSize * 2))
        const y = Math.floor((e.clientY - rect.top) * scaleY / (pixelSize * 2))

        const pixelInfo = processedData.pixelData?.find(p => p.x === x && p.y === y)
        if (pixelInfo) {
            setHoveredPixel({
                ...pixelInfo,
                screenX: e.clientX,
                screenY: e.clientY
            })
        } else {
            setHoveredPixel(null)
        }
    }

    // 预览组件 (左侧)
    if (showPreview) {
        return (
            <div className="animate-slide-in-left">
                <div className="tech-card tech-border p-6">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 tech-border-sm bg-gradient-to-br from-neon-cyan-400 to-neon-purple-500 flex items-center justify-center">
                                <Monitor size={14} className="text-white" />
                            </div>
                            <h3 className="text-lg font-bold text-white font-tech">PIXEL_PREVIEW</h3>
                        </div>
                        <button
                            onClick={openFullscreen}
                            className="p-2 tech-card rounded-lg border border-neon-cyan-400/30 hover:border-neon-cyan-400 transition-all hover:shadow-neon-cyan text-neon-cyan-400"
                            title="Fullscreen View"
                        >
                            <Maximize size={16} />
                        </button>
                    </div>

                    <div className="relative">
                        <canvas
                            ref={canvasRef}
                            className="w-full h-auto rounded-lg pixel-perfect tech-border-sm shadow-tech"
                        />
                        <div className="absolute top-2 right-2 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                            <span className="text-xs text-neon-green-400 font-tech">
                                {pixelSize}×{pixelSize}px
                            </span>
                        </div>
                    </div>
                </div>

                {/* 全屏模态框 */}
                {isFullscreen && (
                    <div className="fixed inset-0 fullscreen-modal z-50 flex items-center justify-center">
                        <div className="absolute top-4 right-4 z-60">
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className="p-3 tech-card rounded-lg border border-red-400/30 hover:border-red-400 transition-all text-red-400 hover:shadow-neon-pink"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        <canvas
                            ref={fullscreenCanvasRef}
                            className="max-w-full max-h-full pixel-perfect rounded-lg shadow-tech"
                            onMouseMove={handleCanvasMouseMove}
                            onMouseLeave={() => setHoveredPixel(null)}
                        />

                        {/* 像素信息提示框 */}
                        {hoveredPixel && (
                            <div
                                className="fixed z-70 tech-tooltip rounded-xl p-6 pointer-events-none shadow-2xl"
                                style={{
                                    left: hoveredPixel.screenX + 20,
                                    top: hoveredPixel.screenY - 120,
                                    background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(51, 65, 85, 0.95) 100%)',
                                    border: '2px solid rgba(34, 211, 238, 0.5)',
                                    minWidth: '200px'
                                }}
                            >
                                <div className="text-white font-tech">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <div
                                            className="w-8 h-8 rounded-lg border-2 border-white shadow-lg"
                                            style={{ backgroundColor: hoveredPixel.color.hex }}
                                        ></div>
                                        <div>
                                            <div className="text-lg font-bold capitalize text-white">
                                                {hoveredPixel.color.name.replace(/_/g, ' ')}
                                            </div>
                                            <div className={`text-sm font-tech ${hoveredPixel.color.type === 'free' ? 'text-green-400' : 'text-yellow-400'}`}>
                                                {hoveredPixel.color.type === 'free' ? '✨ FREE ACCESS' : '👑 PREMIUM ONLY'}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2 text-base">
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Position:</span>
                                            <span className="text-neon-cyan-400 font-bold">({hoveredPixel.x}, {hoveredPixel.y})</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Hex Color:</span>
                                            <span className="text-white font-bold">{hoveredPixel.color.hex}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-300">Color Type:</span>
                                            <span className={`font-bold ${hoveredPixel.color.type === 'free' ? 'text-green-400' : 'text-yellow-400'}`}>
                                                {hoveredPixel.color.type.toUpperCase()}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* 添加小三角形指示器 */}
                                <div
                                    className="absolute"
                                    style={{
                                        bottom: '-8px',
                                        left: '20px',
                                        width: '0',
                                        height: '0',
                                        borderLeft: '8px solid transparent',
                                        borderRight: '8px solid transparent',
                                        borderTop: '8px solid rgba(51, 65, 85, 0.95)'
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }

    // 控制面板组件 (右侧)
    if (showControls) {
        return (
            <div className="space-y-6 animate-slide-in-right">
                {/* 像素大小控制 */}
                <div className="tech-card tech-border p-6">
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="w-8 h-8 tech-border-sm bg-gradient-to-br from-neon-purple-500 to-neon-pink-500 flex items-center justify-center">
                            <Settings size={14} className="text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white font-tech">PIXEL_SIZE</h3>
                    </div>

                    <div className="space-y-4">
                        <input
                            type="range"
                            min="2"
                            max="32"
                            step="1"
                            value={pixelSize}
                            onChange={(e) => setPixelSize && setPixelSize(parseInt(e.target.value))}
                            className="tech-slider w-full"
                        />
                        <div className="text-center">
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-purple-400 to-neon-cyan-400 font-tech">
                                {pixelSize}×{pixelSize}
                            </div>
                            <p className="text-gray-400 text-sm font-tech">PIXEL_BLOCKS</p>
                        </div>
                    </div>
                </div>

                {/* 统计信息 */}
                {processedData && (
                    <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4">
                        <div className="flex items-center space-x-2 mb-3">
                            <div className="w-6 h-6 tech-border-sm bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 flex items-center justify-center">
                                <BarChart3 size={12} className="text-white" />
                            </div>
                            <h3 className="text-sm font-bold text-white font-tech">STATISTICS</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2 mb-3">
                            <div className="tech-card rounded p-2 text-center border border-gray-600/30">
                                <div className="text-lg font-bold text-neon-purple-400 font-tech">
                                    {processedData.totalPixels}
                                </div>
                                <div className="text-[10px] text-gray-400 font-tech">PIXELS</div>
                            </div>
                            <div className="tech-card rounded p-2 text-center border border-gray-600/30">
                                <div className="text-lg font-bold text-neon-cyan-400 font-tech">
                                    {Object.keys(processedData.colorStats || {}).length}
                                </div>
                                <div className="text-[10px] text-gray-400 font-tech">COLORS</div>
                            </div>
                        </div>

                        {/* 颜色使用详情 */}
                        <div className="max-h-32 overflow-y-auto space-y-1">
                            {Object.entries(processedData.colorStats || {})
                                .sort(([, a], [, b]) => b - a)
                                .map(([colorName, count]) => {
                                    const colorInfo = WPLACE_COLORS.find(c => c.name === colorName)
                                    return (
                                        <div key={colorName} className="flex items-center justify-between p-2 bg-gray-700/30 rounded border-0">
                                            <div className="flex items-center space-x-2 flex-1">
                                                <div
                                                    className="w-4 h-4 rounded tech-border-sm"
                                                    style={{ backgroundColor: colorInfo?.hex }}
                                                ></div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="flex items-center space-x-1">
                                                        <span className="text-xs text-white capitalize font-medium">
                                                            {colorName.replace(/_/g, ' ')}
                                                        </span>
                                                        {colorInfo?.type === 'premium' ? (
                                                            <Crown className="w-2 h-2 text-yellow-400" />
                                                        ) : (
                                                            <Star className="w-2 h-2 text-green-400" />
                                                        )}
                                                    </div>
                                                    <div className="text-[10px] text-gray-400 font-tech">
                                                        {colorInfo?.hex} • {colorInfo?.type}
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="text-xs font-bold text-neon-cyan-400 font-tech">
                                                {count}
                                            </span>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                )}

                {/* 操作按钮 */}
                <div className="space-y-3">
                    <button
                        onClick={handleDownload}
                        disabled={!processedData?.processedImage}
                        className="neon-button w-full py-4 rounded-lg font-tech font-semibold text-white flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed tech-border-sm"
                    >
                        <Download size={18} />
                        <span>DOWNLOAD_GRID</span>
                    </button>
                    <button
                        onClick={onNewUpload}
                        className="w-full py-4 tech-card rounded-lg border border-gray-600/50 hover:border-neon-pink-400/60 text-white font-tech font-medium transition-all tech-hover flex items-center justify-center space-x-2 tech-border-sm"
                    >
                        <RotateCcw size={18} />
                        <span>NEW_UPLOAD</span>
                    </button>
                </div>
            </div>
        )
    }

    return null
}