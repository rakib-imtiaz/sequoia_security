import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "../components/ui/button"
import { useEffect, useRef } from "react"
import { Particles } from "../components/Particles"
import { GlitchText } from "../components/GlitchText"
import { GlitchEffect } from "../components/GlitchEffect"
import { TypewriterText } from "../components/TypewriterText"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

// Geometric shapes animation variants
const shapeAnimation = {
  initial: { scale: 0, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 0.3,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

export default function Home() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  
  const services = [
    {
      title: "SECURITY GUARDS",
      image: "/images/services/security-guards.jpg",
      alt: "Professional security guard in uniform"
    },
    {
      title: "MOBILE PATROL & EMERGENCY RESPONSE",
      image: "/images/services/mobile-patrol.jpg",
      alt: "Security patrol vehicle on duty"
    },
    {
      title: "LOSS PREVENTION",
      image: "/images/services/loss-prevention.jpg",
      alt: "Loss prevention officer monitoring security cameras"
    },
    {
      title: "SPECIAL EVENTS & AD-HOC",
      image: "/images/services/special-events.jpg",
      alt: "Security team at special event"
    }
  ]

  const programs = [
    {
      title: "Healthcare Security",
      image: "/images/programs/healthcare.jpg",
      alt: "Security officer at healthcare facility"
    },
    {
      title: "Retail & Shopping Mall",
      image: "/images/programs/retail.jpg",
      alt: "Security personnel at shopping mall"
    },
    {
      title: "Corporate Security",
      image: "/images/programs/corporate.jpg",
      alt: "Professional security for corporate buildings"
    },
    {
      title: "Industrial Security",
      image: "/images/programs/industrial.jpg",
      alt: "Security solutions for industrial facilities"
    }
  ]

  return (
    <main className="min-h-screen bg-[rgb(var(--background))] text-[rgb(var(--foreground))] transition-colors duration-300">
      {/* Particles background */}
      <div className="fixed inset-0 z-0">
        <Particles count={100} color="#2A8B8B" />
      </div>

      {/* Main content with glitch effects */}
      <GlitchEffect intensity={0.5}>
        {/* Hero Section with Cinematic Animation */}
        <motion.section 
          ref={containerRef}
          className="relative h-screen overflow-hidden"
        >
          {/* Parallax Video Background */}
          <motion.div 
            style={{ y }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0">
              <img
                src="/images/hero/hero-bg.jpg"
                alt="Security background"
                className="w-full h-full object-cover"
              />
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/videos/security-drone.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
          </motion.div>

          {/* Animated Geometric Patterns */}
          <motion.div className="absolute inset-0 pointer-events-none">
            <motion.div
              variants={shapeAnimation}
              initial="initial"
              animate="animate"
              className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-[#2A8B8B] rounded-full"
            />
            <motion.div
              variants={shapeAnimation}
              initial="initial"
              animate="animate"
              className="absolute bottom-1/4 right-1/4 w-40 h-40 border-2 border-[#2A8B8B] rotate-45"
            />
          </motion.div>

          {/* Particle Effect Layer */}
          <div className="absolute inset-0 z-10">
            <Particles count={50} color="#2A8B8B" />
          </div>

          <div className="relative container mx-auto px-4 h-full flex items-center z-20">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="max-w-3xl"
            >
              <TypewriterText
                text="Making the World Safer"
                className="text-6xl font-bold text-white mb-6"
                delay={300}
              />
              <motion.p
                variants={fadeIn}
                className="text-xl text-gray-300 mb-8"
              >
                <GlitchText
                  text="Professional Security Solutions for a Secure Tomorrow"
                  color="#D1D5DB"
                  intensity={0.8}
                />
              </motion.p>
              <motion.div
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                <Button className="bg-gradient-to-r from-[#1B4D4C] to-[#39B7B7] hover:from-[#39B7B7] hover:to-[#1B4D4C] text-white">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </GlitchEffect>

      <GlitchEffect intensity={0.3}>
        {/* The Sequoia Difference Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-[rgb(var(--background))] dark:bg-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[rgb(var(--primary))] dark:text-white text-center mb-16"
            >
              <TypewriterText 
                text="THE SEQUOIA DIFFERENCE" 
                delay={300}
                className="text-3xl font-bold"
              />
            </motion.div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <img
                  src="/images/about/difference.jpg"
                  alt="Sequoia security professional demonstrating excellence"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <p className="text-white">
                  <TypewriterText 
                    text="Leading security services with unparalleled professionalism and dedication"
                    delay={5}
                  />
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </GlitchEffect>

      <GlitchEffect intensity={0.7}>
        {/* Leading Security Services Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-[rgb(var(--background))] dark:bg-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-[rgb(var(--primary))] dark:text-white text-center mb-16"
            >
              <TypewriterText 
                text="LEADING SECURITY SERVICES" 
                delay={300}
                className="text-3xl font-bold"
              />
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-square relative">
                    <img
                      src={service.image}
                      alt={service.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-white font-bold">{service.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </GlitchEffect>

      <GlitchEffect intensity={0.5}>
        {/* Innovative Security Programs */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-[rgb(var(--background))] dark:bg-[#001F3F]"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-[rgb(var(--primary))] dark:text-white mb-16 relative z-10"
            >
              <TypewriterText 
                text="INNOVATIVE SECURITY PROGRAMS" 
                delay={300}
                className="text-3xl font-bold"
              />
            </motion.div>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {programs.map((program) => (
                <motion.div
                  key={program.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.05 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <div className="aspect-[4/3] relative">
                    <img
                      src={program.image}
                      alt={program.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h3 className="text-white text-center font-bold px-4">{program.title}</h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </GlitchEffect>

      <GlitchEffect intensity={0.3}>
        {/* Security Service Locations */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-black"
        >
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-white mb-16"
            >
              <TypewriterText 
                text="SECURITY SERVICE LOCATIONS"
                delay={300}
                className="text-3xl font-bold text-[#2A8B8B]"
              />
            </motion.div>
            <div className="w-full h-[500px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.904871551674!2d-123.11554548431586!3d49.28299797933116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717f41ba3fb3%3A0xc6acd4c982331c56!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1621234567890!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="filter saturate-100" // Ensures map is colored
              ></iframe>
            </div>
          </div>
        </motion.section>
      </GlitchEffect>

      <GlitchEffect intensity={0.7}>
        {/* Security Tips & Career Support */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-20 bg-[rgb(var(--background))] dark:bg-black"
        >
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center text-[rgb(var(--primary))] dark:text-white mb-16"
            >
              SECURITY TIPS & CAREER SUPPORT
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  title: "THIS IS WHO WE ARE",
                  image: "/images/tips/who-we-are.jpg",
                  alt: "Sequoia security team members"
                },
                {
                  title: "THE FUTURE OF SECURITY GUARDING",
                  image: "/images/tips/future.jpg",
                  alt: "Modern security technology in action"
                },
                {
                  title: "THE DIFFERENCE MAKERS",
                  image: "/images/tips/difference-makers.jpg",
                  alt: "Security professional making a difference"
                }
              ].map((tip) => (
                <motion.div
                  key={tip.title}
                  variants={fadeIn}
                  whileHover={{ scale: 1.02 }}
                  className="relative group overflow-hidden rounded-lg"
                >
                  <img
                    src={tip.image}
                    alt={tip.alt}
                    className="w-full aspect-[16/9] object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <h3 className="text-white font-bold mb-4">{tip.title}</h3>
                    <Button variant="outline" className="text-[#2A8B8B] border-[#2A8B8B] w-fit">
                      Read More
                    </Button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </GlitchEffect>
    </main>
  )
}
