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
        img.src = src 
        img.onload = resolve
        img.onerror = reject
      })
    })

    Promise.all(imagePromises)
      .then(() => {
        setImagesLoaded(true)
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
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden px-4">
      {/* Rotating photo reel - CHANGED: Responsive sizing */}
      <div className="relative w-[280px] h-[280px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] animate-[spin_20s_linear_infinite]">
        {reelImages.map((img, index) => {
          const angle = index * (360 / reelImages.length)
          const radius = typeof window !== 'undefined' ? 
            (window.innerWidth < 640 ? 120 : window.innerWidth < 768 ? 200 : window.innerWidth < 1024 ? 240 : 280) 
            : 280
          
          return (
            <div
              key={index}
              className="absolute top-1/2 left-1/2 w-24 h-36 sm:w-32 sm:h-48 md:w-36 md:h-52 lg:w-40 lg:h-60 -translate-x-1/2 -translate-y-1/2 rounded-lg overflow-hidden shadow-2xl" {/* ← CHANGED: Responsive sizes */}
              style={{
                transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`
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

      {/* Center logo - CHANGED: Responsive text size */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold animate-pulse text-center">
          <span className="text-secondary">Warrior</span>
          <span className="text-primary">Lens</span>
        </div>
      </div>
    </div>
  )
}

export default ImageReel