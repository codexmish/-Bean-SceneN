import Link from "next/link";

export const menuitem = [
  {
    menuName: "Home",
    navLink: "/",
  },
  {
    menuName: "Menu",
    navLink: "/",
  },
  {
    menuName: "About Us",
    navLink: "/",
  },
  {
    menuName: "contact Us",
    navLink: "/",
  },
];
const Navbar = () => {
  return (
    <>
      <nav className="py-5 absolute top-0 left-0 w-full z-50 hidden lg:block">
        <div className="main container flex items-center justify-between">
          {/* --------logo------- */}
          <div className="logo">
            <h1 className="text-4xl text-white font-normal font-clicker">
              Bean Scene
            </h1>
          </div>

          {/* -------menu---------- */}
          <div className="flex items-center gap-15">
            {menuitem.map((item, id) => (
              <Link
                className="text-sm text-white hover:text-theme font-medium font-playfair"
                key={id}
                href={item.navLink}
              >
                {item.menuName}
              </Link>
            ))}
          </div>

          {/* --------reg and login button---- */}
          <div className="buttons flex items-center gap-9">
            <div className="sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center bg-transparent hover:bg-theme text-sm text-white hover:text-text-black font-medium font-playfair rounded-full">
              Sing In
            </div>
            <div className="sin-button cursor-pointer w-[100px] h-[45px] flex items-center justify-center bg-theme hover:bg-transparent text-sm text-text-black hover:text-white font-medium font-playfair rounded-full">
              Sing Up
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
