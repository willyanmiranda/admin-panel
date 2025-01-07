"use client";
import { Button } from "@/components/common/button";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import Options from "./options";
import { useDispatch } from "react-redux";
import { addOption, removeOption } from "@/store/product/optionSlice";
import VariantsTable from "./variantsTable";

interface Option {
  id: number; 
}

const Variants = () => {
  const [withVariants, setWithVariants] = useState(false);
  const [currentId, setCurrentId] = useState(1);
  const [optionsList, setOptionsList] = useState<Option[]>([]);

  const dispatch = useDispatch();

  const handleAddOption = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setOptionsList((prev) => [
      ...prev,
      { id: currentId },
    ]);
    setCurrentId(currentId + 1);
    dispatch(addOption(currentId))
  };

  const handleRemoveOption = (id: number) => {
    setOptionsList((prev) => prev.filter((option) => option.id !== id));
    dispatch(removeOption(id));
  };

  return (
    <>
      <Form.Field className="grid" name="variants">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-sm font-medium leading-[35px] text-black">
            Variantes
          </Form.Label>
        </div>
        <Form.Control asChild>
          <div className="bg-ui-bg-component bg-gray-100/50 border-ui-border-strong transition-fg group flex w-full flex-col gap-y-1 border-gray-300 rounded-lg border border-solid p-4 hover:border-ui-border-interactive focus:border-ui-border-interactive focus:shadow-borders-focus outline-none focus:border-solid">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onChange={() => setWithVariants(!withVariants)}
                className="sr-only peer"
              />
              <div className="relative w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Sim, esse produto possui variantes
              </span>
            </label>
            <p className="font-normal text-sm txt-compact-small text-ui-fg-muted group-disabled:text-ui-fg-disabled">
              Caso esteja desmarcado, criaremos uma variante padrão para você.
            </p>
          </div>
        </Form.Control>
      </Form.Field>
      {withVariants && (
        <>
          <div className="flex flex-col gap-y-6 my-1">
            <div className="flex items-start justify-between gap-x-4">
              <div className="flex flex-col">
                <div className="flex items-center gap-x-1">
                  <label className="text-sm font-medium text-black">
                    Opções
                  </label>
                </div>
                <span className="text-sm font-normal">
                  Defina as opções para os produtos, ex. cor, tamanho, etc...
                </span>
              </div>
              <Button size="sm" className="h-7 gap-1 mt-1" onClick={handleAddOption}>
                Add
              </Button>
            </div>
          </div>
          <ul className="flex flex-col gap-y-4">
            {optionsList.map((option) => (
              <Options
                id={option.id}
                key={option.id}
                onRemove={() => handleRemoveOption(option.id)}
              />
            ))}
          </ul>
          { optionsList.length > 0 && <VariantsTable /> } 
        </>
      )}
    </>
  );
};

export default Variants;