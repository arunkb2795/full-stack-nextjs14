"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

export const Links = () => {
  const pathName = usePathname();
  console.log({ pathName });
  return (
    <div className="flex">
      {links.map((link) => (
        <div
          className={link.path === pathName ? "text-blue-700" : "text-white "}
        >
          <div className="py-2 px-3">
            <Link key={link.title} href={link.path}>
              {link.title}
            </Link>
          </div>
        </div>
      ))}
      <button>Logout</button>
    </div>
  );
};
