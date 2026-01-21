interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  text: string;
  link?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-4">
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-[#6A63B6] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                <p className="text-sm text-slate-600">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
            <div className="text-4xl text-[#6A63B6] mb-2">❝</div>
            <p className="text-slate-700 leading-relaxed mb-4">
              {testimonial.text}
            </p>
            {testimonial.link && (
              <a
                href={testimonial.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6A63B6] hover:text-[#554ea0] font-medium text-sm"
              >
                View More →
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
