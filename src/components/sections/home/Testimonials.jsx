"use client"

import { ChevronLeft, ChevronRight} from 'lucide-react';
import { TestimonialCard } from '@/components/TestimonialCard';
import { testimonials } from '@/components/data/Data';
import {useState} from "react";

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


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
          <h2 className="testimonials__title">AVIS CLIENT&apos;S</h2>
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
            <TestimonialCard key={index} testimonial={testimonial} index={index} currentIndex={currentIndex}/>
          ))}
        </div>
      </div>
    </section>
  );
};
