import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "What is the Expense Calculator?",
    answer: "The Expense Calculator is a web-based tool that helps users track and manage their expenses efficiently.",
  },
  {
    question: "How do I use the Expense Calculator?",
    answer:
      "Simply input your expenses and income, and the calculator will provide insights and reports on your financial situation.",
  },
  {
    question: "Is my data secure?",
    answer: "Yes, we use industry-standard encryption and security measures to protect your financial data.",
  },
  {
    question: "Can I export my expense reports?",
    answer: "Yes, you can export your expense reports in various formats, including PDF and CSV.",
  },
]

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-800 bg-opacity-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full text-left p-4 bg-white bg-opacity-10 rounded-lg focus:outline-none"
              >
                <h3 className="text-xl font-semibold text-white">{faq.question}</h3>
              </motion.button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 p-4 bg-white bg-opacity-5 rounded-lg"
                  >
                    <p className="text-indigo-200">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

