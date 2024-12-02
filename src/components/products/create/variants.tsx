"use client";
import { Button } from "@/components/common/button";
import * as Form from "@radix-ui/react-form";
import React, { useState } from "react";
import Options from "./options";
import { useDispatch } from "react-redux";
import { addOption, removeOption } from "@/store/product/optionSlice";

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
          <Form.Label className="text-[13px] font-medium leading-[35px] text-black">
            Variaveis
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
                Yes, this is a product with variants
              </span>
            </label>
            <p className="font-normal text-[13px] txt-compact-small text-ui-fg-muted group-disabled:text-ui-fg-disabled">
              When unchecked, we will create a default variant for you
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
                  <label className="text-[13px] font-medium text-black">
                    Product options
                  </label>
                </div>
                <span className="text-[13px] font-normal">
                  Define the options for the product, e.g. color, size, etc.
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
        </>
      )}
    </>
  );
};

export default Variants;