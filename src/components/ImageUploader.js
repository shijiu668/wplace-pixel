'use client'

import { useState, useRef } from 'react'
import { Upload, Image as ImageIcon, FileImage, Zap, Cpu, Scan } from 'lucide-react'

export default function ImageUploader({ onImageUpload }) {
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef(null)

    const handleDragOver = (e) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = (e) => {
        e.preventDefault()
        setIsDragging(false)
    }

    const handleDrop = (e) => {
        e.preventDefault()
        setIsDragging(false)

        const files = e.dataTransfer.files
        if (files.length > 0) {
            handleFile(files[0])
        }
    }

    const handleFileSelect = (e) => {
        const file = e.target.files[0]
        if (file) {
            handleFile(file)
        }
    }

    const handleFile = (file) => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const img = new Image()
                img.onload = () => {
                    onImageUpload({
                        src: e.target.result,
                        file: file,
                        width: img.width,
                        height: img.height
                    })
                }
                img.src = e.target.result
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <div className="animate-slide-in-left">
            <div
                className={`
                    relative tech-card tech-border cursor-pointer transition-all duration-500 p-8
                    ${isDragging
                        ? 'border-neon-purple-400 shadow-neon-purple bg-gradient-to-br from-neon-purple-500/10 to-neon-cyan-400/10 scale-105'
                        : 'border-gray-600/50 hover:border-neon-purple-400/60 hover:shadow-neon-purple/50 tech-hover'
                    }
                `}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                />

                {/* 装饰性科技元素 */}
                <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-neon-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute bottom-4 left-4">
                    <div className="w-1 h-1 bg-neon-cyan-400 rounded-full animate-pulse"></div>
                </div>

                <div className="text-center">
                    {/* 主要图标 */}
                    <div className="flex justify-center mb-6">
                        <div className="relative">
                            <div className="w-20 h-20 tech-border bg-gradient-to-br from-neon-purple-500 to-neon-cyan-400 flex items-center justify-center shadow-neon-purple">
                                <Upload size={32} className="text-white animate-pulse" />
                            </div>
                            {/* 装饰性小图标 */}
                            <div className="absolute -top-2 -right-2 w-8 h-8 tech-border-sm bg-gradient-to-br from-neon-pink-500 to-neon-purple-500 flex items-center justify-center">
                                <Zap size={14} className="text-white" />
                            </div>
                            <div className="absolute -bottom-2 -left-2 w-6 h-6 tech-border-sm bg-gradient-to-br from-neon-cyan-400 to-neon-green-400 flex items-center justify-center">
                                <Scan size={10} className="text-white" />
                            </div>
                        </div>
                    </div>

                    {/* 标题 */}
                    <h3 className="text-2xl font-bold text-white mb-3 font-tech">
                        <span className="text-neon-purple-400">UPLOAD</span> IMAGE
                    </h3>
                    
                    {/* 描述 */}
                    <div className="space-y-2 mb-6">
                        <p className="text-lg text-gray-300">
                            Drop files here or click to select
                        </p>
                        <p className="text-sm text-neon-cyan-400 font-tech">
                            [SYSTEM_READY] Transform to pixel grid overlay
                        </p>
                    </div>

                    {/* 支持的格式 */}
                    <div className="flex justify-center items-center space-x-6 mb-6">
                        {[
                            { name: 'PNG', color: 'neon-purple-400' },
                            { name: 'JPG', color: 'neon-cyan-400' },
                            { name: 'GIF', color: 'neon-pink-400' },
                            { name: 'WEBP', color: 'neon-green-400' }
                        ].map((format, index) => (
                            <div key={index} className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                                <FileImage size={14} />
                                <span className={`text-xs font-tech text-${format.color}`}>
                                    {format.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* 操作按钮 */}
                    <div className="space-y-3">
                        <button className="neon-button px-8 py-3 rounded-lg font-tech font-semibold text-white inline-flex items-center space-x-2">
                            <Cpu size={18} />
                            <span>SELECT_FILE</span>
                        </button>
                        
                        {/* 技术信息 */}
                        <div className="text-xs text-gray-500 font-tech mt-4">
                            <p>MAX_SIZE: 10MB | PIXEL_ENGINE: v2.0</p>
                            <p className="text-neon-cyan-400 mt-1">64_COLOR_PALETTE_OPTIMIZED</p>
                        </div>
                    </div>
                </div>

                {/* 进度条装饰 */}
                <div className="absolute bottom-0 left-0 right-0">
                    <div className="h-1 bg-gradient-to-r from-neon-purple-500 via-neon-cyan-400 to-neon-pink-500 opacity-30"></div>
                </div>
            </div>
        </div>
    )
}