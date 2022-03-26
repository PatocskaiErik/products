import axios from "axios";

export const fetchProducts = async (setProducts) => {
  const url = "/api/products";
  try {
    const response = await axios.get(url);
    const data = response.data;
    setProducts(data);
  } catch (error) {
    console.warn("Failed to load products");
    throw Error("Nem sikerült betölteni a termékek listáját!");
  }
};

export const addProduct = async (newProduct, setSuccess, setError) => {
  const url = "/api/products";
  try {
    const response = await axios.post(url, newProduct);
    if (response.status === 200) {
      setSuccess(true);
      window.location.href("/");
    }
  } catch (error) {
    console.warn("Failed to add product");
    setError(true);
  }
};

export const fetchProductById = async (setProduct, id) => {
  const url = "/api/products" + "/" + id;
  try {
    const response = await axios.get(url);
    const data = response.data;
    setProduct(data);
  } catch (error) {
    console.warn("Failed to load product by id");
  }
};

export const editProduct = async (product, id, setEditSuccess, setError) => {
  const url = "/api/products" + "/" + id;
  try {
    const response = await axios.put(url, product);
    if (response.status === 200) {
      setEditSuccess(true);
    }
  } catch (error) {
    setError(true);
    console.warn("Failed to edit product");
  }
};

export const deleteProductById = async (id, setDeleteSuccess, setError) => {
  const url = "/api/products" + "/" + id;
  try {
    const response = await axios.delete(url);
    if (response.status === 200) {
      setDeleteSuccess(true);
    }
  } catch (error) {
    setError(true);
    console.warn("Failed to delete product");
  }
};
