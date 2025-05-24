import React from "react"
import { motion } from "framer-motion"
import { PieChartIcon as ChartPie, DollarSign, TrendingUp } from "lucide-react"

const features = [
  {
    icon: <ChartPie size={48} />,
    title: "Visualize Your Spending",
    description: "Get clear insights into your spending habits with interactive charts and graphs.",
  },
  {
    icon: <DollarSign size={48} />,
    title: "Budget Planning",
    description: "Set and track budgets for different expense categories to stay on top of your finances.",
  },
  {
    icon: <TrendingUp size={48} />,
    title: "Financial Growth",
    description: "Identify areas for savings and watch your financial health improve over time.",
  },
]

const ProjectDetails = () => {
  return (
    <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 bg-indigo-800 bg-opacity-50">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Why Choose Our Expense Calculator?
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-6 text-center"
            >
              <div className="text-indigo-300 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-indigo-200">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectDetails

