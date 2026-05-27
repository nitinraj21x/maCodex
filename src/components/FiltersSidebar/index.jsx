import { ChevronDown } from "lucide-react";
import { useState } from "react";

const sections = [
  { key: "category", label: "Categories" },
  { key: "priceRange", label: "Price Range" },
  { key: "material", label: "Metal Type" },
  { key: "stone", label: "Gemstone" },
  { key: "collection", label: "Collection" },
  { key: "occasion", label: "Occasion" },
];

const priceOptions = [
  { label: "All Prices", value: "all" },
  { label: "Rs 25k - Rs 75k", value: "25000-75000" },
  { label: "Rs 75k - Rs 150k", value: "75000-150000" },
  { label: "Rs 150k - Rs 250k", value: "150000-250000" },
  { label: "Rs 250k+", value: "250000-9999999" },
];

function FilterGroup({ title, children, open, onToggle }) {
  return (
    <div className="border-b border-maroon/10 py-4">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between text-left">
        <span className="text-sm uppercase tracking-[0.28em] text-olive/80">{title}</span>
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="mt-4 space-y-3">{children}</div>}
    </div>
  );
}

function FilterButton({ active, label, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm transition ${
        active
          ? "border-maroon/35 bg-maroon/8 text-maroon"
          : "border-maroon/10 bg-white/55 text-ink/72 hover:border-olive/30"
      }`}
    >
      {label}
    </button>
  );
}

function FiltersSidebar({ categories, filters, setFilters, filterMeta }) {
  const [openSections, setOpenSections] = useState(
    sections.reduce((acc, section) => ({ ...acc, [section.key]: true }), {}),
  );

  const toggleSection = (key) =>
    setOpenSections((current) => ({ ...current, [key]: !current[key] }));

  return (
    <aside className="luxury-card luxury-border sticky top-28 rounded-[2rem] p-6">
      <div className="flex items-center justify-between">
        <p className="font-serif text-3xl text-maroon">Filters</p>
        <button
          type="button"
          onClick={() =>
            setFilters((current) => ({
              ...current,
              category: "",
              priceRange: "all",
              material: "",
              stone: "",
              collection: "",
              occasion: "",
              bridal: false,
              antique: false,
              sortBy: "featured",
            }))
          }
          className="text-xs uppercase tracking-[0.28em] text-maroon"
        >
          Reset
        </button>
      </div>

      <div className="mt-6">
        <FilterGroup title="Categories" open={openSections.category} onToggle={() => toggleSection("category")}>
          {categories.map((category) => (
            <FilterButton
              key={category.title}
              label={category.title}
              active={filters.category === category.title}
              onClick={() =>
                setFilters((current) => ({
                  ...current,
                  category: current.category === category.title ? "" : category.title,
                }))
              }
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Price Range" open={openSections.priceRange} onToggle={() => toggleSection("priceRange")}>
          {priceOptions.map((option) => (
            <FilterButton
              key={option.value}
              label={option.label}
              active={filters.priceRange === option.value}
              onClick={() => setFilters((current) => ({ ...current, priceRange: option.value }))}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Metal Type" open={openSections.material} onToggle={() => toggleSection("material")}>
          {filterMeta.materials.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={filters.material === item}
              onClick={() =>
                setFilters((current) => ({ ...current, material: current.material === item ? "" : item }))
              }
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Gemstone" open={openSections.stone} onToggle={() => toggleSection("stone")}>
          {filterMeta.stones.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={filters.stone === item}
              onClick={() =>
                setFilters((current) => ({ ...current, stone: current.stone === item ? "" : item }))
              }
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Collection" open={openSections.collection} onToggle={() => toggleSection("collection")}>
          {filterMeta.collections.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={filters.collection === item}
              onClick={() =>
                setFilters((current) => ({
                  ...current,
                  collection: current.collection === item ? "" : item,
                }))
              }
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Occasion" open={openSections.occasion} onToggle={() => toggleSection("occasion")}>
          {filterMeta.occasions.map((item) => (
            <FilterButton
              key={item}
              label={item}
              active={filters.occasion === item}
              onClick={() =>
                setFilters((current) => ({ ...current, occasion: current.occasion === item ? "" : item }))
              }
            />
          ))}
        </FilterGroup>
      </div>

      <div className="mt-6 space-y-3">
        <label className="flex items-center justify-between rounded-2xl border border-maroon/10 bg-white/55 px-4 py-3 text-sm text-ink/72">
          Bridal Only
          <input
            type="checkbox"
            checked={filters.bridal}
            onChange={(event) => setFilters((current) => ({ ...current, bridal: event.target.checked }))}
          />
        </label>
        <label className="flex items-center justify-between rounded-2xl border border-maroon/10 bg-white/55 px-4 py-3 text-sm text-ink/72">
          Antique Only
          <input
            type="checkbox"
            checked={filters.antique}
            onChange={(event) => setFilters((current) => ({ ...current, antique: event.target.checked }))}
          />
        </label>
        <select
          value={filters.sortBy}
          onChange={(event) => setFilters((current) => ({ ...current, sortBy: event.target.value }))}
          className="w-full rounded-2xl border border-maroon/10 bg-white/55 px-4 py-3 text-sm text-ink/72 outline-none"
        >
          <option value="featured">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </div>
    </aside>
  );
}

export default FiltersSidebar;
