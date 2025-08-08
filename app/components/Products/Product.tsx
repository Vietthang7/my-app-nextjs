"use client";
import Link from "next/link";
import type { ProductData } from "../../types/product";

interface ProductsProps {
  products: ProductData[],
  title?: string;
  category?: string;
}
export default function Products({ products, title, category }: ProductsProps) {
  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4">
            <Link href={product.slug}>
              <img
                src={product.metadata.image}
                alt={product.metadata.alt}
                className="w-full h-48 object-cover mb-4 rounded"
              />
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600">
                ${product.price.toFixed(2)}
                {product.price_sale && (
                  <span className="text-red-500 ml-2 line-through">
                    ${product.price_sale.toFixed(2)}
                  </span>
                )}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}


// export default function Products({ products, title = "Grab the best deal on", category = "Smartphones" }: ProductsProps) {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       {/* Header Section */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">
//           {title} <span className="text-blue-600 border-b-2 border-blue-600">{category}</span>
//         </h2>
//         <Link href="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1">
//           View All
//           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//           </svg>
//         </Link>
//       </div>

//       {/* Products Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
//         {products.map((product) => (
//           <div key={product.id} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-200">
//             <Link href={product.slug}>
//               <div className="relative mb-3">
//                 {/* Discount Badge */}
//                 {product.price_sale && (
//                   <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded z-10">
//                     {Math.round(((product.price_sale - product.price) / product.price_sale) * 100)}%<br />OFF
//                   </div>
//                 )}
                
//                 {/* Product Image */}
//                 <div className="w-full h-40 bg-gray-100 rounded-lg overflow-hidden">
//                   <img
//                     src={product.metadata.image}
//                     alt={product.metadata.alt}
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>

//               {/* Product Info */}
//               <div className="space-y-2">
//                 <h3 className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
//                   {product.name}
//                 </h3>
                
//                 {/* Price Section */}
//                 <div className="space-y-1">
//                   <div className="flex items-center gap-2">
//                     <span className="text-lg font-bold text-gray-900">
//                       ₹{Math.round(product.price)}
//                     </span>
//                     {product.price_sale && (
//                       <span className="text-sm text-gray-500 line-through">
//                         ₹{Math.round(product.price_sale)}
//                       </span>
//                     )}
//                   </div>
                  
//                   {/* Savings */}
//                   {product.price_sale && (
//                     <p className="text-xs text-green-600 font-medium">
//                       Save - ₹{Math.round(product.price_sale - product.price)}
//                     </p>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }