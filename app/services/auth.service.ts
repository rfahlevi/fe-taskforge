import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const signUpSchema = z
  .object({
    fullname: z.string().nonempty("Fullname is required"),
    email: z.string().email("Invalid email address"),
    departement: z.string().nonempty("Departement is required"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters long")
      .nonempty("Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export { signInSchema, signUpSchema };
