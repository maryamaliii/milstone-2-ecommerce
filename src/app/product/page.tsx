import { products } from '@/components/product';
import Image from 'next/image';
 // Adjust the import path as needed

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-gray-200"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.imagePath}
                  alt={product.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <h2 className="text-lg font-semibold text-gray-800 mt-4">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg text-gray-900 font-bold mt-4">${product.price.toFixed(2)}</p>
              <div className="flex mt-2 text-yellow-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.floor(product.rating) ? "★" : i < product.rating ? "½" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;