import { Title, useParams } from "solid-start";
import { trpc } from "~/utils/trpc";

import NavBar from "~/components/NavBar";
import { createEffect } from "solid-js";

export default function Page() {
  const params = useParams();
  const search = trpc.search.useQuery(() => params.searchString);

  createEffect(() => {
    console.log(search.data);
  });

  return (
    <>
      <NavBar />
      <p>{params.searchString}</p>
      <p></p>
    </>
  );
}
