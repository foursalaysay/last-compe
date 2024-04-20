"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "./_types";
import { z } from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const siginInWithCredentials = async (
  data: z.infer<typeof LoginSchema>
) => {
  const validatetFields = LoginSchema.safeParse(data);

  if (!validatetFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password } = validatetFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    // @TODO: handle error
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials" };
        default:
          return { error: "Something went wrong" };
      }
    }

    throw error;
  }
};

// export const sigInWithGoogle = async () => await signIn("google");
