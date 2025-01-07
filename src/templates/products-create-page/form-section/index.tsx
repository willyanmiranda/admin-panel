import ProductForm from '@/components/products/create/form';

const ProductFormSection = () => {
  return (
    <div className="bg-white mt-3 flex items-center justify-center p-16 rounded-lg border bg-card text-card-foreground shadow-sm">
        <ProductForm/>
    </div>
  )
}

export default ProductFormSection;