import { motion } from 'framer-motion'
import { FaCamera, FaArrowDown } from 'react-icons/fa'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-dark opacity-90" />
      
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Small caption */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-2 text-secondary"
          >
            <FaCamera className="text-xl" />
            <span className="text-sm md:text-base font-medium tracking-widest uppercase">
              Professional Photography
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capturing God's
            <br />
            <span className="text-secondary">Beauty</span> Through
            <br />
            The Lens
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-light/90 max-w-3xl mx-auto leading-relaxed"
          >
            Professional photography services specializing in portraits, events, nature, 
            sports, and brand photography. Based in Lagos & Ile-Ife, Nigeria.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <a
              href="#portfolio"
              className="group bg-secondary text-dark px-8 py-4 rounded-full font-semibold text-lg hover:bg-accent transition-all duration-300 hover:scale-105 shadow-lg"
            >
              View Portfolio
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-dark transition-all duration-300 hover:scale-105"
            >
              Book a Session
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">3+</div>
              <div className="text-sm md:text-base text-light/70 mt-1">Years Experience</div>
            </div>
            <div className="text-center border-x border-light/20">
              <div className="text-3xl md:text-4xl font-bold text-secondary">500+</div>
              <div className="text-sm md:text-base text-light/70 mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary">100%</div>
              <div className="text-sm md:text-base text-light/70 mt-1">Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#portfolio" className="text-secondary hover:text-accent transition-colors">
          <FaArrowDown className="text-2xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero