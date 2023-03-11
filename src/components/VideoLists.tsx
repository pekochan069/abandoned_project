import { Component, For } from "solid-js";

import VideoListItem from "~/components/VideoListItem";

type VideoListsProps = {
  class?: String;
  videoLists: Array<String>;
};

const VideoLists: Component<VideoListsProps> = (props) => {
  return (
    <div class="">
      <ul
        class={`${props.class} xl-grid-cols-4 3xl:grid-cols-6 mx-auto grid grid-cols-1 place-items-center gap-y-6 px-2 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 2xl:grid-cols-5`}
      >
        <For each={props.videoLists}>
          {(video, i) => (
            <VideoListItem
              videoId={video}
              vtuber="하카세 후유키"
              songName="커버 곡 제목"
            />
          )}
        </For>
      </ul>
    </div>
  );
};

export default VideoLists;
