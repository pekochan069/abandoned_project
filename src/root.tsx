// @refresh reload
import "./root.css";
import { onMount, Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import { trpc, client, queryClient } from "~/utils/trpc";
import "~/root.css";
import "@unocss/reset/tailwind.css";
import "uno.css";

export default function Root() {
  return (
    <Html lang="en" class="hidden">
      <Head>
        <Title>Create JD App</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class="font-plex bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-300">
        <trpc.Provider client={client} queryClient={queryClient}>
          <Suspense>
            <ErrorBoundary>
              <Routes>
                <FileRoutes />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </trpc.Provider>
        <Scripts />
      </Body>
    </Html>
  );
}
