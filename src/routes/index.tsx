import { type VoidComponent } from "solid-js";
import { Title } from "solid-start";

import VideoLists from "~/components/VideoLists";
import NavBar from "~/components/NavBar";

const Home: VoidComponent = () => {
  const videoLists = [
    "4h9UPiHwRuM",
    "VFky5fTD9fs",
    "aJoQGdkxy3o",
    "e0Kis9xSZtw",
    "gp5Sy3AQZY0",
    "05B3WdVzJ0w",
    "EB3YAvJYFxE",
    "WH297WZaU7M",
    "0Lbkf03EyZg",
    // "a9D9EMz_cko가111",
  ];

  const videoList = [];

  return (
    <>
      <Title>Song Finder</Title>
      <NavBar />
      <main class="container mx-auto mt-4 md:mt-8">
        <VideoLists class="w-full" videoLists={videoLists} />
      </main>
    </>
  );
};

export default Home;
