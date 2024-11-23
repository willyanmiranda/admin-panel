import { ProductType } from "@/types/product";
import { getAllProducts } from "@/lib/endpoints";

export async function getProducts(): Promise<ProductType[]> {
    const response = await fetch(getAllProducts, {
        next: { revalidate: 60 },
    });
    return response.json();
}

export function deleteProduct(formData: FormData) {
    console.log(formData)
}