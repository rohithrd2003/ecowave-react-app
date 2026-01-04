import { API_BASE_URL } from '../config';

export const fetchProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const fetchProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) {
            throw new Error(`Failed to fetch product with id ${id}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
    }
};
