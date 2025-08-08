import IconMap from "./global/IconMap";
import IconTruck from "./global/IconTruck";
import IconTitle from "./global/IconTitle";
import IconMenu from "./global/IconMenu";
import IconHexagonal from "./global/IconHexagonal";
import IconSearch from "./global/IconSearch";
import IconMenuv2 from "./global/IconMenuv2";
import IconUser from "./global/IconUser";
import IconCart from "./global/IconCart";
export default function Header() {
  return (
    <header>
      <div className="bg-[#F5F5F5] py-2">
        <div className="container px-[120px]">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <div className="text-[14px]">Welcome to worldwide Megamart!</div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-1.5">
                <IconMap />
                <span>Deliver to</span>
                <span className="font-medium">423651</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <IconTruck />
                <span>Track your order</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <IconHexagonal />
                <span>All Offers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-[21px]">
        <div className="container  px-30">
          <div className="flex items-center justify-between">
            {/* Logo and Menu  */}
            <div className="flex space-x-4 items-center">
              <button className="text-blue-500">
                <IconMenu />
              </button>
              <IconTitle />
            </div>
            {/* Search Bar */}
            <div className="flex-1 max-w-[600px] mx-8">
              <div className="relative flex items-center">
                <div className="absolute left-4 ">
                  <IconSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search essentials, groceries and more..."
                  className="w-full pl-[44px] pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
                />
                <div className="absolute right-4 hidden xl:block">
                  <IconMenuv2 />
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6 text-gray-700">
              <button className="flex items-center space-x-2">
                <IconUser />
                <span className="text-lg">Sign Up/Sign In</span>
              </button>
              <button className="flex items-center space-x-2">
                <IconCart />
                <span className="text-lg">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}