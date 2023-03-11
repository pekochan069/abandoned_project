import { z } from "zod";
import { procedure, router } from "../utils";

const parseInput = (input: String) => {
  
};

export default router({
  search: procedure.input(z.string()).query(({ ctx, input }) => {
    const parsed = parseInput(input);

    return ctx.prisma.songName.findFirst({
      where: {
        name: input,
      },
    });
  }),
});
