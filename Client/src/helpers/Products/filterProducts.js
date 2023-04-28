/**
 * Give this function a set of products and filters that has to be applied.
 * @param {*} filters
 * @param {*} products
 * @returns Filtered Products
 */

export const filterProducts = (filters, products) => {
  const filteredProducts = products
    .filter((product) => {
      return filters?.categories?.includes(product?.category?.category_name);
    })
    ?.sort((a, b) => {
      return filters?.sort_by === "asc" ? a?.Price - b?.Price : b?.Price - a?.Price;
    })
    .filter((product) => {
      return product.name.toLowerCase().includes(filters.product_name.toLowerCase())
    })
  return filteredProducts
};
