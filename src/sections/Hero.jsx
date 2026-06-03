import { Button } from "@/components/Button";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";

import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const skills = [
   "React",
   "GatsbyJS",
   "JavaScript",
   "Node.js",
   "GraphQL",
   "CSS",
   "SASS - SCSS",
   "PHP",
   "JSON",
   "JQuery",
   "AEM",
   "WordPress",
   "Drupal",
   "Git",
   "GA4",
   "SEO",
];

export const Hero = () => {
   return (
      <section className="relative min-h-screen flex items-center overflow-hidden p-20 p-20">
         {/* Bg */}
         {/* <div className="absolute inset-0">
            <img
               src="/hero-bg.jpg"
               alt="Hero image"
               className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
         </div> */}

         {/* Green Dots */}
         <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
               <div
                  className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                  style={{
                     backgroundColor: "#20B2A6",
                     left: `${Math.random() * 100}%`,
                     top: `${Math.random() * 100}%`,
                     animation: `slow-drift ${15 + Math.random() * 20
                        }s ease-in-out infinite`,
                     animationDelay: `${Math.random() * 5}s`,
                  }}
               />
            ))}
         </div>

         {/* Content */}
         <div className="container px-6 pt-32 pb-20  z-10">
            <div className="flex justify-center">
               <div className="space-y-8">
                  {/* <div className="animate-fade-in">
                     <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                        <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                        Toronto
                     </span>
                  </div> */}

                  {/* Headline */}
                  <div className="space-y-4">
                     <h1 className=" text-primary text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                        Ndumiso Mguni <br />
                        <span className="text-primary glow-text">
                           Frontend{" "}
                           <span className="font-serif italic font-normal text-white">
                              Web
                           </span>{" "}
                           Developer
                        </span>
                     </h1>

                     <p className="text-lg text-muted-foreground max-w-3xl animate-fade-in animation-delay-200">
                        Hi, I’m Ndumiso, a frontend Web developer with 5+ years of
                        experience. I work primarily with JavaScript (ES6+), React,
                        WordPress, AEM, and CMS platforms, creating responsive and
                        accessible digital experiences.
                     </p>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                     <Button className="btn-animation" size="lg">
                        <a href="#contact">Contact Me</a>
                     </Button>

                     <button className="download-btn relative overflow-hidden rounded-full font-bold focus:outline-none focus-visible:ring-2 focus-visible:ring-primary  text-primary hover:bg-primary/20 shadow-lg shadow-primary/25 px-8 py-4 text-lg btn-animation" size="lg">
                        <a href="../assets/docs/Ndumiso_Mguni_Resume.pdf"
                           download="Ndumiso_Mguni_Resume.pdf">  Download CV

                        </a>
                     </button>

                     {/* <Button className="btn-animation"
                        href="../assets/docs/Ndumiso_Mguni_Resume.pdf"
                        download="Ndumiso_Mguni_Resume.pdf"
                     >
                        <a
                           className="text-primary"
                           href="../assets/docs/Ndumiso_Mguni_Resume.pdf"
                           download="Ndumiso_Mguni_Resume.pdf"
                        >
                           Download CV
                        </a>
                     </Button> */}
                  </div>

                  {/* Social Links */}

                  <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                     <a
                        href="https://www.linkedin.com/in/ndumiso-mguni/"
                        target="_blank"
                        className="btn-animation p-2 rounded-full glass-0 text-2xl hover:bg-primary/10 hover:text-primary transition-all duration-500"
                     >
                        <FaLinkedin />
                     </a>
                     <a
                        href="https://github.com/nmguni/"
                        target="_blank"
                        className=" btn-animation p-2 rounded-full glass-0 text-2xl hover:bg-primary/10 hover:text-primary transition-all duration-500"
                     >
                        <FaGithubSquare />
                     </a>
                  </div>
               </div>
            </div>

            {/* Skills Section */}
            <div className="mt-20 animate-fade-in animation-delay-600">
               {/* <p className="text-sm text-muted-foreground mb-6 text-center">
                  Technologies I work with
               </p> */}
               <div className="relative overflow-hidden">
                  <div
                     className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-background to-transparent z-10"
                  />
                  <div
                     className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-background to-transparent z-10"
                  />
                  <div className="flex animate-marquee">
                     {[...skills, ...skills].map((skill, idx) => (
                        <div key={idx} className="flex-shrink-0 px-8 py-4">
                           <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                              {skill}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
         >
            <a
               href="#about"
               className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
               <span className="text-xs uppercase tracking-wider">Scroll</span>
               <MdKeyboardDoubleArrowDown className="animate-bounce" />
            </a>
         </div>
      </section>
   );
};
