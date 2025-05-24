import React from "react"
import { motion } from "framer-motion"

const teamMembers = [
  { name: "John Doe", role: "Project Lead", image: "/placeholder.svg?height=200&width=200" },
  { name: "Jane Smith", role: "UI/UX Designer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Mike Johnson", role: "Full Stack Developer", image: "/placeholder.svg?height=200&width=200" },
  { name: "Emily Brown", role: "Data Analyst", image: "/placeholder.svg?height=200&width=200" },
]

const TeamMembers = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-white"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white bg-opacity-10 rounded-lg p-6 text-center"
            >
              <motion.img
                whileHover={{ scale: 1.05 }}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-indigo-300">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamMembers

