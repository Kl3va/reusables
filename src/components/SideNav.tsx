"use client";
// import Image from 'next/image'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import { MdOutlineClose } from 'react-icons/md'
// import { useNavigationPanel } from '@/contexts/PanelContext'
// import { navbarData, sublist } from '@/data/protectedLayoutData'
import logo from "@/assets/images/logo.webp";

const SideNav = () => {
  // const pathname = usePathname()
  const pathname = "/"; // Replace with actual path logic

  const navbarData = [
    { id: 1, name: "Home", href: "/", icon: () => <span>Home Icon</span> }, // Replace with actual icon component
    {
      id: 2,
      name: "Profile",
      href: "/profile",
      icon: () => <span>Profile Icon</span>,
    },
  ]; // Replace with actual navbar data

  // const { close, isOpen } = useNavigationPanel() // Replace with actual context logic
  const isOpen = true; // Replace with actual state logic
  const close = () => {
    /* Replace with actual close logic */
  };

  return (
    <aside
      className={`h-screen fixed top-0 left-0 bg-white z-400 min-xl:hidden transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full w-64">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-8 py-3 border-b border-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-30 h-8.5">
                <img
                  src={logo}
                  alt="logo"
                  className="w-full h-full"
                  width={120}
                  height={33.39}
                  // priority [for nextjs]
                />
              </div>
            </div>
            <button
              className="p-1 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
              aria-label="Close navigation"
              onClick={close}
            >
              {/* <MdOutlineClose /> */}
              <span></span>
            </button>
          </div>

          <div className="flex flex-col px-3 gap-4 justify-between h-full text-fg-600">
            {/* Navigation Items */}
            <ul className="flex-1 overflow-y-auto py-2 flex flex-col gap-4">
              {navbarData.map((item) => {
                const isActive = pathname.startsWith(item.href);
                return (
                  <li
                    key={item.id}
                    className={`w-full rounded-[1.25rem] space-x-3 px-4 py-3 text-left ${
                      isActive
                        ? "text-white bg-accent-100"
                        : "hover:text-accent-100"
                    }`}
                  >
                    {/* <Link
                      href={item.href}
                      onClick={close}
                      className="flex gap-4 items-center"
                    >
                      <item.icon size={20} />
                      <span>{item.name}</span>
                    </Link> */}
                  </li>
                );
              })}
            </ul>
            {/* Bottom Navigation */}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
