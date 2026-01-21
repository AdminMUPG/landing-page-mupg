interface TabsProps {
  tabs: { id: string; label: string }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
  className?: string;
}

export default function Tabs({ tabs, activeTab, onTabChange, className = '' }: TabsProps) {
  return (
    <div className={`flex flex-wrap gap-2 mb-8 ${className}`}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            px-6 py-2.5 rounded-full
            font-medium text-sm
            transition-all
            ${
              activeTab === tab.id
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
