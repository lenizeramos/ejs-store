export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data:any = await response.json();
  return data.slice(0, 5);
};
