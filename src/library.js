export const getCategories = async () => {
  // Try fakestoreapi.in first
  try {
    const response = await fetch(
      "https://fakestoreapi.in/api/products/category",
      { cache: "no-store" }
    );
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data?.categories) ? data.categories : [];
  } catch (_) {
    // Fallback: fakestoreapi.com
    try {
      const res2 = await fetch(
        "https://fakestoreapi.com/products/categories",
        { cache: "no-store" }
      );
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
      const cats = await res2.json();
      return Array.isArray(cats) ? cats : [];
    } catch (_) {
      return [];
    }
  }
};

export const getProducts = async () => {
  // Try fakestoreapi.in first (returns { products: [] })
  try {
    const response = await fetch("https://fakestoreapi.in/api/products", {
      cache: "no-store",
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const data = await response.json();
    return Array.isArray(data?.products) ? data.products : [];
  } catch (_) {
    // Fallback: fakestoreapi.com (returns [] directly)
    try {
      const res2 = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
      });
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
      const arr = await res2.json();
      return Array.isArray(arr) ? arr : [];
    } catch (_) {
      return [];
    }
  }
};

export const getProductsLimited = async (limit = 5) => {
  // Try .in with query param shape first
  try {
    const res = await fetch(
      `https://fakestoreapi.in/api/products?limit=${encodeURIComponent(limit)}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const products = Array.isArray(data?.products) ? data.products : [];
    return products;
  } catch (_) {
    // Fallback to .com (returns array, we'll slice to limit)
    try {
      const res2 = await fetch("https://fakestoreapi.com/products", {
        cache: "no-store",
      });
      if (!res2.ok) throw new Error(`HTTP ${res2.status}`);
      const arr = await res2.json();
      return Array.isArray(arr) ? arr.slice(0, limit) : [];
    } catch (_) {
      return [];
    }
  }
};
