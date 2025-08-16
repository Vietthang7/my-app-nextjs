"use client";
import Link from "next/link";
import type { CategoryData } from "../../types/category";
import IconRight from "../global/IconRight";
interface CategoriesProps {
  categories: CategoryData[];
  title?: string;
  category?: string;
}
export default function CategoriesV2({
  categories,
  title,
  category,
}: CategoriesProps) {
  return (
    <div className="container px-4 pb-30">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl text-secondary font-medium">
          {title} <span className="text-primary">{category}</span>
        </h2>
        <Link
          href="/categories"
          className="text-black hover:text-shadow-amber-500 flex items-center gap-1"
        >
          View All
          <IconRight />
        </Link>
      </div>
      <div className="border-[1px] mt-4"></div>
      <div className="grid grid-cols-7 gap-4 mt-10">
        {categories.map((category) => (
          <div key={category.id} className="flex flex-col items-center">
            <Link href={`/categories/${category.slug}`}>
              <div className="w-33 h-33 rounded-full overflow-hidden">
                <img
                  src={category.image.src}
                  alt={category.image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
            <span className="text-lg text-black mt-5">{category.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
