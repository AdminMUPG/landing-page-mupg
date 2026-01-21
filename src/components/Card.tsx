interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md'
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };

  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border border-slate-100
        shadow-sm
        ${paddingClasses[padding]}
        ${hover ? 'hover:shadow-md transition-shadow' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
