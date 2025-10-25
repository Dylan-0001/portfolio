import { ChevronLeft, ChevronRight, StarIcon, StarsIcon } from 'lucide-react';
import { useState } from 'react';
import avatarImage from '../../assets/images/bit-mojie.png';

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
            <div
              key={testimonial.id}
              className={`testimonials__card ${
                index === currentIndex ? 'testimonials__card--active' : ''
              }`}
            >
              <div className="testimonials__card-header">
                <div className="infos">
                  <div className="testimonials__avatar">
                    <img
                      src={avatarImage}
                      alt="Dylan Avatar"
                      className="about-me__avatar"
                    />
                  </div>
                  <div className="testimonials__info">
                    <h3 className="testimonials__name">{testimonial.name}</h3>
                    <p className="testimonials__role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonials__rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="testimonials__star">
                      <StarIcon/>
                    </span>
                  ))}
                </div>
              </div>
              <p className="testimonials__text">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
