import { motion } from 'framer-motion'
import { FaCamera, FaArrowDown } from 'react-icons/fa'
import photographerImg from '../assets/images/photographer.jpeg'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-[#3a5a37] to-dark"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-24 items-center">
      
      {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            {/* badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 bg-secondary/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-secondary/40"
            >
              <FaCamera className="text-secondary text-base" />
              <span className="text-xs md:text-sm font-bold text-secondary tracking-widest uppercase">PROFESSIONAL PHOTOGRAPHER</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight"
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
              className="text-base md:text-lg lg:text-xl text-white/80 leading-relaxed max-w-xl"
            >
              Portraits • Events • Sports • Brands • Documentary
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href="#portfolio"
                className="group inline-flex items-center justify-center gap-2 bg-secondary text-dark px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-base md:text-lg hover:bg-accent transition-all duration-300 hover:scale-[1.02] shadow-xl"
              >
                <span>View Portfolio</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
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
              className="grid grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12"
            >
              <div className="space-y-1.5">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">3+</div>
                <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide">Years</div>
              </div>
              <div className="border-x border-white/20 px-4 md:px-6 space-y-1.5">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">500+</div>
                <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide">Clients</div>
              </div>
              <div className="space-y-1.5">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary">100%</div>
                <div className="text-xs md:text-sm text-white/70 uppercase tracking-wide">Quality</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photographer Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute inset-0 hidden lg:flex items-center justify-center pointer-events-none overflow-hidden opacity-5">
              <div 
                className="text-[10rem] xl:text-[12rem] font-black text-white leading-none tracking-tighter whitespace-nowrap"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                WARRIORLENS
              </div>
            </div>

            <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 w-12 h-12 md:w-16 md:h-16 border-t-[3px] md:border-t-4 border-l-[3px] md:border-l-4 border-secondary z-20"></div>
            <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 w-12 h-12 md:w-16 md:h-16 border-b-[3px] md:border-b-4 border-r-[3px] md:border-r-4 border-secondary z-20"></div>

            <div className="relative z-10 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                src={photographerImg}
                  alt="WarriorLens Photographer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#portfolio"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <FaArrowDown className="text-secondary text-2xl md:text-3xl" />
      </motion.a>
    </section>
  )
}

export default Hero