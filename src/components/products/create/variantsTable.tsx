"use client";

import React, { useState, useEffect } from "react";

interface Option {
  title: string;
  values: string[];
}

const VariantsTable = ({ options }: { options: Option[] }) => {
  const [variants, setVariants] = useState<string[][]>([]);

  const generateCombinations = (options: Option[]) => {
    if (options.length === 0) return [];

    const [first, ...rest] = options;
    const restCombinations = generateCombinations(rest);

    if (restCombinations.length === 0) {
      return first.values.map((value) => [value]);
    }

    return first.values.flatMap((value) =>
      restCombinations.map((combination) => [value, ...combination])
    );
  };

  useEffect(() => {
    const combinations = generateCombinations(options);
    setVariants(combinations);
  }, [options]);

  return (
    <div className="mt-4">
      <h3 className="font-medium text-lg mb-2">Product variants</h3>
      <p className="text-sm text-gray-500 mb-4">
        This ranking will affect the variants' order in your storefront.
      </p>
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Select</th>
            {options.map((option, index) => (
              <th key={index} className="border border-gray-300 px-4 py-2">
                {option.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {variants.map((variant, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 text-center">
                <input type="checkbox" defaultChecked />
              </td>
              {variant.map((value, i) => (
                <td key={i} className="border border-gray-300 px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VariantsTable;