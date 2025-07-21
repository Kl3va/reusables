const Navbar = () => {
  // const pathname = usePathname();
  const pathname = "/"; // Replace with actual path logic
  const navbarData = [
    { id: 1, name: "Home", href: "/", icon: () => <span>Home Icon</span> }, // Replace with actual icon component
    {
      id: 2,
      name: "Profile",
      href: "/profile",
      icon: () => <span>Home Icon</span>,
    },
  ];

  return (
    <nav className="w-full text-fg-600">
      <ul className="flex gap-2.5 flex-col">
        {navbarData.map((data) => {
          const isActive = pathname === data.href;
          return (
            <li
              key={data.id}
              className={`px-6.5 py-4.5 rounded-[1.25rem] ${
                isActive ? "text-white bg-accent-100" : "hover:text-accent-100"
              }`}
            >
              {/* Replace with actual Link */}
              {/* <Link href={data.href} className="flex gap-4 items-center">
                <data.icon size={20} />
                <span className="text-lg">{data.name}</span>
              </Link> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
