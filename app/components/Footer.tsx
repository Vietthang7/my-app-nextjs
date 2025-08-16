import IconPhoneApp from "./global/IconPhoneApp";
import IconPhone from "./global/IconPhone";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primary text-white relative">
      <img src="/decorate-footer.svg" alt="Footer background" className="absolute right-0"/>
      <div className="px-40 py-20">
        <div className="grid grid-cols-4 gap-20">
          <div>
            <h3 className="text-3xl font-bold">MegaMart</h3>
            <div className="px-[3px] mt-[34px]">
              <Link href="/products" className="text-xl font-medium">
                Contact Us
              </Link>
              <div className="my-5">
                <div className="flex mb-5">
                  <IconPhoneApp />
                  <span className="ml-2">
                    WhatApp <br /> +91 1234567890
                  </span>
                </div>
                <div className="flex mb-7.5">
                  <IconPhone />
                  <span className="ml-2">
                    Call Us <br /> +91 1234567890
                  </span>
                </div>
              </div>
              <Link href="/products" className="text-xl font-medium">
                Download App
              </Link>
              <div className="flex gap-5 mt-5">
                <Link href="/products">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Google Play"
                    className="w-32 h-10"
                  />
                </Link>
                <Link href="/products">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="App Store"
                    className="w-32 h-10"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold pb-2">Most Popular Categories</h3>
            <div className="border"></div>
            <ul className="mt-4 space-y-2 list-disc px-5">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold pb-2">Most Popular Categories</h3>
            <div className="border"></div>
            <ul className="mt-4 space-y-2 list-disc px-5">
              <li>Staples</li>
              <li>Beverages</li>
              <li>Personal Care</li>
              <li>Home Care</li>
              <li>Baby Care</li>
              <li>Vegetables & Fruits</li>
              <li>Snacks & Foods</li>
              <li>Dairy & Bakery</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="border-b border-[#05ABF3] mt-[81px] w-full"></div>
          <div className="mt-6.25">
            © 2022 All rights reserved. Reliance Retail Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
}
