import Logo from "@/components/shared/logo";
import SearchInput from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6">
        <Logo />
        <h3 className="text-xl">Live Docs</h3>
      </div>
      <SearchInput />
      <div />
    </nav>
  );
};
