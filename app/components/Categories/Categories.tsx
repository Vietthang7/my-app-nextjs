"use client";

import Link from "next/link";
import IconDownArrow from "../global/IconDownArrow";
import SubMenu from "../Menu/SubMenu";
import type { CategoryItem } from "../../types/category";
interface CategoriesProps {
  categories: CategoryItem[];
}

export default function Categories({ categories }: CategoriesProps) {
  return (
    <nav className="bg-white py-4 border-y-2">
      <div className="container  px-30">
        <div className="flex items-center space-x-3.5">
          {categories.map((category) => (
            <div key={category.href} className="relative group">
              <div className="px-3.5 border-2 border-gray-200 rounded-full bg-[#F5F5F5] py-2 ">
                <Link
                  href={category.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
                >
                  <span className="font-medium text-sm whitespace-nowrap">
                    {category.name}
                  </span>
                  {category.hasDropdown && (
                    <IconDownArrow className="w-4 h-4 text-gray-700 group-hover:rotate-180 transition-transform duration-200" />
                  )}
                </Link>
              </div>
              {category.hasDropdown && (
                <div className="absolute top-8.5 left-4 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-40 min-w-[220px] invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <SubMenu items={category.subcategories} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
