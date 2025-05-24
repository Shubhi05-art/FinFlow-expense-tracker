import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import ExpenseCalculator from "./components/ExpenseCalculator"

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calculator" element={<ExpenseCalculator />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

