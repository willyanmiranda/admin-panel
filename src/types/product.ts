interface Category {
    name: string;
}

export interface ProductType {
    id: string;
    title: string;
    description: string;
    price: number;
    rating: number;
    inStock: number;
    mainImage: string;
    manufacturer: string;
    slug: string;
    createdAt: string; 
    updatedAt: string; 
    categoryId: string;
    Category: Category;
}