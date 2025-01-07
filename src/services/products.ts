import { ProductType, FileData } from "@/types/product";
import { createImage, getAllProducts } from "@/lib/endpoints";
import { convertBlobToBase64 } from "@/lib/utils";

export async function getProducts(): Promise<ProductType[]> {
    const response = await fetch(getAllProducts, {
        next: { revalidate: 60 },
    });
    return response.json();
};

export function deleteProduct(formData: FormData) {
    console.log(formData)
};

export const uploadImages = async (filePaths: FileData[]) => {
  try {
    const results = [];

    for (const file of filePaths) {
      const blob = await fetch(file.url).then((res) => res.blob());

      const formData = new FormData();
      formData.append("file", blob, file.name); 
      formData.append("productID", "2");

      console.log([...formData.entries()])

      const response = await fetch(
        createImage,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Erro ao enviar a imagem: ${response.statusText}`);
      }

      const result = await response.json();
      results.push(result); 

      console.log("Imagem enviada com sucesso:", result.secure_url);
    }

    return results; 
  } catch (error) {
    console.error("Erro ao enviar as imagens:", error);
    throw error;
  }
};  