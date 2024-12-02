interface Category {
    name: string;
}

export interface OptionState {
    id: number,
    title: string,
    values: string[]
}

export interface ProductState {
    title: string;
    subtitle: string;
    description: string;
    price: number;
    mainImage: string;
    manufacturer: string;
    categoryId: string;
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