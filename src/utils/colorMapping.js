// 64 Wplace colors definition
export const WPLACE_COLORS = [
    { name: 'black', hex: '#000000', type: 'free' },
    { name: 'dark_gray', hex: '#3c3c3c', type: 'free' },
    { name: 'gray', hex: '#787878', type: 'free' },
    { name: 'medium_gray', hex: '#aaaaaa', type: 'premium' },
    { name: 'light_gray', hex: '#d2d2d2', type: 'free' },
    { name: 'white', hex: '#ffffff', type: 'free' },
    { name: 'deep_red', hex: '#600018', type: 'free' },
    { name: 'dark_red', hex: '#a50e1e', type: 'premium' },
    { name: 'red', hex: '#ed1c24', type: 'free' },
    { name: 'light_red', hex: '#fa8072', type: 'premium' },
    { name: 'dark_orange', hex: '#e45c1a', type: 'premium' },
    { name: 'orange', hex: '#ff7f27', type: 'free' },
    { name: 'gold', hex: '#f6aa09', type: 'free' },
    { name: 'yellow', hex: '#f9dd3b', type: 'free' },
    { name: 'light_yellow', hex: '#fffabc', type: 'free' },
    { name: 'dark_goldenrod', hex: '#9c8431', type: 'premium' },
    { name: 'goldenrod', hex: '#c5ad31', type: 'premium' },
    { name: 'light_goldenrod', hex: '#e8d45f', type: 'premium' },
    { name: 'dark_olive', hex: '#4a6b3a', type: 'premium' },
    { name: 'olive', hex: '#5a944a', type: 'premium' },
    { name: 'light_olive', hex: '#84c573', type: 'premium' },
    { name: 'dark_green', hex: '#0eb968', type: 'free' },
    { name: 'green', hex: '#13e67b', type: 'free' },
    { name: 'light_green', hex: '#87ff5e', type: 'free' },
    { name: 'dark_teal', hex: '#0c816e', type: 'free' },
    { name: 'teal', hex: '#10aea6', type: 'free' },
    { name: 'light_teal', hex: '#13e1be', type: 'free' },
    { name: 'dark_cyan', hex: '#0f799f', type: 'premium' },
    { name: 'cyan', hex: '#60f7f2', type: 'free' },
    { name: 'light_cyan', hex: '#bbfaf2', type: 'premium' },
    { name: 'dark_blue', hex: '#28509e', type: 'free' },
    { name: 'blue', hex: '#4093e4', type: 'free' },
    { name: 'light_blue', hex: '#7dc7ff', type: 'premium' },
    { name: 'dark_indigo', hex: '#4d31b8', type: 'premium' },
    { name: 'indigo', hex: '#6b50f6', type: 'free' },
    { name: 'light_indigo', hex: '#99b1fb', type: 'free' },
    { name: 'dark_slate_blue', hex: '#4a4284', type: 'premium' },
    { name: 'slate_blue', hex: '#7a71c4', type: 'premium' },
    { name: 'light_slate_blue', hex: '#b5aef1', type: 'premium' },
    { name: 'dark_purple', hex: '#780c99', type: 'free' },
    { name: 'purple', hex: '#aa38b9', type: 'free' },
    { name: 'light_purple', hex: '#e09ff9', type: 'free' },
    { name: 'dark_pink', hex: '#cb007a', type: 'free' },
    { name: 'pink', hex: '#ec1f80', type: 'free' },
    { name: 'light_pink', hex: '#f38da9', type: 'free' },
    { name: 'dark_peach', hex: '#9b5249', type: 'premium' },
    { name: 'peach', hex: '#d18078', type: 'premium' },
    { name: 'light_peach', hex: '#fab6a4', type: 'premium' },
    { name: 'dark_brown', hex: '#684634', type: 'free' },
    { name: 'brown', hex: '#95682a', type: 'free' },
    { name: 'light_brown', hex: '#dba463', type: 'premium' },
    { name: 'dark_tan', hex: '#7b6352', type: 'premium' },
    { name: 'tan', hex: '#9c846b', type: 'premium' },
    { name: 'light_tan', hex: '#d6b594', type: 'premium' },
    { name: 'dark_beige', hex: '#d18051', type: 'premium' },
    { name: 'beige', hex: '#f8b277', type: 'free' },
    { name: 'light_beige', hex: '#ffc5a5', type: 'premium' },
    { name: 'dark_stone', hex: '#6d643f', type: 'premium' },
    { name: 'stone', hex: '#948c6b', type: 'premium' },
    { name: 'light_stone', hex: '#cdc59e', type: 'premium' },
    { name: 'dark_slate', hex: '#333941', type: 'premium' },
    { name: 'slate', hex: '#6d758d', type: 'premium' },
    { name: 'light_slate', hex: '#b3b9d1', type: 'premium' },
]

// Convert hex color to RGB
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null
}

// Calculate color distance using perceptual color difference
function colorDistance(color1, color2) {
    const rMean = (color1.r + color2.r) / 2
    const deltaR = color1.r - color2.r
    const deltaG = color1.g - color2.g
    const deltaB = color1.b - color2.b

    const weightR = 2 + rMean / 256
    const weightG = 4
    const weightB = 2 + (255 - rMean) / 256

    return Math.sqrt(weightR * deltaR * deltaR + weightG * deltaG * deltaG + weightB * deltaB * deltaB)
}

// Find the closest Wplace color
export function getClosestColor(r, g, b) {
    const targetColor = { r, g, b }
    let closestColor = WPLACE_COLORS[0]
    let minDistance = Infinity

    for (const color of WPLACE_COLORS) {
        const colorRgb = hexToRgb(color.hex)
        if (colorRgb) {
            const distance = colorDistance(targetColor, colorRgb)
            if (distance < minDistance) {
                minDistance = distance
                closestColor = color
            }
        }
    }

    return closestColor
}