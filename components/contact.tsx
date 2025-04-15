"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <motion.section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-[#eae6df]"
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-serif text-3xl md:text-4xl text-center mb-16 text-[#2c2c2c]"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input type="text" placeholder="Name" className="bg-white border-0 h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-white border-0 h-12" />
              </div>
              <div>
                <Textarea placeholder="Message" className="bg-white border-0 min-h-[150px]" />
              </div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="bg-[#c4a47a] hover:bg-[#b3936a] text-white rounded-none px-8 py-6 h-auto"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-2 text-[#2c2c2c]">Visit Our Showroom</h3>
                <p className="text-[#444444]">
                  ED/110, Ring Road, Sector D,
                  Opposite Khajrana Square, Scheme 94,
                  <br />
                  Indore, Madhya Pradesh, India
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2 text-[#2c2c2c]">Contact Information</h3>
                <p className="text-[#444444]">
                  sandeep@theceramiqua.com
                  <br />
                  +91 94250 81343
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2 text-[#2c2c2c]">Opening Hours</h3>
                <p className="text-[#444444]">
                  Monday - Saturday: 10am - 6pm
                  <br />
                  Sunday: By appointment only
                </p>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-2 text-[#2c2c2c]">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://www.instagram.com/theceramiqua/#"
                    className="text-[#2c2c2c] hover:text-[#c4a47a] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/theceramiqua/"
                    className="text-[#2c2c2c] hover:text-[#c4a47a] transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Full-width map section */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="font-serif text-2xl mb-4 text-[#2c2c2c] text-center">Our Location</h3>
          <div className="w-full h-[350px] overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.774598563501!2d75.89979417517937!3d22.736617779375212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2b4f2cca3a5%3A0x39830183a0be16d8!2sThe%20Ceramiqua%3A%20Tiles%2C!5e0!3m2!1sen!2sin!4v1744733907367!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}