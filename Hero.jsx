import React from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6"
      >
        Master Your Finances
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl sm:text-2xl text-indigo-200 mb-12 max-w-3xl mx-auto"
      >
        Take control of your expenses with our powerful and intuitive Expense Calculator.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <Link
          to="/calculator"
          className="inline-block px-8 py-4 text-xl font-semibold text-indigo-900 bg-indigo-100 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-white hover:shadow-xl"
        >
          Get Started
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero

