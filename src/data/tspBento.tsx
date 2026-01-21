import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { companyData, products } from './tsp';

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

export const createTwostarBentoItems = (): BentoItem[] => {
  const pharmaCount = products.filter(p => p.category === 'PHARMACEUTICALS').length;
  const suppliesCount = products.filter(p => p.category === 'MEDICAL_SUPPLIES').length;

  const networkTypes = [
    'Government',
    'LGU',
    'Private',
    'Pharmacy & Wholesale'
  ];

  return [
    // Coverage (list tile)
    {
      id: 'coverage',
      span: 'col-span-1',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          COVERAGE
        </p>
      ),
      title: 'Network Reach',
      description: (
        <div className="mt-2 flex flex-wrap gap-2">
          {networkTypes.map(t => (
            <span
              key={t}
              className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700"
            >
              {t}
            </span>
          ))}
        </div>
      ),
      footer: (
        <p className="text-xs text-slate-500">
          Nationwide distribution support
        </p>
      )
    },

    // Clients (KPI)
    {
      id: 'clients',
      span: 'col-span-1',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          CLIENTS
        </p>
      ),
      description: (
        <div>
          <div className="text-5xl font-bold text-slate-900 leading-none">400+</div>
          <p className="mt-2 text-sm text-slate-600">
            Active healthcare partners
          </p>
          <p className="mt-3 text-xs text-slate-600">
            Working with hospitals, government institutions, local government units, and pharmacy/wholesale networks across the Philippines.
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5 text-xs text-slate-600">
            <span className="px-2 py-1 rounded-md bg-slate-100">Private hospitals</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">Government hospitals</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">LGUs / health centers</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">Pharmacies & wholesalers</span>
          </div>
        </div>
      )
    },

    // Catalog highlight tile
    {
      id: 'catalog',
      span: 'col-span-2',
      rowSpan: 'row-span-2',
      header: (
        <div className="flex items-center justify-between">
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
            CATALOG
          </p>
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700">
            {products.length}+ items
          </span>
        </div>
      ),
      title: 'Key Products',
      description: (
        <div className="mt-3 space-y-4">
          <div>
            <p className="text-5xl font-bold text-slate-900 leading-none">
              {products.length}+
            </p>
            <p className="text-sm text-slate-600">Listed items in portfolio</p>
          </div>

          {/* Mini category breakdown */}
          <div className="flex flex-wrap gap-1.5 text-xs">
            <span className="px-2 py-1 rounded-md bg-slate-100">{pharmaCount} Pharmaceuticals</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">{suppliesCount} Supplies</span>
          </div>

          {/* Featured products */}
          <div className="flex flex-wrap gap-1.5">
            {['Atracare-Star','Bupistar','Profostar','Xyfol','Sevotane','Ranexstar'].map(p => (
              <span
                key={p}
                className="text-xs px-2 py-1 rounded-md border border-slate-200 text-slate-700"
              >
                {p}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <Link
              to="/products"
              className="inline-flex items-center text-sm font-semibold text-[#6A63B6] hover:underline"
            >
              View Products →
            </Link>
          </div>
        </div>
      ),
      footer: (
        <p className="text-xs text-slate-500">
          Full catalog available on Products page
        </p>
      )
    },

    // Portfolio coverage (big tile)
    {
      id: 'products',
      span: 'col-span-2',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          PRODUCTS
        </p>
      ),
      title: 'Portfolio Coverage',
      description: (
        <div>
          <div className="text-5xl font-bold text-slate-900 leading-none">3</div>
          <p className="mt-2 text-sm text-slate-600">Core categories</p>
          <div className="mt-3 flex flex-wrap gap-2 text-xs">
            <span className="px-2 py-1 rounded-md bg-slate-100">Pharmaceuticals</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">Medical Supplies/Device</span>
            <span className="px-2 py-1 rounded-md bg-slate-100">Upcoming Food Supplements</span>
          </div>
        </div>
      )
    },

    // Operations
    {
      id: 'ops',
      span: 'col-span-1',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          OPERATIONS
        </p>
      ),
      title: 'Operations Base',
      description: (
        <div className="text-sm text-slate-600 space-y-1">
          <p>Rizal Warehouse</p>
          <p>QC Satellite Office</p>
        </div>
      ),
      footer: (
        <p className="text-xs text-slate-500">
          Faster fulfillment coverage
        </p>
      )
    },

    // Services
    {
      id: 'services',
      span: 'col-span-1',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          SERVICES
        </p>
      ),
      title: 'Core Services',
      description: (
        <div className="mt-2 flex flex-col gap-1.5 text-sm text-slate-600">
          <span className="px-2 py-1 rounded-md bg-slate-100 w-fit">
            Wholesale
          </span>
          <span className="px-2 py-1 rounded-md bg-slate-100 w-fit">
            Ethical Marketing
          </span>
        </div>
      )
    },

    // Trust
    {
      id: 'trust',
      span: 'col-span-2',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          TRUST
        </p>
      ),
      title: 'Core Values',
      description: (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {[
            'Integrity',
            'Reliability',
            'Growth Mindset'
          ].map(v => (
            <span
              key={v}
              className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-700"
            >
              {v}
            </span>
          ))}
        </div>
      ),
      footer: (
        <p className="text-xs text-slate-500">
          Built on integrity and reliability
        </p>
      )
    },

    // Group of companies
    {
      id: 'group',
      span: 'col-span-2',
      rowSpan: 'row-span-1',
      header: (
        <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#B7791F]">
          TSP GROUP
        </p>
      ),
      title: 'TSP Group',
      description: (
        <div className="space-y-1 text-sm text-slate-600">
          <div className="text-5xl font-bold text-slate-900 leading-none">2</div>
          <p className="mt-2 text-sm text-slate-600">Companies</p>
          <p className="text-xs text-slate-500">TSP + Medica Uno Farma</p>
        </div>
      )
    }
  ];
};

