"use client"

import { useState, useEffect, useCallback } from "react"
import VideoBg from './VideoBg'

interface AnimatedIntroProps {
  onComplete: () => void
  skipToHome: () => void
}

export default function AnimatedIntro({ onComplete, skipToHome }: AnimatedIntroProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(-1)
  const [showFinalMessage, setShowFinalMessage] = useState<boolean>(false)
  const [animationComplete, setAnimationComplete] = useState<boolean>(false)

  const words = ["Build.", "Break.", "Fix.", "Repeat."]

  const startNextAnimation = useCallback(() => {
    if (currentWordIndex < words.length - 1) {
      setCurrentWordIndex((prev) => prev + 1)
    } else if (currentWordIndex === words.length - 1 && !showFinalMessage) {
      setShowFinalMessage(true)
    } else if (showFinalMessage && !animationComplete) {
      setAnimationComplete(true)

      // Delay before calling onComplete to allow final fade out
      setTimeout(() => {
        onComplete() // Remove the if check since we made it required
      }, 1500)
    }
  }, [currentWordIndex, showFinalMessage, animationComplete, words.length, onComplete])

  useEffect(() => {
    // Start the animation sequence
    if (currentWordIndex === -1) {
      setTimeout(() => {
        setCurrentWordIndex(0)
      }, 500)
      return
    }

    // Handle word animations
    const timer = setTimeout(() => {
      startNextAnimation()
    }, 1000) // Each word shows for 1.2 seconds instead of 2

    return () => clearTimeout(timer)
  }, [currentWordIndex, startNextAnimation])

  return (
    <div className="intro-container">
      <VideoBg />
      <button 
        className="skip-button" 
        onClick={skipToHome}
        aria-label="Skip introduction animation"
      >
        Skip Intro
      </button>

      <div className="animation-container">
        {currentWordIndex >= 0 && currentWordIndex < words.length && (
          <div key={words[currentWordIndex]} className={`animated-word word-${currentWordIndex}`}>
            {words[currentWordIndex]}
          </div>
        )}

        {showFinalMessage && (
          <div className={`final-message ${animationComplete ? "fade-out" : ""}`}>
          
      THIS IS WHAT I DO <br />AND <br /> I DO IT WELL
          </div>
        )}
      </div>
    </div>
  )
}
