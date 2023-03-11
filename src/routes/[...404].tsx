import type { VoidComponent } from "solid-js";
import { Head, Title } from "solid-start";
import { A } from "@solidjs/router";

import NavBar from "~/components/NavBar";

const Page: VoidComponent = () => {
  return (
    <>
      <Head>
        <Title>404 Error</Title>
      </Head>
      <NavBar />
      <main>
        <div class="xl:mt-30 mt-20 grid content-center text-center">
          <div>
            <h1 class="text-6xl font-thin xl:text-8xl">Error 404</h1>
            <p class="mt-2 text-xl text-gray-400 dark:text-gray-500 xl:text-2xl">
              Page not found
            </p>
            <div class="mt-10">
              <A
                href="/"
                class="text-2xl text-sky-500 hover:underline dark:text-sky-400 xl:text-3xl"
              >
                Home
              </A>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
