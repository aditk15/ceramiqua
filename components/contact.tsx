"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Facebook } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#eae6df]">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-center mb-8 sm:mb-12 md:mb-16 text-[#2c2c2c]">
          Contact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="flex flex-col">
            <form className="space-y-4 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <Input type="text" placeholder="Name" className="bg-white border-0 h-10 sm:h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Email" className="bg-white border-0 h-10 sm:h-12" />
              </div>
              <div>
                <Textarea placeholder="Message" className="bg-white border-0 min-h-[120px] sm:min-h-[150px]" />
              </div>
              <div>
                <Button
                  type="submit"
                  className="bg-[#c4a47a] hover:bg-[#b3936a] text-white rounded-none px-6 sm:px-8 py-4 sm:py-6 h-auto w-full sm:w-auto"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>

          <div>
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-[#2c2c2c]">Visit Our Showroom</h3>
                <p className="text-[#444444] text-sm sm:text-base">
                  ED/110, Ring Road, Sector D, Opposite Khajrana Square, Scheme 94,
                  <br />
                  Indore, Madhya Pradesh, India (452010)
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-[#2c2c2c]">Contact Information</h3>
                <p className="text-[#444444] text-sm sm:text-base">
                  sandeep@theceramiqua.com
                  <br />
                  +91 94250 81343
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-[#2c2c2c]">Opening Hours</h3>
                <p className="text-[#444444] text-sm sm:text-base">
                  Monday - Saturday: 10am - 8pm
                  <br />
                  Sunday: By appointment only
                </p>
              </div>

              <div>
                <h3 className="font-serif text-lg sm:text-xl mb-2 text-[#2c2c2c]">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/theceramiqua/#"
                    className="text-[#2c2c2c] hover:text-[#c4a47a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/theceramiqua/"
                    className="text-[#2c2c2c] hover:text-[#c4a47a] transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h3 className="font-serif text-xl sm:text-2xl mb-4 text-[#2c2c2c] text-center">Our Location</h3>
          <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.774598563501!2d75.89979417517937!3d22.736617779375212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962e2b4f2cca3a5%3A0x39830183a0be16d8!2sThe%20Ceramiqua%3A%20Tiles%2C!5e0!3m2!1sen!2sin!4v1744733907367!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Ceramiqua Location"
            />
          </div>
        </div>

        <div className="mt-8 text-center text-xs sm:text-sm text-[#6b6b6b] opacity-80">©2025 by The Ceramiqua.</div>

        <div className="mt-4 text-center text-xs sm:text-sm text-[#6b6b6b] opacity-80">
          Designed and Developed by Adit Khandelwal
        </div>
      </div>
    </section>
  )
}
