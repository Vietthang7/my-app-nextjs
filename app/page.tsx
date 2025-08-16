import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories/Categories";
import HeroSlider from "./components/HeroSlide/Slide";
import SlidePerView from "./components/HeroSlide/SlidePerView";
import Products from "./components/Products/Product";
import Categoriesv2 from "./components/Categories/Categoriesv2";
const categoriesData = [
  {
    id: 1,
    name: "Groceries",
    href: "/groceries",
    hasDropdown: true,
    subcategories: [
      {
        id: 11,
        name: "Fresh Produce",
        href: "/groceries/fresh-produce",
        hasDropdown: true,
        subcategories: [
          {
            id: 111,
            name: "Organic Vegetables",
            href: "/groceries/fresh-produce/organic-vegetables",
          },
          {
            id: 112,
            name: "Exotic Fruits",
            href: "/groceries/fresh-produce/exotic-fruits",
          },
          {
            id: 113,
            name: "Herbs & Spices",
            href: "/groceries/fresh-produce/herbs-spices",
          },
        ],
      },
      {
        id: 12,
        name: "Dairy & Eggs",
        href: "/groceries/dairy-eggs",
        hasDropdown: true,
        subcategories: [
          {
            id: 121,
            name: "Milk & Cream",
            href: "/groceries/dairy-eggs/milk-cream",
          },
          {
            id: 122,
            name: "Cheese Varieties",
            href: "/groceries/dairy-eggs/cheese-varieties",
          },
          {
            id: 123,
            name: "Yogurt & Probiotics",
            href: "/groceries/dairy-eggs/yogurt-probiotics",
          },
        ],
      },
      {
        id: 13,
        name: "Meat & Seafood",
        href: "/groceries/meat-seafood",
        hasDropdown: false,
      },
      {
        id: 14,
        name: "Pantry Essentials",
        href: "/groceries/pantry-essentials",
        hasDropdown: true,
        subcategories: [
          {
            id: 141,
            name: "Rice & Grains",
            href: "/groceries/pantry-essentials/rice-grains",
          },
          {
            id: 142,
            name: "Cooking Oils",
            href: "/groceries/pantry-essentials/cooking-oils",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Premium Fruits",
    href: "/premium-fruits",
    hasDropdown: false,
    subcategories: [],
  },
  {
    id: 3,
    name: "Home & Kitchen",
    href: "/home-kitchen",
    hasDropdown: true,
    subcategories: [
      {
        id: 31,
        name: "Cookware",
        href: "/home-kitchen/cookware",
        hasDropdown: true,
        subcategories: [
          {
            id: 311,
            name: "Non-Stick Pans",
            href: "/home-kitchen/cookware/non-stick-pans",
          },
          {
            id: 312,
            name: "Stainless Steel",
            href: "/home-kitchen/cookware/stainless-steel",
          },
          {
            id: 313,
            name: "Cast Iron",
            href: "/home-kitchen/cookware/cast-iron",
          },
        ],
      },
      {
        id: 32,
        name: "Small Appliances",
        href: "/home-kitchen/small-appliances",
        hasDropdown: true,
        subcategories: [
          {
            id: 321,
            name: "Coffee Makers",
            href: "/home-kitchen/small-appliances/coffee-makers",
          },
          {
            id: 322,
            name: "Blenders",
            href: "/home-kitchen/small-appliances/blenders",
          },
        ],
      },
      {
        id: 33,
        name: "Storage & Organization",
        href: "/home-kitchen/storage-organization",
        hasDropdown: false,
      },
    ],
  },
  {
    id: 4,
    name: "Fashion",
    href: "/fashion",
    hasDropdown: true,
    subcategories: [
      {
        id: 41,
        name: "Men's Clothing",
        href: "/fashion/mens-clothing",
        hasDropdown: true,
        subcategories: [
          {
            id: 411,
            name: "Formal Wear",
            href: "/fashion/mens-clothing/formal-wear",
          },
          {
            id: 412,
            name: "Casual Wear",
            href: "/fashion/mens-clothing/casual-wear",
          },
          {
            id: 413,
            name: "Sportswear",
            href: "/fashion/mens-clothing/sportswear",
          },
        ],
      },
      {
        id: 42,
        name: "Women's Clothing",
        href: "/fashion/womens-clothing",
        hasDropdown: true,
        subcategories: [
          {
            id: 421,
            name: "Dresses",
            href: "/fashion/womens-clothing/dresses",
          },
          {
            id: 422,
            name: "Tops & Blouses",
            href: "/fashion/womens-clothing/tops-blouses",
          },
        ],
      },
      {
        id: 43,
        name: "Accessories",
        href: "/fashion/accessories",
        hasDropdown: false,
      },
    ],
  },
  {
    id: 5,
    name: "Electronics",
    href: "/electronics",
    hasDropdown: true,
    subcategories: [
      {
        id: 51,
        name: "Smartphones",
        href: "/electronics/smartphones",
        hasDropdown: false,
      },
      {
        id: 52,
        name: "Computers",
        href: "/electronics/computers",
        hasDropdown: true,
        subcategories: [
          { id: 521, name: "Laptops", href: "/electronics/computers/laptops" },
          {
            id: 522,
            name: "Desktops",
            href: "/electronics/computers/desktops",
          },
        ],
      },
    ],
  },
  // Thêm các categories khác tương tự...
];
const heroSlidesData = [
  {
    id: 1,
    title: "Best Deal Online on smart watches",
    image: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
    imageAlt: "Smart Watch Collection",
  },
  {
    id: 2,
    title: "Premium Electronics Collection",
    image: "https://cdn.codeinet.com/gov/uploads/1752042983392-jbkgkkuc1z.jpg",
    imageAlt: "Electronic Devices",
  },
  {
    id: 3,
    title: "Fashion Forward Styles",
    image: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
    imageAlt: "Fashion Collection",
  },
  {
    id: 4,
    title: "Home & Kitchen Essentials",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_27_638393109771583706_e-commerce-la-gi-3.jpg",
    imageAlt: "Kitchen Appliances",
  },
  {
    id: 5,
    title: "Home & Kitchen Essentials",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_27_638393109771583706_e-commerce-la-gi-3.jpg",
    imageAlt: "Kitchen Appliances",
  },
  {
    id: 6,
    title: "Home & Kitchen Essentials",
    image:
      "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_27_638393109771583706_e-commerce-la-gi-3.jpg",
    imageAlt: "Kitchen Appliances",
  },
];
const productsData = [
  {
    id: 1,
    name: "Smart Watch Series 6",
    slug: "/products/smart-watch-series-6",
    price: 299.99,
    metadata: {
      image:
        "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "demo 1",
    },
    price_sale: 249.99,
  },
  {
    id: 2,
    name: "Wireless Earbuds Pro",
    slug: "/products/wireless-earbuds-pro",
    price: 199.99,
    metadata: {
      image:
        "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "demo 1",
    },
    price_sale: 149.99,
  },
  {
    id: 3,
    name: "4K Ultra HD TV",
    slug: "/products/4k-ultra-hd-tv",
    price: 799.99,
    metadata: {
      image:
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_27_638393109771583706_e-commerce-la-gi-3.jpg",
      alt: "demo 1",
    },
    price_sale: 749.99,
  },
  {
    id: 4,
    name: "4K Ultra HD TV",
    slug: "/products/4k-ultra-hd-tv",
    price: 799.99,
    metadata: {
      image:
        "https://cdn2.fptshop.com.vn/unsafe/1920x0/filters:format(webp):quality(75)/2023_12_27_638393109771583706_e-commerce-la-gi-3.jpg",
      alt: "demo 1",
    },
    price_sale: 749.99,
  },
  {
    id: 5,
    name: "4K Ultra HD TV",
    slug: "/products/4k-ultra-hd-tv",
    price: 799.99,
    metadata: {
      image:
        "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "demo 1",
    },
    price_sale: 749.99,
  },
];
const categoriesDataV2 = [
  {
    id: 1,
    name: "Naruto",
    image: {
      src: "https://hoanghamobile.com/tin-tuc/wp-content/webp-express/webp-images/uploads/2023/08/hinh-nen-naruto-2.jpg.webp",
      alt: "Mobile Category",
    },
    slug: "/naruto",
  },
  {
    id: 2,
    name: "Obito",
    image: {
      src: "https://symbols.vn/wp-content/uploads/2022/01/Hinh-Avt-Obito-de-thuong.jpg",
      alt: "Mobile Category",
    },
    slug: "/obito",
  },
  {
    id: 3,
    name: "Itachi",
    image: {
      src: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "Mobile Category",
    },
    slug: "/itachi",
  },
  {
    id: 4,
    name: "Sasuke",
    image: {
      src: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "Mobile Category",
    },
    slug: "/sasuke",
  },
  {
    id: 5,
    name: "Kakashi",
    image: {
      src: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "Mobile Category",
    },
    slug: "/kakashi",
  },
  {
    id: 6,
    name: "Minato",
    image: {
      src: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "Mobile Category",
    },
    slug: "/minato",
  },
  {
    id: 7,
    name: "Jiraiya",
    image: {
      src: "https://cdn.codeinet.com/gov/uploads/1752042983393-xdxxfa2fo3p.jpg",
      alt: "Mobile Category",
    },
    slug: "/jiraiya",
  },
];
export default function Page() {
  return (
    <div>
      <Header />
      <Categories categories={categoriesData} />
      <HeroSlider slides={heroSlidesData} />
      <main>
        <Products
          products={productsData}
          title="Grab the best deal on"
          category="Smartphones"
        />
        <Categoriesv2
          categories={categoriesDataV2}
          title="Shop From"
          category="Top Categories"
        />
        <SlidePerView
          slides={heroSlidesData}
          title="Top"
          category="Electronics Brands"
        />
      </main>
      <Footer />
    </div>
  );
}
