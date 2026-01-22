import { useState, useEffect, useRef, useCallback } from 'react'
import styled from 'styled-components'

const CatContainer = styled.div`
  position: absolute;
  top: calc(100vh * (220 / 1080));
  right: calc(100vw * (160 / 1920));
`

const CatWrapper = styled.div`
  position: relative;
`

const BaseCatImg = styled.img`
  width: calc(100vw * (300 / 1920));
  display: block;
`

const Iris = styled.div`
  position: absolute;
  background-color: black;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
`

// SVG dimensions from viewBox
const SVG_WIDTH = 225

// Eye definitions in SVG coordinates (from the SVG file)
const LEFT_EYE = {
  cx: 66.886,
  cy: 58.5817,
  rx: 9.30114,
  ry: 8.87836,
  rotation: (6.86441 * Math.PI) / 180, // convert to radians
}

const RIGHT_EYE = {
  cx: 91.4491,
  cy: 63.2421,
  rx: 8.87836, // circle, so rx = ry = r
  ry: 8.87836,
  rotation: (6.86441 * Math.PI) / 180,
}

// Iris radius in SVG units (proportional to eye size)
const IRIS_RADIUS_SVG = 4.5

/**
 * Calculates the iris position constrained within an elliptical eye boundary.
 *
 * Mathematical approach:
 * 1. Transform mouse position to the eye's local coordinate system (centered, unrotated)
 * 2. Find the direction vector from eye center to mouse
 * 3. Calculate where a ray in that direction intersects the constraint ellipse
 * 4. Position iris at mouse projection if inside ellipse, or at boundary if outside
 * 5. Transform back to global SVG coordinates
 *
 * The constraint ellipse has radii reduced by iris radius to keep iris fully inside.
 */
function calculateIrisPosition(mouseX, mouseY, eye, irisRadius) {
  const { cx, cy, rx, ry, rotation } = eye

  // Step 1: Translate to eye-centered coordinates
  const dx = mouseX - cx
  const dy = mouseY - cy

  // Handle edge case: mouse at exact eye center
  const dist = Math.sqrt(dx * dx + dy * dy)
  if (dist < 0.001) {
    return { x: cx, y: cy }
  }

  // Step 2: Rotate to eye's local coordinate system (undo eye rotation)
  const cosNeg = Math.cos(-rotation)
  const sinNeg = Math.sin(-rotation)
  const localX = dx * cosNeg - dy * sinNeg
  const localY = dx * sinNeg + dy * cosNeg

  // Step 3: Define constraint ellipse (shrunk by iris radius)
  // The iris CENTER must stay within this ellipse to keep the iris visually inside
  const constraintRx = Math.max(rx - irisRadius, 0.1)
  const constraintRy = Math.max(ry - irisRadius, 0.1)

  // Step 4: Find intersection of ray from origin in direction (localX, localY) with constraint ellipse
  // Ellipse equation: (x/rx)² + (y/ry)² = 1
  // Ray: (t·ux, t·uy) where (ux, uy) is unit direction vector
  // Substituting: t² · (ux²/rx² + uy²/ry²) = 1
  // Therefore: t = 1 / sqrt(ux²/rx² + uy²/ry²)

  const localDist = Math.sqrt(localX * localX + localY * localY)
  const ux = localX / localDist
  const uy = localY / localDist

  // Parameter t gives distance from center to ellipse boundary along ray
  const t =
    1 / Math.sqrt((ux * ux) / (constraintRx * constraintRx) + (uy * uy) / (constraintRy * constraintRy))

  // Step 5: Position iris - follow mouse up to boundary, then clamp
  let irisLocalX
  let irisLocalY
  if (localDist <= t) {
    // Mouse is inside constraint ellipse: iris follows mouse position
    irisLocalX = localX
    irisLocalY = localY
  } else {
    // Mouse is outside: iris sits at ellipse boundary in that direction
    irisLocalX = ux * t
    irisLocalY = uy * t
  }

  // Step 6: Rotate back to global coordinate system
  const cosPos = Math.cos(rotation)
  const sinPos = Math.sin(rotation)
  const globalX = irisLocalX * cosPos - irisLocalY * sinPos + cx
  const globalY = irisLocalX * sinPos + irisLocalY * cosPos + cy

  return { x: globalX, y: globalY }
}

const CheshireCat = () => {
  const containerRef = useRef(null)
  const [scale, setScale] = useState(1)
  const [irisPositions, setIrisPositions] = useState({
    left: { x: LEFT_EYE.cx, y: LEFT_EYE.cy },
    right: { x: RIGHT_EYE.cx, y: RIGHT_EYE.cy },
  })

  // Update scale when window resizes
  const updateScale = useCallback(() => {
    if (!containerRef.current) return
    const imgElement = containerRef.current.querySelector('img')
    if (!imgElement) return
    setScale(imgElement.getBoundingClientRect().width / SVG_WIDTH)
  }, [])

  useEffect(() => {
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [updateScale])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const imgElement = containerRef.current.querySelector('img')
      if (!imgElement) return

      const imgRect = imgElement.getBoundingClientRect()
      const currentScale = imgRect.width / SVG_WIDTH

      // Convert mouse position from screen to SVG coordinates
      const mouseXSvg = (e.clientX - imgRect.left) / currentScale
      const mouseYSvg = (e.clientY - imgRect.top) / currentScale

      // Calculate constrained iris positions for both eyes
      const leftIris = calculateIrisPosition(mouseXSvg, mouseYSvg, LEFT_EYE, IRIS_RADIUS_SVG)
      const rightIris = calculateIrisPosition(mouseXSvg, mouseYSvg, RIGHT_EYE, IRIS_RADIUS_SVG)

      setIrisPositions({ left: leftIris, right: rightIris })
      setScale(currentScale)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Convert SVG coordinates to screen pixels for rendering
  const irisSize = IRIS_RADIUS_SVG * 2 * scale

  return (
    <CatContainer>
      <CatWrapper ref={containerRef}>
        <BaseCatImg src="/assets/images/cat_eyeless.svg" />
        <Iris
          style={{
            left: irisPositions.left.x * scale,
            top: irisPositions.left.y * scale,
            width: irisSize,
            height: irisSize,
          }}
        />
        <Iris
          style={{
            left: irisPositions.right.x * scale,
            top: irisPositions.right.y * scale,
            width: irisSize,
            height: irisSize,
          }}
        />
      </CatWrapper>
    </CatContainer>
  )
}

export default CheshireCat
