import { useState } from "react";
import {
   BsFillArrowRightCircleFill,
   BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import { Button } from "@/components/Button";


export const CarouselComponent = ({ slides, chairmanmills }) => {
   let [current, setCurrent] = useState(0);

   let previousSlide = () => {
      if (current === 0) setCurrent(slides.length - 1);
      else setCurrent(current - 1);
   };

   let nextSlide = () => {
      if (current === slides.length - 1) setCurrent(0);
      else setCurrent(current + 1);
   };

   return (
      <section id="carousel-section" className="mb-10">
         <div id="carousel" className="overflow-hidden relative">
            <div
               className={`flex transition ease-out duration-40 `}
               style={{
                  transform: `translateX(-${current * 100}%)`,
               }}
            >
               {slides.map((s) => {
                  return <img id="caroul-img" key={s.id} src={s.image} alt={s.title} />;
               })}
            </div>

            <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
               <button onClick={previousSlide}>
                  <BsFillArrowLeftCircleFill />
               </button>
               <button onClick={nextSlide}>
                  <BsFillArrowRightCircleFill />
               </button>
            </div>

            <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
               {slides.map((s, i) => {
                  return (
                     <div
                        onClick={() => {
                           setCurrent(i);
                        }}
                        key={"circle" + i}
                        className={`rounded-full w-5 h-5 cursor-pointer  ${i == current ? "bg-white" : "bg-gray-500"
                           }`}
                     ></div>
                  );
               })}
            </div>
         </div>

         <div>
            {chairmanmills.map((mills, idx) => (
               <div
                  key={idx}
                  className="group overflow-hidden animate-fade-in md:row-span-1"
                  style={{ animationDelay: `${(idx + 1) * 100}ms` }}
               >
                  <div className=" project-content-container p-6 space-y-4">
                     <div className="flex items-start justify-between">
                        <h3 className="text-xl text-primary font-semibold ">
                           {mills.title}
                        </h3>
                     </div>
                     <p className=" line-height-p text-muted-foreground">{mills.description}</p>
                     <p className=" line-height-p text-muted-foreground">{mills.descriptionTwo}</p>
                     <div className="flex flex-wrap gap-2">
                        {mills.tags.map((tag, tagIdx) => (
                           <span
                              key={tagIdx}
                              className=" text-primary text-ms font-medium"
                           >
                              {tag}
                           </span>
                        ))}
                     </div>
                     <div className="btn-container">
                        <Button className="btn-animation mr-2" size="sm">
                           <a href={mills.chairmanLink}>Chairman Mills</a>
                        </Button>

                        <Button className="btn-animation ml-2" size="sm">
                           <a href={mills.eventRentalLink}>Elemtn Event Solutions</a>
                        </Button>


                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
};
