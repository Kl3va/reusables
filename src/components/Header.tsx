const Header = () => {
  const headerData = {
    logo: "/logo.svg",
    menu: () => <span>Menu Icon</span>, // Replace with actual icon component
    iconBell: () => <span>Bell Icon</span>, // Replace with actual icon component
  };

  return (
    <header className="fixed w-full h-15 flex items-center z-200 top-0 pl-[2.81rem] pr-5 bg-white border-b-[0.25px] border-b-fg-600 max-xl:pl-5">
      <div className="flex w-full justify-between">
        <div className="flex items-center">
          <div className="hidden max-xl:block">
            <div
              className="w-6 h-6 text-fg-500"
              // Replace with actual icon component
              onClick={() => console.log("Menu clicked")} // Replace with actual function
            ></div>
          </div>
          {/* {Replace Link for nextjs} */}
          <a href="/" className="block max-xl:hidden">
            <div className="w-[7.5rem] h-[2.09rem]">
              {/* replace with Image for nextjs */}
              <img
                src={headerData.logo}
                alt="logo"
                className="w-full h-full"
                width={120}
                height={33.39}
                // priority  //add when using nextjs
              />
            </div>
          </a>
        </div>
        <div className="flex items-center">
          <span>
            <headerData.iconBell
            // onClick={() => console.log("Bell clicked")} // Replace with actual function
            // cursor="pointer"
            />
          </span>
          <div className="w-8 h-8 ml-4 rounded-full">
            {/* <Image
              src={null}
              alt="logo"
              className="w-full h-full rounded-full"
              width={32}
              height={32}
              priority
            /> */}
          </div>
          <span className="ml-2.5 text-fg-500 capitalize font-semibold">
            Mike
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
