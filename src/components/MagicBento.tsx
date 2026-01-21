import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoItem {
  id: string;
  title?: string;
  description?: string | ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
  span?: 'col-span-1' | 'col-span-2' | 'col-span-3';
  rowSpan?: 'row-span-1' | 'row-span-2';
}

interface MagicBentoProps {
  items: BentoItem[];
  className?: string;
}

export default function MagicBento({ items, className = '' }: MagicBentoProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 [grid-auto-rows:1fr] ${className}`}>
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className={`
            relative flex flex-col
            rounded-2xl border border-slate-200
            bg-white p-4 md:p-5
            shadow-sm hover:shadow-md
            transition-all duration-200
            min-h-[210px]
            h-auto
            overflow-visible
            ${item.span || 'col-span-1'}
            ${item.rowSpan || 'row-span-1'}
            ${item.className || ''}
          `}
        >
          {item.header}
          {item.title && (
            <h3 className="text-lg font-semibold text-slate-900 mb-1 mt-2 leading-6 tracking-tight">
              {item.title}
            </h3>
          )}
          {item.description && (
            <div className="text-slate-600 leading-relaxed">
              {typeof item.description === 'string' ? (
                <p>{item.description}</p>
              ) : (
                item.description
              )}
            </div>
          )}
          {item.footer && (
            <div className="mt-auto pt-4">
              {item.footer}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}
