import { A } from "solid-start";
import ThemeSwitcher from "~/components/ThemeSwitcher";
import SearchBar from "~/components/SearchBar";

const NavBar = () => {
  return (
    <>
      <header class="md:h-18 container relative mx-auto flex h-14 items-center justify-between px-2">
        <nav class="md:w-50">
          <A href="/" class="font-leckerli text-3xl md:text-4xl">
            Song Finder
          </A>
        </nav>
        <SearchBar />
        <div class="md:w-50 flex justify-end items-center">
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default NavBar;
