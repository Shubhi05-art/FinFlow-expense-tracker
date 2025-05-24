import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ExpenseCalculator = () => {
  const [income, setIncome] = useState("")
  const [expenses, setExpenses] = useState("")
  const [result, setResult] = useState(null)

  const handleCalculate = () => {
    const incomeValue = Number.parseFloat(income)
    const expensesValue = Number.parseFloat(expenses)
    if (!isNaN(incomeValue) && !isNaN(expensesValue)) {
      setResult(incomeValue - expensesValue)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 text-white flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 p-8 rounded-lg shadow-xl max-w-md w-full"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Expense Calculator</h1>
        <div className="mb-4">
          <label htmlFor="income" className="block mb-2">
            Income
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="income"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            className="w-full p-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="expenses" className="block mb-2">
            Expenses
          </label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            type="number"
            id="expenses"
            value={expenses}
            onChange={(e) => setExpenses(e.target.value)}
            className="w-full p-2 rounded bg-white bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleCalculate}
          className="w-full py-2 px-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-bold shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:from-pink-600 hover:to-purple-600"
        >
          Calculate
        </motion.button>
        {result !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 p-4 bg-white bg-opacity-20 rounded-lg text-center"
          >
            <p className="text-xl font-semibold">
              Balance: <span className={result >= 0 ? "text-green-400" : "text-red-400"}>${result.toFixed(2)}</span>
            </p>
          </motion.div>
        )}
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="mt-8">
        <Link to="/" className="text-pink-400 hover:text-pink-300 transition-colors">
          &larr; Back to Home
        </Link>
      </motion.div>
    </div>
  )
}

export default ExpenseCalculator

