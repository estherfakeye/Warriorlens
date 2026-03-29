import { motion } from 'framer-motion'
import { FaCamera, FaArrowDown } from 'react-icons/fa'
import photographerImg from '../assets/images/photographer.jpeg'

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-[#3a5a37] to-dark"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20"> 
        <div className="grid lg:grid-cols-2 gap-12 items-center">
      
      {/* Left: Text Content - SIMPLIFIED */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full border border-secondary/30"
            >
              <FaCamera className="text-secondary" />
              <span className="text-sm font-medium text-secondary">Professional Photography</span>
            </motion.div>

            {/* Main headline - SHORTENED */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Capturing
              <br />
              <span className="text-secondary">God's Beauty</span>
            </motion.h1>

            {/* Subtext - SHORTENED */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-light/80 max-w-xl"
            >
              Professional photography in Lagos & Ile-Ife. Portraits • Events • Sports • Brands
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#portfolio"
                className="bg-secondary text-dark px-8 py-4 rounded-full font-semibold hover:bg-accent transition-all duration-300 hover:scale-105"
              >
                View Portfolio →
              </a>
              <a
                href="#contact"
                className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-dark transition-all duration-300"
              >
                Book Session
              </a>
            </motion.div>

            {/* Stats - SIMPLIFIED */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-3 gap-6 pt-8 max-w-lg"
            >
              <div>
                <div className="text-3xl font-bold text-secondary">3+</div>
                <div className="text-sm text-light/60">Years</div>
              </div>
              <div className="border-x border-light/20 px-4">
                <div className="text-3xl font-bold text-secondary">500+</div>
                <div className="text-sm text-light/60">Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">100%</div>
                <div className="text-sm text-light/60">Quality</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Photographer Image - NEW SECTION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative"
          >
            {/* Corner brackets like Aperture */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border-t-4 border-l-4 border-secondary"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-4 border-r-4 border-secondary"></div>

            {/* Photographer image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={photographerImg}
                alt="Obe Oluwagbemiga - WarriorLens Photographer"
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay text on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-4xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    OBE
                  </h3>
                  <p className="text-light/80">Creative Photographer</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#portfolio">
          <FaArrowDown className="text-secondary text-2xl animate-bounce" />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero