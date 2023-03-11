import { A } from "@solidjs/router";
import {
  createEffect,
  createSignal,
  Match,
  on,
  onMount,
  Show,
  Switch,
} from "solid-js";
import type { Component } from "solid-js";

type VideoListItemProps = {
  videoId: String;
  songName: String;
  vtuber: String;
};

// const checkThumbnail = async (vidoeId: String) => {
//   const thumbnailURL = `https://img.youtube.com/vi/${vidoeId}/0.jpg`;

//   return fetch(thumbnailURL, {
//     credentials: "omit",
//     method: "GET",
//     mode: "no-cors",
//     redirect: "follow",
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error();
//       }

//       return thumbnailURL;
//     })
//     .catch(() => {
//       return "error";
//     });
// };

const VideoListItem: Component<VideoListItemProps> = (props) => {
  const [imageFound, setImageFound] = createSignal<Boolean>();

  let imgRef: HTMLImageElement;

  createEffect(() => {
    imgRef.onload = () => {
      if (imgRef.width !== 120) {
        setImageFound(true);
      } else {
        setImageFound(false);
      }
    };
  });

  createEffect(
    on(
      imageFound,
      (v) => {
        if (v) {
          imgRef.classList.remove("opacity-0");
        } else {
          imgRef.classList.add("hidden", "invisible");
        }
      },
      { defer: true }
    )
  );

  return (
    <li class="w-full">
      <a
        href={`https://www.youtube.com/v/${props.videoId}`}
        target="_blank"
        rel="noopener noreferrer"
        class="w-full"
      >
        <div class="group">
          <div class="transition-color grid aspect-video w-full place-content-center rounded-xl bg-gray-200 transition group-hover:ring-2 group-hover:ring-gray-600 group-active:ring-2 group-active:ring-gray-500 dark:bg-gray-700 dark:group-hover:ring-gray-400 dark:group-active:ring-gray-300">
            <img
              src={`https://img.youtube.com/vi/${props.videoId}/maxresdefault.jpg`}
              alt="youtube video thumbnail"
              ref={imgRef!}
              loading="lazy"
              class="aspect-video rounded-xl object-cover opacity-0"
            />
            {!imageFound() && (
              <p class="text-xl font-bold tracking-wide">Image not found</p>
            )}
          </div>
          <h3 class="mt-2 text-lg tracking-wider">{`${props.songName}`}</h3>
        </div>
        <A
          href="/Hello"
          class="delay-8 m-0 text-sm text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
        >
          {`${props.vtuber}`}
        </A>
      </a>
    </li>
  );
};

export default VideoListItem;
