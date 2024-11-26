import React from "react";
import * as Form from "@radix-ui/react-form";
import { Upload } from "lucide-react";
import { Button } from "@/components/common/button";
import Link from "next/link";

const ProductForm = () => (
	<div className="bg-white mt-3 flex items-center justify-center p-16 rounded-lg border bg-card text-card-foreground shadow-sm">
        <Form.Root className="w-[720px] flex flex-col gap-6">
            <h1 className="text-[18px] font-semibold">Cadastre seu produto</h1>
            <div className="flex flex-col gap-y-5">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <Form.Field className="grid" name="name">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                                Título
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Por favor adicione um título
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full text-[13px] bg-gray-100/50 rounded-md border-solid border border-gray-300 h-8 px-1.5"
                                type="text"
                                placeholder="Camisa social"
                                required
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="grid" name="subtitle">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                                Subtítulo
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Por favor adicione um subtitulo
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <input
                                className="w-full text-[13px] bg-gray-100/50 rounded-md border-solid border border-gray-300 h-8 px-1.5"
                                type="text"
                                placeholder="Camisa show de bola"
                            />
                        </Form.Control>
                    </Form.Field>
                    <Form.Field className="grid" name="category">
                        <div className="flex items-baseline justify-between">
                            <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                                Categoria
                            </Form.Label>
                            <Form.Message
                                className="text-[13px] text-white opacity-80"
                                match="valueMissing"
                            >
                                Por favor selecione uma categoria
                            </Form.Message>
                        </div>
                        <Form.Control asChild>
                            <select id="countries" className="bg-gray-100/50 text-[13px] pl-1 h-8 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Escolha a categoria</option>
                                <option value="US">United States</option>
                                <option value="CA">Canada</option>
                                <option value="FR">France</option>
                                <option value="DE">Germany</option>
                            </select>
                        </Form.Control>
                    </Form.Field>
                </div>
                <Form.Field className="grid" name="description">
                    <div className="flex items-baseline justify-between">
                        <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                            Descrição
                        </Form.Label>
                        <Form.Message
                            className="text-[13px] text-white opacity-80"
                            match="valueMissing"
                        >
                        Por favor adicione um descrição
                        </Form.Message>
                    </div>
                    <Form.Control asChild>
                        <textarea
                            className="min-h-[60px] text-[13px] py-1 bg-gray-100/50 rounded-md border-solid border border-gray-300 h-8 px-1.5"
                            placeholder="Camisa social de algodão"
                            required
                        />
                    </Form.Control>
                </Form.Field>
            </div>
            <Form.Field className="grid" name="image">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                        Imagens
                    </Form.Label>
                    <Form.Message
                        className="text-[13px] text-white opacity-80"
                        match="valueMissing"
                    >
                       Por favor adicione uma imagem
                    </Form.Message>
                </div>
                <Form.Control asChild>
                    <button type="button" className="bg-ui-bg-component bg-gray-100/50 border-ui-border-strong transition-fg group flex w-full flex-col items-center gap-y-2 border-gray-300 rounded-lg border border-dashed p-8 hover:border-ui-border-interactive focus:border-ui-border-interactive focus:shadow-borders-focus outline-none focus:border-solid">
                        <div className="text-ui-fg-subtle group-disabled:text-ui-fg-disabled flex items-center gap-x-2">
                            <Upload className="w-4 h-4"/>
                            <p className="font-normal text-[13px]">Upload</p>
                        </div>
                        <p className="font-normal text-[13px] txt-compact-small text-ui-fg-muted group-disabled:text-ui-fg-disabled">Arraste ou clique aqui para fazer o upload das imagens.</p>
                    </button>
                </Form.Control>
            </Form.Field>
            <div aria-orientation="horizontal" role="separator" className="border-ui-border-base w-full border-t"></div>
            <Form.Field className="grid" name="variants">
                <div className="flex items-baseline justify-between">
                    <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
                        Variaveis
                    </Form.Label>
                </div>
                <Form.Control asChild>
                    <div className="bg-ui-bg-component bg-gray-100/50 border-ui-border-strong transition-fg group flex w-full flex-col gap-y-2 border-gray-300 rounded-lg border border-solid p-8 hover:border-ui-border-interactive focus:border-ui-border-interactive focus:shadow-borders-focus outline-none focus:border-solid">   
                        <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" value="" className="sr-only peer"/>
                            <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Yes, this is a product with variants</span>
                        </label>
                        <p className="font-normal text-[13px] txt-compact-small text-ui-fg-muted group-disabled:text-ui-fg-disabled">When unchecked, we will create a default variant for you</p>
                    </div>
                </Form.Control>
            </Form.Field>
            <Form.Submit asChild>
                <Button size="sm" className="h-9 gap-1">
                    <Link href="/products/create" className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                        Cadastrar
                    </Link>
                </Button>
            </Form.Submit>
        </Form.Root>
    </div>
);

export default ProductForm;