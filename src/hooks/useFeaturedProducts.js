import { useEffect, useMemo, useState } from "react";

const shuffle = (items) => [...items].sort(() => Math.random() - 0.5).slice(0, 4);

export const useFeaturedProducts = (products) => {
  const featuredPool = useMemo(
    () => products.filter((product) => product.featured),
    [products],
  );

  const [selected, setSelected] = useState(() => shuffle(featuredPool));

  useEffect(() => {
    setSelected(shuffle(featuredPool));
  }, [featuredPool]);

  useEffect(() => {
    if (!featuredPool.length) {
      return undefined;
    }

    const interval = window.setInterval(() => {
      setSelected(shuffle(featuredPool));
    }, 6000);

    return () => window.clearInterval(interval);
  }, [featuredPool]);

  return selected;
};
