import { TextField, DropdownMenu } from "@kobalte/core";
import { createEffect, createSignal, onMount } from "solid-js";
import { createStore } from "solid-js/store";
import { trpc } from "~/utils/trpc";

const SearchBar = () => {
  const [searchString, setSearchString] = createSignal("");
  const terms = () => searchString().trim().split(/\s+/);
  const [previousTerms, setPreviousSearchTerms] = createSignal<Array<String>>(
    []
  );
  const [currentSearchTerm, setCurrentSearchTerm] = createSignal("");

  let inputRef: HTMLInputElement;

  createEffect(() => {
    if (terms().length !== previousTerms().length) {
      console.log(terms());
    }
  });

  // trpc.findMatchedSong.useQuery(() => currentSearchTerm())

  return (
    <>
      <form
        action="/search"
        method="get"
        role="search"
        class="md:w-md md:top-none md:inset-none absolute inset-0 top-2 mx-auto w-[97%] md:relative"
      >
        <div class="border-1 relative flex items-center rounded-xl border-gray-300/75 ring-black/5">
          <TextField.Root
            value={searchString()}
            onValueChange={setSearchString}
            name="q"
            isRequired={true}
            class="w-full"
          >
            <TextField.Label class="hidden">Search</TextField.Label>
            <div class="flex items-center gap-3 px-3">
              <div class="i-fa-solid:search text-xl text-gray-500"></div>
              <TextField.Input
                class="text-md h-10 w-full border-0 bg-transparent text-gray-800 placeholder-gray-400 outline-none"
                ref={inputRef!}
                placeholder="Search..."
              />
            </div>
          </TextField.Root>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
