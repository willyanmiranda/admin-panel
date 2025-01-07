import Image from 'next/image';
import { Badge } from '@/components/common/badge';
import { Button } from '@/components/common/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger
} from '@/components/ui/dropdownMenu';
import { MoreHorizontal } from 'lucide-react';
import { TableCell, TableRow } from '@/components/ui/table';
import { deleteProduct } from '@/services/products';
import { convertDate } from '@/lib/utils';
import { ProductType } from '@/types/product';

export function Product({ product }: { product: ProductType }) {
  return (
    <TableRow>
      <TableCell className="hidden sm:table-cell">
        <Image
          alt="Product image"
          className="aspect-square rounded-md object-cover"
          height="64"
          src={product.mainImage}
          width="64"
        />
      </TableCell>
      <TableCell className="font-medium">{product.title}</TableCell>
      <TableCell>
        <Badge variant="outline" className="capitalize bg-green-100 border-green-500 text-green-600">
          Ativo
        </Badge>
      </TableCell>
      <TableCell className="hidden md:table-cell">{`R$${product.price}`}</TableCell>
      <TableCell className="hidden md:table-cell">{product.inStock}</TableCell>
      <TableCell className="hidden md:table-cell">
        {convertDate(product.createdAt)}
      </TableCell>
      <TableCell>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem>Editar</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">
              <form action={deleteProduct}>
                <button type="submit">Excluir</button>
              </form>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TableCell>
    </TableRow>
  );
}