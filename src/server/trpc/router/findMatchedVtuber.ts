import { z } from "zod";
import { procedure, router } from "../utils";

export default router({
  findMatchedVtuber: procedure.input(z.string()).query(({ ctx, input }) => {
    return ctx.prisma.songName.findMany({
      where: {
        name: input,
      },
    });
  }),
});
