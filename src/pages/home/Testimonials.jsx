import { ChevronLeft, ChevronRight} from 'lucide-react';
import { useState } from 'react';
import { TestimonialCard } from '../../components/TestimonialCard';

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Hamadi",
      role: "CEO of Devia",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
    {
      id: 2,
      name: "Haizen",
      role: "CEO of Octopia",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
    {
      id: 3,
      name: "NKRI",
      role: "CEO of Jarvis",
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet lorem. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, quis aliquam.",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials">
      <div className="testimonials__container">
        <div className="testimonials__header">
          <h2 className="testimonials__title">CLIENT&apos;S TALKS</h2>
          <div className="testimonials__controls">
            <button
              className="testimonials__btn testimonials__btn--prev"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="testimonials__btn testimonials__btn--next"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="testimonials__carousel">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} index={index} currentIndex={currentIndex}/>
          ))}
        </div>
      </div>
    </section>
  );
};
