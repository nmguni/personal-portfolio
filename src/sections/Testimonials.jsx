export const Testimonials = ({ slides }) => {
   return (
      <div >
         {slides.map((slide) => {
            return <img src={slide} />
         })}
      </div>
   )

};