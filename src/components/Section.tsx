interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  title?: string;
  subtitle?: string;
}

export default function Section({ 
  children, 
  className = '',
  containerClassName = '',
  title,
  subtitle
}: SectionProps) {
  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClassName}`}>
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
