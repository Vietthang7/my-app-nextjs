export interface SubcategoryItem {
  id: number;
  name: string;
  href: string;
  subcategories?: SubcategoryItem[];
}

export interface CategoryItem {
  id: number;
  name: string;
  href: string;
  hasDropdown: boolean;
  subcategories: SubcategoryItem[];
}
export interface CategoryData {
  id: number;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  slug?: string;
}