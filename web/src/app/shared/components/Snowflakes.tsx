import { FallingLeaves } from 'falling-leaves/react'

function createSnowflake(color: string, branchWidth: number) {
  const sprite = document.createElement('canvas')
  sprite.width = sprite.height = 96
  const context = sprite.getContext('2d')
  if (!context) return sprite

  context.translate(48, 48)
  context.strokeStyle = color
  context.lineWidth = 5
  context.lineCap = 'round'
  context.lineJoin = 'round'

  context.beginPath()
  for (let arm = 0; arm < 6; arm++) {
    context.moveTo(0, 0)
    context.lineTo(0, -41)
    context.moveTo(-branchWidth, -34)
    context.lineTo(0, -24)
    context.lineTo(branchWidth, -34)
    context.rotate(Math.PI / 3)
  }
  context.stroke()

  return sprite
}

const snowflakes =
  typeof document === 'undefined'
    ? []
    : [createSnowflake('#ffffff', 9), createSnowflake('#cceeff', 12)]

export default function Snowflakes() {
  return (
    <FallingLeaves
      images={snowflakes}
      count={40}
      opacity={0.85}
      size={[12, 24]}
      speed={[0.3, 0.75]}
      wind={[-0.2, 0.35]}
      sway={[0.2, 0.55]}
      rotationSpeed={[-0.45, 0.45]}
      zIndex={-1}
    />
  )
}
