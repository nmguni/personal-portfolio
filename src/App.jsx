import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"
import { Experience } from "@/sections/Experience"
import { Navbar } from "@/layout/Navbar"

export const App = () => {

  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}
