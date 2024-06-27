"use client"
import React from 'react'
import {useState,useRef} from 'react'
import {motion} from 'framer-motion'
import EarthCanvas from "../canvas/EarthCanvas"
import { slideIn } from '../../utils/motion'
import emailjs from '@emailjs/browser'
import { styles } from '../../styles'
import SectionWrapper from "../../hoc/SectionWrapper"
const Contact = () => {
    const formRef=useRef();
    const [form,setForm]=useState({
        name:"",
        email:"",
        message:"",
    })
    const [loading,setLoading]=useState(false)

    const handleChange=(e)=>{
        const {target}=e;
        const {name,value}=target;

        setForm({
            ...form,
            [name]:value,
        })
    }
    const handleSubmit=(e)=>{}
  return (
    <div className='xl:mt-12 xl:flex-row  flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
      initial="hidden"
      animate="show"
       variants={slideIn('left',"tween",0.2,1)}
       className='bg-toggle-mode flex-[0.90] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
         ref={formRef}
         onSubmit={handleSubmit}
         className="mt-12 flex flex-col gap-8"
         >
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                    Your Name
                </span>
                <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name"
                className='input-mode placeholder:text-secondary outline-none border-none font-medium px-2 py-2 rounded-lg '
                />
               

            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                    Your Email
                </span>
                <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your Email"
                className='input-mode rounded-lg outline-none border-none font-medium placeholder:text-secondary px-2 py-2'
               />
               

            </label>
            <label className='flex flex-col'>
                <span className='text-white font-medium mb-4'>
                    Message
                </span>
                <textarea
                rows="7"
                type='text'
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What's Your Name"
                className='input-mode resize-none outline-none rounded-lg px-2 py-2'
                />
               

            </label>
            <button
             type='submit'
             className='input-mode py-2 px-6 w-fit mx-auto rounded-lg font-bold'
            >
                {loading? 'Sending...': 'Send'}
               

            </button>
        
        </form>


      </motion.div>
      <motion.div
       variants={slideIn('right','tween',0.2,1)}
       className='xl:flex-1 xl:h-auto md:h-[550px] sm:h-[350px]'
      >
        <EarthCanvas/>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")
