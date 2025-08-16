"use client";
import Link from "next/link";
import type { ProductData } from "../../types/product";
import IconRight from "../global/IconRight";
interface ProductsProps {
  products: ProductData[];
  title?: string;
  category?: string;
}
export default function Products({ products, title, category }: ProductsProps) {
  return (
    <div className="container px-4 py-30">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl text-secondary font-medium">
          {title} <span className="text-primary">{category}</span>
        </h2>
        <Link
          href="/products"
          className="text-black hover:text-primary flex items-center gap-1"
        >
          View All
          <IconRight/>
        </Link>
      </div>
      <div className="border-[1px] mt-4"></div>
      <div className="grid grid-cols-5 space-x-4 mt-10">
        {products.map((product) => (
          <div key={product.id} className=" border rounded-2xl">
            <Link href={product.slug}>
              <div className="relative">
                {product.price_sale && (
                  <div className="absolute top-0 right-0 bg-primary px-2 py-[11px] rounded-bl-2xl rounded-tr-2xl">
                    {Math.round(
                      ((product.price_sale - product.price) /
                        product.price_sale) *
                        100
                    )}
                    %<br />
                    OFF
                  </div>
                )}
                <div className="w-full max-h-[188px] rounded-2xl overflow-hidden">
                <img src={product.metadata.image} alt={product.metadata.alt}  className="w-full h-full object-cover"/>
                </div>
              </div>
              <div className="space-y-[10px] px-[10px] py-4">
                <h3 className="text-lg font-medium text-black line-clamp-2 leading-tight">
                  {product.name}
                </h3>
                <div className="space-x-2 text-lg">
                  <span className="font-bold text-black">
                    ₹{Math.round(product.price)}
                  </span>
                  {product.price_sale && (
                    <span className="text-secondary line-through">
                      ₹{Math.round(product.price_sale)}
                    </span>
                  )}
                </div>
                <div className="border-[1px]"></div>
                {product.price_sale && (
                  <span className="text-lg text-green-600 font-medium">
                    Save - ₹{Math.round(product.price - product.price_sale)}
                  </span>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
