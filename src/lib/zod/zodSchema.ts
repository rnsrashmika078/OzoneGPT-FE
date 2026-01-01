import z from "zod";

export const signInSchema = z.object({
    email: z.string().email(),
    password: z
        .string()
        .min(10, "Password must be at least 10 characters long"),
});
export const signUpSchema = z
    .object({
        name: z.string().min(6, "Name must be at least 10 characters long"),
        email: z.string().email(),
        password: z
            .string()
            .min(10, "Password must be at least 10 characters long"),
        confirmPassword: z
            .string()
            .min(10, "Confirm Password must be at least 10 characters long"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Password and confirm password must match!",
        path: ["confirmPassword"],
    });
