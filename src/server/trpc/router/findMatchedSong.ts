import { z } from "zod";
import { procedure, router } from "../utils";

export default router({
  findMatchedSong: procedure.input(z.string()).query(({ ctx, input }) => {
    if (input === "") {
      return null;
    }
    const query = ctx.prisma.originalSong.findMany({
      where: {
        names: {
          some: {
            name: {
              contains: input,
            },
          },
        },
      },
      include: {
        names: true,
      },
    });

    return query;
  }),
});
