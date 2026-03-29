import { useState, useEffect } from 'react'

// Import client images
import client1 from '../assets/images/reel/Portraits/Client1.jpg'
import client2 from '../assets/images/reel/Portraits/Client2.jpg'
import client3 from '../assets/images/reel/Portraits/Client3.jpg'
import client4 from '../assets/images/reel/Portraits/Client4.jpg'
import client5 from '../assets/images/reel/Portraits/Client5.jpg'
import client6 from '../assets/images/reel/Portraits/Client6.jpg'
import client7 from '../assets/images/reel/Portraits/Client7.jpg'
import client8 from '../assets/images/reel/Portraits/Client8.jpg'

const ImageReel = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true)
  const [imagesLoaded, setImagesLoaded] = useState(false) // ← YOU WERE MISSING THIS!

  // Client images for the reel
  const reelImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ]

  // Preload images
  useEffect(() => {
    const imagePromises = reelImages.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.src = src // ← YOU WERE MISSING THIS!
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true)
      })
      .catch((err) => {
        console.error('Error loading images:', err)
        setImagesLoaded(true) // Show anyway if there's an error
      })
  }, [])

  // Auto-hide reel after 5 seconds
  useEffect(() => {
    if (!imagesLoaded) return

    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(() => onComplete(), 800)
    }, 5000)

    return () => clearTimeout(timer)
  }, [imagesLoaded, onComplete])

  // Show loading screen while images load
  if (!imagesLoaded) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold mb-4 animate-pulse">
            <span className="text-secondary">Warrior</span>
            <span className="text-primary">Lens</span>
          </div>
          <div className="flex gap-2 justify-center">
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
          </div>
        </div>
      </div>
    )
  }

  if (!isVisible) {
    return (
      <div className="fixed inset-0 bg-white z-50 animate-[slideUp_0.8s_ease-out_forwards]" />
    )
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden">
      {/* Rotating photo reel */}
      <div className="relative w-[700px] h-[700px] animate-[spin_20s_linear_infinite]">
        {reelImages.map((img, index) => {
          const angle = index * (360 / reelImages.length)
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-40 h-60 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden shadow-2xl"
              style={{
                transform: `rotate(${angle}deg) translate(280px) rotate(-${angle}deg)`
              }}
            >
              <img
                src={img}
                alt={`Client ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          )
        })}
      </div>

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-6xl font-bold animate-pulse">
          <span className="text-secondary">Warrior</span>
          <span className="text-primary">Lens</span>
        </div>
      </div>
    </div>
  )
}

export default ImageReel