import { TableCell, TableRow } from '@/components/ui/table';
import { Input } from '@/components/common/input';
import { Variant } from '@/types/product';
import React from 'react'
import { useDispatch } from 'react-redux';
import { updatePrice, updateStatus } from '@/store/product/variantSlice';

const VariantsCombination = ({ variant }: { variant: Variant }) => {
    const dispatch = useDispatch();
    const handlePriceChange = (id: number, newPrice: number) => {
        dispatch(updatePrice({ id, price: newPrice }));
    };

    return (
        <TableRow>
            <TableCell className="font-medium">
                <input type="checkbox" onChange={() => dispatch(updateStatus(variant.id))} checked={variant.active} />
            </TableCell>
            {variant.combination.map(combination => (
                <TableCell>{combination}</TableCell>
            ))}
            <TableCell className="hidden pr-0 md:table-cell">
                <Input type='text' onChange={(e) => handlePriceChange(variant.id, Number(e.target.value))} placeholder={variant.price.toString()}/>
            </TableCell>
        </TableRow>
    )
}

export default VariantsCombination;