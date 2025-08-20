const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1';

export const getProductById = async (id) => {
  const token = sessionStorage.getItem("googleIdToken");
  const response = await axios.get(
    `${API_URL}/products/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    }
  );
  if(response.status !== 200) {
    throw new Error(`Error fetching product with ID ${id}`);
  }
  return response.data;
};