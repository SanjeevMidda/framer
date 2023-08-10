import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Circle({status, setStatus, isVisible}) {

  return (
    <>
        isVisible

        <motion.div 
            initial={{x:100}} 
            animate={{x:200}}
            transition={{duration: 0.5}} 
            className='circle'
        />
        
   
  <AnimatePresence>
    {status && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='circle'
      />
    )
    }
  </AnimatePresence>

  </>

  )
}

export default Circle
