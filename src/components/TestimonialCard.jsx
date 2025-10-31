import { StarIcon } from 'lucide-react';

export const TestimonialCard = ({testimonial, index, currentIndex}) => {

    return(
        <div key={testimonial.id} className={`testimonials__card ${ index === currentIndex ? 'testimonials__card--active' : ''}`}>
            <div className="testimonials__card-header">
                <div className="infos">
                  <div className="testimonials__avatar">
                    <img
                      src="/images/bit-mojie.png"
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
    );
}