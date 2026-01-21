import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Card from '../components/Card';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Tabs from '../components/Tabs';
import Pill from '../components/Pill';
import { products, productCategories } from '../data/tsp';
import { getProductImage } from '../utils/imageMap';

type CategoryFilter = 'ALL' | 'ANESTHESIA' | 'PRESCRIPTION_DRUGS' | 'MEDICAL_SUPPLIES' | 'FOOD_SUPPLEMENTS';

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('category') as CategoryFilter) || 'ALL';
  
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>(initialCategory);

  useEffect(() => {
    const categoryParam = searchParams.get('category') as CategoryFilter;
    if (categoryParam && ['ALL', 'ANESTHESIA', 'PRESCRIPTION_DRUGS', 'MEDICAL_SUPPLIES', 'FOOD_SUPPLEMENTS'].includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const tabs = [
    { id: 'ALL', label: 'All' },
    { id: 'ANESTHESIA', label: 'Anesthesia' },
    { id: 'PRESCRIPTION_DRUGS', label: 'Prescription Drugs' },
    { id: 'MEDICAL_SUPPLIES', label: 'Medical Supplies/Device' },
    { id: 'FOOD_SUPPLEMENTS', label: 'Upcoming Food Supplements' }
  ];

  const filteredProducts = useMemo(() => {
    let filtered = products;

    // Filter by category
    if (activeCategory !== 'ALL') {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.brandCode?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId as CategoryFilter);
    setSearchParams({ category: categoryId });
  };

  const getCategoryLabel = (category: string) => {
    return productCategories[category as keyof typeof productCategories] || category;
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <Section className="bg-gradient-to-br from-primary-50 via-blue-50 to-sky-50">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Products
          </h1>
          <p className="text-lg text-slate-600">
            High-quality pharmaceutical products for healthcare professionals
          </p>
        </div>
      </Section>

      {/* Search and Filters */}
      <Section>
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          <Tabs 
            tabs={tabs} 
            activeTab={activeCategory} 
            onTabChange={handleCategoryChange}
            className="justify-center"
          />
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const isProfostar = product.brandCode === 'PROFOSTAR';
              return (
              <Card key={product.id} hover>
                <div className="space-y-4">
                  <div className={isProfostar ? 'aspect-[3/4] min-h-[400px]' : 'aspect-square'}>
                    <ImagePlaceholder 
                      src={getProductImage(product.brandCode, product.name)} 
                      alt={product.name}
                      aspectRatio="auto"
                      objectFit="contain"
                      className={isProfostar ? 'h-full w-full' : ''}
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-slate-900 flex-1">
                        {product.name}
                      </h3>
                    </div>
                    
                    {product.brandCode && (
                      <p className="text-sm text-slate-500 mb-3">
                        ({product.brandCode})
                      </p>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <Pill size="sm" variant="outline">
                        {getCategoryLabel(product.category)}
                      </Pill>
                      
                      <Link
                        to={`/contact?product=${encodeURIComponent(product.name)}`}
                        className="inline-flex items-center gap-1 text-primary-600 hover:text-primary-700 text-sm font-medium"
                      >
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            );
            })}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No products found matching your criteria.</p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-slate-600">
          Showing {filteredProducts.length} of {products.length} products
        </div>
      </Section>
    </div>
  );
}
