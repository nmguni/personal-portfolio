import { FaExternalLinkAlt } from "react-icons/fa";
import { CarouselComponent } from "../components/CarouselComponent";

const projects = [
   {
      title: "Klick Health | Skyrizi HCP Project",
      description:
         "A comprehensive financial analytics platform with real-time data visualization, portfolio management, and AI-powered insights.",
      image: "../src/assets/images/portfolio-images/skyrizihcp-image.jpg",
      tags: ["AEM", "JavaScript", "SCSS", "CSS"],
      link: "https://www.skyrizihcp.com/gastroenterology/crohns-disease",
      // github: "#",
   },
   {
      title: "Klick Health | Rinvoq HCP Project",
      description:
         "A full-featured e-commerce solution with inventory management, payment processing, and analytics dashboard.",
      image: "../src/assets/images/portfolio-images/rinvoqhcp-image.jpg",
      tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
      link: "https://www.rinvoqhcp.com/rheumatoid-arthritis",
      // github: "#",
   },
   {
      title: "Ontario SEO | Sigma Assessment Systems",
      description:
         "Transform PDFs into working pages in the succession planning section, upload content to the blog page while optimizing images, and use a crawler to audit sites for common SEO issues such as broken links, redirects, duplicate content, and page title and metadata problems.",
      image: "../src/assets/images/portfolio-images/sigma-portfolio.jpg",
      tags: ["WordPress", "HTML", "INPS", "SEO", "JavaScript"],
      link: "https://www.sigmaassessmentsystems.com/",
      github: "#",
   },
   {
      title: "Ontario SEO | INPS",
      description:
         "Transform PDF’s into working pages for the Canadian, US, and Mexican Sites.Page rebuilds were completed for all the Rail, Graphic, Transit, OEM, and Fleet Solutions pages.Optimized images in compliance with SEO standards.",
      image: "../src/assets/images/portfolio-images/inps-portfolio.jpg",
      tags: ["Drupal", "HTML", "CSS"],
      link: "https://inps.net/",
      github: "#",
   },
];

const chairmanmills = [
   {
      title: "Element Event Solutions (Chairman Mills)",
      description:
         " Chairman Mills recently rebranded, bringing all its companies together under one unified brand: Element Event Solutions. The original website is no longer fully accessible, but you can still view it via the Wayback Machine using the “Live Site” button. At Chair-man Mills, I supported and optimized a network of nine WordPress and Headless CMS websites, focusing on compliance, accessibility, and seamless user experience.I customized WordPress themes using PHP, ACF, and Gutenberg blocks to simplify content authoring workflows. Using Zapier and Monday.com automations. Acting as the main technical point of contact, I communicated project updates, deployment timelines, and technical solutions to non‑technical teams keeping site launches on track and stakeholders fully informed.",
      image: "../src/assets/images/portfolio-images/skyrizihcp-image.jpg",
      tags: [
         "JavaScript",
         "PHP",
         "HTML",
         "CSS",
         "WordPress",
         "Headless",
         "CMS",
         "SEO",
         "MySQL",
      ],
      chairmanLink:
         "https://web.archive.org/web/20201130203716/www.chairmanmills.com/",
      eventRentalLink: "https://elementeventscanada.com/",
      // github: "#",
   },
];

const slides = [
   // {
   //    title: "Element event",
   //    image: "../src/assets/images/carousel-imagesel/element-event.jpg",

   // },
   {
      title: "Advanced tent renta",
      image:
         "../src/assets/images/carousel-images/advanced-tent-rental-portfolio.jpg",
   },
   {
      title: "Chairman mills slide 1",
      image: "../src/assets/images/carousel-images/chairmanmills-slide1.jpg",
   },
   {
      title: "Chairman mills slide 1",
      image: "../src/assets/images/carousel-images/chairmanmills-slide2.jpg",
   },
   {
      title: "Chairman mills slide 2",
      image: "../src/assets/images/carousel-images/chairmanmills-slide3.jpg",
   },
];

export const Projects = () => {
   return (
      <section
         id="projects"
         className="py-32 mt-30 mb-30 relative overflow-hidden"
      >
         {/* Bg glows */}
         <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
         <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
         <div className="container mx-auto px-6 relative z-10">
            {/* Section Header */}
            <div className="text-center mx-auto max-w-3xl mb-16">
               <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
                  Featured Work
               </span>
               <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-primary">
                  Professional
                  <span className="font-serif italic font-normal text-white">
                     {" "}
                     Projects
                  </span>
               </h2>
               {/* <p className="text-muted-foreground animate-fade-in animation-delay-200">
                 Most recent work, from complex web applications to
                  innovative tools that solve real-world problems.
               </p> */}
            </div>

            {/* Image Carosuel */}

            <CarouselComponent chairmanmills={chairmanmills} slides={slides} />

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
               {projects.map((project, idx) => (
                  <div
                     key={idx}
                     className="group overflow-hidden animate-fade-in md:row-span-1"
                     style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                  >
                     {/* Image */}
                     <div className="relative about-image rounded-2xl overflow-hidden aspect-video">
                        <img
                           src={project.image}
                           alt={project.title}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div
                           className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                        />
                        {/* Overlay Links */}
                        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-80 text-2xl transition-opacity duration-300">
                           <a href={project.link} className="p-3 rounded-full glass-0">
                              <FaExternalLinkAlt />
                           </a>
                        </div>
                     </div>

                     {/* Content */}
                     <div className="p-6 space-y-4">
                        <div className="flex items-start justify-between">
                           <h3 className="text-xl text-primary font-semibold ">
                              {project.title}
                           </h3>
                        </div>
                        <p className="text-primary text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                           {project.tags.map((tag, tagIdx) => (
                              <span
                                 key={tagIdx}
                                 className=" text-primary text-ms font-medium"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                     </div>
                  </div>
               ))}
            </div>

            {/* View All CTA */}
            {/* <div className="text-center mt-12 animate-fade-in animation-delay-500">
               <AnimatedBorderButton>
                  View All Projects

               </AnimatedBorderButton>
            </div> */}
         </div>
      </section>
   );
};
