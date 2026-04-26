import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import menuData from '../data/menu.json';

interface MenuItem {
  id: string;
  name: string;
  englishName: string;
  description: string;
  price: string;
  image: string;
  tags: string[];
  signature?: boolean;
}

interface MenuCategory {
  id: string;
  name: string;
  items: MenuItem[];
}

const categories: MenuCategory[] = menuData.categories;
const allItems = categories.flatMap(cat => cat.items.map(item => ({ ...item, category: cat.name })));

const filterOptions = [
  { id: 'spicy', label: 'Spicy 🌶️' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'signature', label: 'Signature' },
  { id: 'cold', label: 'Cold Dish' },
];

export default function MenuGrid() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev =>
      prev.includes(filterId)
        ? prev.filter(f => f !== filterId)
        : [...prev, filterId]
    );
  };

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all' ? allItems : categories.find(c => c.id === activeCategory)?.items || [];

    if (activeFilters.length > 0) {
      items = items.filter(item => {
        return activeFilters.some(filter => {
          if (filter === 'spicy') return item.tags.some(t => t.includes('Spicy'));
          if (filter === 'vegetarian') return item.tags.includes('Vegetarian');
          if (filter === 'signature') return item.signature;
          if (filter === 'cold') return item.tags.includes('Cold Dish');
          return false;
        });
      });
    }

    return items;
  }, [activeCategory, activeFilters]);

  const categoryTabs = [{ id: 'all', name: 'All' }, ...categories];

  return (
    <div>
      {/* Category Tabs */}
      <div className="sticky top-16 lg:top-20 z-40 bg-soft-cream/95 backdrop-blur-md border-b border-deep-indigo/5 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categoryTabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className="relative px-4 py-2 text-sm font-medium whitespace-nowrap transition-colors"
                style={{
                  color: activeCategory === tab.id ? '#C7301B' : '#5C6178',
                }}
              >
                {tab.name}
                {activeCategory === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-thai-chili-red"
                    style={{ backgroundColor: '#C7301B' }}
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Filter Chips */}
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1 scrollbar-hide">
            {filterOptions.map(filter => (
              <button
                key={filter.id}
                onClick={() => toggleFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-colors whitespace-nowrap ${
                  activeFilters.includes(filter.id)
                    ? 'bg-thai-chili-red text-white border-thai-chili-red'
                    : 'bg-pure-cream text-dusty-slate border-deep-indigo/10 hover:border-deep-indigo/20'
                }`}
                style={activeFilters.includes(filter.id) ? { backgroundColor: '#C7301B', borderColor: '#C7301B' } : {}}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map(item => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-pure-cream rounded-xl overflow-hidden border border-deep-indigo/5 hover:shadow-xl hover:shadow-[#3B5A8A]/[0.08] hover:-translate-y-2 transition-[transform,box-shadow] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
              >
                <div className="aspect-square overflow-hidden bg-soft-cream">
                  <img
                    src={item.image}
                    alt={`${item.englishName} — ${item.name}`}
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-deep-indigo">{item.name}</h3>
                      <p className="text-sm italic text-dusty-slate">{item.englishName}</p>
                    </div>
                    {item.signature && (
                      <span className="shrink-0 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-thai-chili-red/10 text-thai-chili-red">
                        Signature
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-dusty-slate leading-relaxed mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-body font-bold text-deep-indigo">{item.price}</span>
                    {item.tags.length > 0 && (
                      <div className="flex gap-1.5">
                        {item.tags.map(tag => (
                          <span key={tag} className="text-xs text-dusty-slate bg-soft-cream px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-dusty-slate">No items match your filters. Try adjusting your selection.</p>
          </div>
        )}
      </div>
    </div>
  );
}
