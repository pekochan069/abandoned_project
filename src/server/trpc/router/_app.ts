import { t } from "../utils";
import searchRouter from "./search";
import findMatchedVtuberRouter from "./findMatchedVtuber";
import findMatchedSongRouter from "./findMatchedSong";

export const appRouter = t.mergeRouters(
  searchRouter,
  findMatchedSongRouter,
  findMatchedVtuberRouter
);

export type IAppRouter = typeof appRouter;
