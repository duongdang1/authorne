import { products } from "@/utils/fakeDb"
import ProductCard from "@/components/atoms/ProductCard"

const Products = () => {
  return (
    <div className="mt-10">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 text-white">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <ProductCard product={product}/>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products