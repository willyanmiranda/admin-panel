"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { generateVariants } from "@/lib/utils";
import VariantsCombination from "./variantsCombination";
import { updatePrice, setVariants } from "@/store/product/variantSlice";

const VariantsTable = () => {
  const options = useSelector((state: RootState) => state.options.options);
  const basePrice = useSelector((state: RootState) => state.product.price);
  const variants = useSelector((state: RootState) => state.variants.variants)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setVariants(generateVariants(options, basePrice)));
  }, [options]);

  return (
    <>
      {variants.length > 0 &&
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <div className="flex items-center gap-x-1">
              <label className="text-sm font-medium text-black">
                Variantes
              </label>
            </div>
            <span className="text-sm font-normal">
              Essa classificação afetará a ordem das variantes na sua loja.
            </span>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  Status
                </TableHead>
                {options.map(option => (
                  <TableHead>{option.title}</TableHead>
                ))}
                <TableHead>Preço</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {variants.map(variant => (
                <VariantsCombination variant={variant} />
              ))}
            </TableBody>
          </Table>
        </div>
      }
    </>
  );
};

export default VariantsTable;