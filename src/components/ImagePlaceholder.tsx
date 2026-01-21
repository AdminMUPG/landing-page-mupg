interface ImagePlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'wide' | 'auto';
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

export default function ImagePlaceholder({ 
  src, 
  alt, 
  className = '', 
  aspectRatio = 'auto',
  objectFit = 'cover'
}: ImagePlaceholderProps) {
  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[21/9]',
    auto: ''
  };

  const objectFitClasses = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
    'scale-down': 'object-scale-down'
  };

  // Check if src is an actual image path (starts with /assets or http)
  const isRealImage = src.startsWith('/assets') || src.startsWith('http') || src.startsWith('./');

  if (isRealImage) {
    return (
      <div 
        className={`
          ${aspectClasses[aspectRatio]}
          rounded-2xl 
          overflow-hidden
          bg-slate-100
          ${className}
        `}
      >
        <img 
          src={src} 
          alt={alt}
          className={`w-full h-full ${objectFitClasses[objectFit]}`}
          onError={(e) => {
            // Fallback to placeholder on error
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            if (target.parentElement) {
              target.parentElement.innerHTML = `
                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 text-slate-400 text-sm">
                  <div class="text-center p-4">
                    <div class="text-xs mb-1">Image not found</div>
                    <div class="text-[10px] text-slate-300">${src}</div>
                  </div>
                </div>
              `;
            }
          }}
        />
      </div>
    );
  }

  // Placeholder for non-existent images
  return (
    <div 
      className={`
        ${aspectClasses[aspectRatio]}
        bg-gradient-to-br from-slate-100 to-slate-200 
        border border-slate-200 
        rounded-2xl 
        flex items-center justify-center
        text-slate-400 text-sm font-medium
        ${className}
      `}
    >
      <div className="text-center p-4">
        <div className="text-xs mb-1">Image Placeholder</div>
        <div className="text-[10px] text-slate-300">{src}</div>
      </div>
    </div>
  );
}
