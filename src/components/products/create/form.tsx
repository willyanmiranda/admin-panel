"use client"
import * as Form from "@radix-ui/react-form";
import { Button } from "@/components/common/button";
import { FormField } from "@/components/ui/form";
import ImageField from "./imageField";
import Variants from "./variants";
import { useDispatch, useSelector } from "react-redux";
import { setTitle, setSubtitle, setDescription, setPrice, setManufacturer } from "@/store/product/productSlice";
import { RootState } from "@/store/store";
import { uploadImages } from "@/services/products";

const ProductForm = () => {
    const dispatch = useDispatch();
    const images = useSelector((state: RootState) => state.product.images);

    const handleSubmit = async (e: React.DragEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const cloudinaryReturn = await uploadImages(images);
        console.log(cloudinaryReturn);
    };

    return (
        
        <Form.Root className="w-[720px] flex flex-col gap-6">
            <h1 className="text-xl font-semibold">Cadastre seu produto</h1>
            <div className="flex flex-col gap-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <FormField
                        name="name"
                        label="Título"
                        placeholder="Camisa social"
                        required
                        message="Por favor adicione um título"
                        onChange={(value) => dispatch(setTitle(value))}
                    />
                    <FormField
                        name="subtitle"
                        label="Subtítulo"
                        placeholder="Camisa show de bola"
                        onChange={(value) => dispatch(setSubtitle(value))}
                    />
                    <FormField
                        name="price"
                        label="Preço"
                        placeholder="100.00"
                        required
                        message="Por favor adicione um preço"
                        onChange={(value) => dispatch(setPrice(Number(value)))}
                    />
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <FormField
                        name="category"
                        label="Categoria"
                        asChild
                        message="Por favor selecione uma categoria"
                    >
                        <select id="category"
                            className="bg-gray-100/50 text-sm pl-1 h-8 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full"
                        >
                            <option selected>Escolha a categoria</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </FormField>
                    <FormField
                        name="manufacturer"
                        label="Marca"
                        placeholder="Samsung"
                        onChange={(value) => dispatch(setManufacturer(value))}
                    />
                </div>
                <FormField
                    name="description"
                    label="Descrição"
                    placeholder="Camisa social de algodão"
                    required
                    asChild
                    message="Por favor adicione uma descrição"
                >
                    <textarea
                        className="min-h-[60px] text-sm py-1 bg-gray-100/50 rounded-md border-solid border border-gray-300 h-8 px-1.5"
                        onChange={(e) => dispatch(setDescription(e.target.value))}
                        placeholder="Camisa social branca muito bacana"
                        required
                    />
                </FormField>
            </div>
            <FormField name="image" label="Imagens" asChild message="Por favor adicione uma imagem">
                <ImageField />
            </FormField>
            <div aria-orientation="horizontal" role="separator" className="border-ui-border-base w-full border-t"></div>
            <Variants />
            <Form.Submit asChild>
                <Button onClick={handleSubmit} size="sm" className="h-10 gap-1">
                    <span>
                        Cadastrar
                    </span>
                </Button>
            </Form.Submit>
        </Form.Root>
        
    )
};

export default ProductForm;