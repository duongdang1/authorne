import ProductType from "@/app/types/ProductType"

const ProductCard = ({ 
  product
}: {
  product: ProductType
}) => {
  return (
    <div>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center group-hover:opacity-75 transition duration-300"
        />
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium">
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
      <p className="mt-1 text-sm italic">{product.description}</p>
    </div>
  )
}

export default ProductCard