import ProductItem from '@/components/ProductItem'
import { data } from '@/utils/data'
export default function Home() {
  const { product_woman } = data

  return (
    <div>
      <div className="max-w-9xl mx-16 h-90 bg-white dark:bg-gray-800 text-left md:text-left">
        <h1 className="text-9xl md:text-16xl font-bold py-20">
          Woman
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6
      "> 
        {product_woman.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
