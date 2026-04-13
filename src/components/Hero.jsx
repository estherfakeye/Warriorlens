import { motion } from 'framer-motion'
import { FaCamera, FaArrowDown } from 'react-icons/fa'
import photographerImg from '../assets/images/photographer.jpeg'

const Hero = () => {
  return (
    <section 
      id="home" 
         className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-[#3a5a37] to-dark"
    >
      <div className="w-full max-w-7xl mx-auto px-8 sm:px-10 md:px-12 lg:px-16 py-32 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      
      {/* Left: Text Content - SIMPLIFIED */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-8"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-secondary/20 px-6 py-3 rounded-full border border-secondary/40"
            >
              <FaCamera className="text-secondary" />
              <span className="text-sm font-semibold text-secondary tracking-wide">PROFESSIONAL PHOTOGRAPHER</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Capturing
              <br />
              <span className="text-secondary">God's Beauty</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-light/90 max-w-xl leading-relaxed"
            >
              Portraits • Events • Sports • Brands • Documentary
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 pt-6"
            >
              <a
                href="#portfolio"
                className="inline-block text-center bg-secondary text-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-accent transition-all duration-300 hover:scale-105 shadow-xl"
              >
                View Portfolio →
              </a>
              <a
                href="#contact"
                className="inline-block text-center border-2 border-secondary text-secondary px-10 py-5 rounded-full font-bold text-lg hover:bg-secondary hover:text-dark transition-all duration-300 shadow-lg"
              >
                Book Session
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-12 max-w-lg"
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">3+</div>
                <div className="text-sm md:text-base text-light/70 mt-2">Years</div>
              </div>
              <div className="border-x border-light/20 px-6">
                <div className="text-4xl md:text-5xl font-bold text-secondary">500+</div>
                <div className="text-sm md:text-base text-light/70 mt-2">Clients</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary">100%</div>
                <div className="text-sm md:text-base text-light/70 mt-2">Quality</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photographer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden hidden lg:block">
              <h2 
                className="text-[10rem] xl:text-[14rem] font-black text-white/5 leading-none tracking-tighter select-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                WARRIOR
                <br />
                LENS
              </h2>
            </div>

            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-secondary z-20"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-secondary z-20"></div>

            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              <img
                src={photographerImg}
                alt="WarriorLens Photographer"
                className="w-full h-auto object-contain drop-shadow-2xl rounded-2xl"
              />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <a href="#portfolio">
          <FaArrowDown className="text-secondary text-3xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero