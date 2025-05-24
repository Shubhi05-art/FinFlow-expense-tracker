import React from "react"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <header className="py-6 px-4 sm:px-6 lg:px-8 bg-indigo-900 bg-opacity-50">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 whileHover={{ scale: 1.05 }} className="text-3xl font-bold text-white">
          Expense Calculator
        </motion.h1>
        <nav>
          <ul className="flex space-x-6">
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#project" className="text-indigo-200 hover:text-white transition-colors">
                Project
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#team" className="text-indigo-200 hover:text-white transition-colors">
                Team
              </a>
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }}>
              <a href="#faq" className="text-indigo-200 hover:text-white transition-colors">
                FAQ
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

