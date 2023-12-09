import Image from 'next/image'
import Link from 'next/link'

export default function ProductItem({ product }) {
  return (
    <div className="card">
      <Link href={`/product/${product.id}`}>    
        <Image
          src={product.image}
          width={400}
          height={400}
          alt={product.name}
          className="rounded shadow object-cover h-96 w-full"
        />
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.id}`}>
          <h2 className="text-lg font-bold"> {product.name} </h2>
        </Link>
        <p> {product.price}₩</p>
      </div>
    </div>
  )
}