import { createEffect, createSignal, on, onMount, Show } from "solid-js";
import { ToggleButton } from "@kobalte/core";
import { Presence } from "@motionone/solid";

import SunIcon from "~/components/SunIcon";
import MoonIcon from "~/components/MoonIcon";

type ThemeType = "dark" | "light";

const ThemeSwitcher = () => {
  const [theme, setTheme] = createSignal<ThemeType>();

  onMount(() => {
    let initialTheme = localStorage.getItem("theme") as ThemeType;

    if (!initialTheme) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        initialTheme = "dark";
      } else {
        initialTheme = "light";
      }
    }

    localStorage.setItem("theme", initialTheme);
    setTheme(initialTheme);
    document.documentElement.classList.remove("hidden");
  });

  createEffect(() => {
    if (theme() === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  const toggleTheme = () => {
    if (theme() === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <ToggleButton.Root onPressedChange={toggleTheme}>
      <div class="relative h-8 w-8 text-3xl md:h-9 md:w-9 md:text-4xl text-slate-600 hover:text-orange-400 dark:text-gray-500 dark:hover:text-gray-300 transition-colors">
        <Presence>
          <Show when={theme() === "dark"} fallback={<SunIcon />}>
            <MoonIcon />
          </Show>
        </Presence>
      </div>
    </ToggleButton.Root>
  );
};

export default ThemeSwitcher;
