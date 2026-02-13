"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import AnimatedHeroText from "./AnimatedHeroText"
import { Cloud, Container, GitBranch, Terminal } from 'lucide-react'
import { FeatureCard } from "../FeatureCard"
import { CodePreview } from "../CodePreview"
import AnimatedBackground from "./AnimatedBackground"

interface DocHeroProps {
  title: string
  description: string
  getStartedHref?: string
  githubHref?: string
}

const DocHero: React.FC<DocHeroProps> = ({
  title,
  description,
  getStartedHref = "/getting-started",
  githubHref = "/installation",
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="relative overflow-hidden">
      <AnimatedBackground />
      
      <motion.div
        className="relative mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-24 sm:pb-32 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl font-extrabold text-foreground sm:text-5xl md:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.div variants={itemVariants}>
            <AnimatedHeroText />
          </motion.div>
          <motion.p
            className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
            variants={itemVariants}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-8 max-w-md mx-auto sm:flex sm:justify-center md:mt-8 gap-6"
            variants={itemVariants}
          >
            <motion.div
              className="rounded-md shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={getStartedHref} passHref>
                <Button
                  className="bg-purple-500 text-white hover:bg-purple-700 text-xl p-6 rounded-lg w-full sm:w-auto"
                  size="lg"
                >
                  Get Started
                </Button>
              </Link>
            </motion.div>
            <motion.div
              className="mt-3 rounded-md shadow sm:mt-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={githubHref} passHref>
                <Button
                  className="bg-purple-500 text-white hover:bg-purple-700 text-xl p-6 rounded-lg w-full sm:w-auto"
                  size="lg"
                >
                  Installation
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          <FeatureCard
            icon={Cloud}
            title="Cloud Native"
            description="Built for modern cloud infrastructure with scalability in mind"
          />
          <FeatureCard
            icon={Container}
            title="Container Ready"
            description="Deploy containerized applications with zero configuration"
          />
          <FeatureCard
            icon={GitBranch}
            title="Git Integration"
            description="Seamless integration with your Git workflow"
          />
          <FeatureCard
            icon={Terminal}
            title="CLI Tools"
            description="Powerful command-line tools for automation"
          />
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 lg:mt-24"
        >
          <CodePreview />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default DocHero