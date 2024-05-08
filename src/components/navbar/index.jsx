import { Links } from "./Links";

export const Navbar = () => {
  return (
    <nav className="flex">
      <div className="mr-auto font-bold text-xl">Logo</div>
      <Links />
    </nav>
  );
};
