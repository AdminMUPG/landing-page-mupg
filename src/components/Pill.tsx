interface PillProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'solid';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export default function Pill({ 
  children, 
  variant = 'default', 
  size = 'md',
  className = '',
  onClick
}: PillProps) {
  const variantClasses = {
    default: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50',
    solid: 'bg-primary-500 text-white hover:bg-primary-600'
  };

  const sizeClasses = {
    sm: 'px-2.5 py-1 text-xs',
    md: 'px-4 py-1.5 text-sm',
    lg: 'px-5 py-2 text-base'
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-full
        font-medium
        transition-colors
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
