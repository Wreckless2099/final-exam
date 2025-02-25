import { z } from "zod";

export const formSchema = z.object({
    name: z.string().min(2,{message: "A Message should contain 2 characters"})
  })