import Link from "next/link";
import IconDownArrow from "../global/IconDownArrow";
import type { SubcategoryItem } from "../../types/category";

interface SubMenuProps {
  items: SubcategoryItem[];
  level?: number;
}

export default function SubMenu({ items, level = 0 }: SubMenuProps) {
  return (
    <div className="py-2">
      {items.map((item) => (
        <div key={item.id} className="relative group/item">
          <Link
            href={item.href}
            className="flex item-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors group/menu"
          >
            <span>{item.name}</span>
            {item.subcategories && (
              <IconDownArrow className="w-4 h-4 text-gray-700 group-hover/menu:rotate-180 transition-transform duration-200" />
            )}
          </Link>
          {item.subcategories && (
            <div className="absolute top-0 left-full ml-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[180px] invisible group-hover/item:visible opacity-0 group-hover/item:opacity-100 transition-all duration-200">
              <SubMenu items={item.subcategories} level={level + 1} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
