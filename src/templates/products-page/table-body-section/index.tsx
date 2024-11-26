import { TabsContent } from '@/components/ui/tabs';
import { ProductsTable } from '@/components/products/productsTable';
import { getProducts } from '@/services/products';

const TableBodySection = async () => {
    const products = await getProducts();
    return (
        <TabsContent value="all">
            <ProductsTable
                products={products}
            />
        </TabsContent>
    )
}

export default TableBodySection