import React from "react"
import { motion } from "framer-motion"
import Header from "./Header"
import Hero from "./Hero"
import ProjectDetails from "./ProjectDetails"
import TeamMembers from "./TeamMembers"
import FAQ from "./FAQ"
import Footer from './Foote'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-700">
      <Header />
      <Hero />
      <ProjectDetails />
      <TeamMembers />
      <FAQ />
      <Footer />
    </div>
  )
}

export default LandingPage

