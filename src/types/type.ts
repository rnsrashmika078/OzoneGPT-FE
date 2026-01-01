import { signInSchema, signUpSchema } from "@/lib/zod/zodSchema";
import z from "zod";

//store types
export type AuthUser = {
    id: string;
    name: string;
    email: string;
};

//application types

//zod schema types
export type signInSchemaType = z.infer<typeof signInSchema>;
export type signUpSchemaType = z.infer<typeof signUpSchema>;
