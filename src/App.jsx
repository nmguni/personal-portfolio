import { Hero } from "@/sections/Hero"
import { About } from "@/sections/About"
import { Projects } from "@/sections/Projects"
import { Contact } from "@/sections/Contact"
import { Experience } from "@/sections/Experience"
import { Testimonials } from "@/sections/Testimonials"

import { Navbar } from "@/layout/Navbar"


let slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];



export const App = () => {



  return (
    <div className="min-h-screen overflow-x-hidden ">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonials slides={slides}
        />
        <Contact />
      </main>
    </div>
  )
}
