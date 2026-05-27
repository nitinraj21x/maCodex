export const filterProducts = (products, filters) => {
  const {
    category,
    priceRange,
    material,
    stone,
    collection,
    occasion,
    sortBy,
    search,
    bridal,
    antique,
  } = filters;

  let filtered = [...products];

  if (search) {
    const needle = search.toLowerCase();
    filtered = filtered.filter(
      (product) =>
        product.name.toLowerCase().includes(needle) ||
        product.tags.some((tag) => tag.toLowerCase().includes(needle)),
    );
  }

  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (material) {
    filtered = filtered.filter((product) => product.material === material);
  }

  if (stone) {
    filtered = filtered.filter((product) => product.stone === stone);
  }

  if (collection) {
    filtered = filtered.filter((product) => product.subcategory === collection);
  }

  if (occasion) {
    filtered = filtered.filter((product) => product.tags.includes(occasion));
  }

  if (bridal) {
    filtered = filtered.filter((product) => product.tags.includes("Bridal"));
  }

  if (antique) {
    filtered = filtered.filter((product) => product.tags.includes("Antique"));
  }

  if (priceRange !== "all") {
    const [min, max] = priceRange.split("-").map(Number);
    filtered = filtered.filter((product) => {
      if (Number.isNaN(max)) {
        return product.price >= min;
      }

      return product.price >= min && product.price <= max;
    });
  }

  switch (sortBy) {
    case "price-asc":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    default:
      filtered.sort((a, b) => Number(b.featured) - Number(a.featured));
      break;
  }

  return filtered;
};
