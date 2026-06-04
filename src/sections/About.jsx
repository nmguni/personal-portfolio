import aboutMeImage from '../assets/images/about-image.jpg'

export const About = () => {
   return (
      <section id="about" className="py-32 flex items-center  overflow-hidden h-dvh" >
         <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
               {/* Left Column */}
               <div className="space-y-8">
                  <div className="animate-fade-in">
                     <span className="text-primary text-sm font-medium tracking-wider uppercase">
                        About Me
                     </span>
                  </div>

                  <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-primary">
                     Learn more about
                     <span className="font-serif italic font-normal text-white">
                        {" "}
                        me
                     </span>
                  </h2>

                  <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                     <p className="line-height-p" >
                        <span className="text-2xl md:text-3xl font-bold leading-tight animate-fade-in animation-delay-100  font-serif italic font-normal text-primary ">   Outside of work</span> I enjoy powerlifting and strength training, which have taught me the value of discipline, consistency, and continuous improvement. I’m also passionate about cooking and enjoy exploring cuisines from around the world, whether trying new recipes, hosting dinner parties, or organizing summer BBQs with friends. Traveling is another important interest of mine, as it gives me the opportunity to experience different cultures, perspectives, and cuisines.

                     </p>
                     <p className="line-height-p" >
                        <span className="text-2xl md:text-3xl font-bold leading-tight animate-fade-in animation-delay-100  font-serif italic font-normal text-primary "> I’m passionate </span>I’m passionate about technology as a whole rather than any single framework or programming language. I believe successful development is about adapting to the needs of a project, choosing the right tools for the job, and continuously learning as technology evolves. Staying curious, embracing new challenges, and expanding my technical knowledge are key drivers of my growth as a developer.
                     </p>
                     <p className="line-height-p" >
                        While I'mcommitted to delivering high-quality work, I also        <span className="text-2xl md:text-3xl font-bold leading-tight animate-fade-in animation-delay-100  font-serif italic font-normal text-primary ">value</span> maintaining a healthy work-life balance. Pursuing interests outside of technology helps me stay energized, focused, and motivated, allowing me to bring a fresh perspective and my best work to every project.
                     </p>
                  </div>

                  {/* <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                     <p className="text-lg font-medium italic text-foreground">
                        "My mission is to create digital experiences that are not just
                        functional, but truly delightful — products that users love to
                        use and developers love to maintain."
                     </p>
                  </div> */}
               </div>

               {/* Right Column - Hilights */}
               <div className=" ">
                  <div className="about-image animate-fade-in" >
                     <img
                        src={aboutMeImage}
                        alt="Ndumiso Mguni"
                        className="w-full about-image  object-fit"
                     />

                  </div>

               </div>
            </div>
         </div>
      </section >
   );
};