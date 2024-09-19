"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import Tooltip from "./Tooltip"

interface ProjectLinksProps {
  githubUrl?: string
  siteUrl?: string
}

export default function ProjectLinks({ githubUrl="#", siteUrl="#" }: ProjectLinksProps = { githubUrl: "#", siteUrl: "#" }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      className="flex space-x-4 p-3"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants}>
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="flex items-center justify-center rounded-full bg-black p-3 text-white shadow-lg transition-colors hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github size={20} />
          </motion.div>
        </Link>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Link href={siteUrl} target="_blank" rel="noopener noreferrer">
          <motion.div 
            className="flex items-center justify-center rounded-full bg-gray-500 p-3 text-white shadow-lg transition-colors hover:bg-gray-600 dark:bg-gray-600 dark:hover:bg-gray-700"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ExternalLink size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  )
}