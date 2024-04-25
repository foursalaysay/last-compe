import NextAuth from "next-auth/next"
import bcrypt from "bcryptjs"
import { db } from "@/lib/db"
import { RegisterType } from "@/app/(auth)/signup/_types"

type loginProps = {
  email?: string | undefined
  password?: string | undefined
}

export const getUserByEmail = async (email: string) => {
  try {
    const user = db.user.findUnique({ where: { email } })
    return user
  } catch (error) {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = db.user.findUnique({ where: { id } })
    return user
  } catch (error) {
    return null
  }
}

// UPDATED BY JOHN KYLE
// UPDATING USER WITH THEIR ID

export const updateUserById = async (
  id: string,
  newData: Partial<RegisterType>,
) => {
  try {
    // Fetch the existing user record by ID
    const existingUser = await db.user.findUnique({ where: { id } })

    if (!existingUser) {
      throw new Error("User not found") // Throw an error if user not found
    }

    // Merge the existing user data with the new data
    const updatedUser = { ...existingUser, ...newData }

    // Update the user record in the database
    const updatedRecord = await db.user.update({
      where: { id },
      data: updatedUser,
    })

    return updatedRecord // Return the updated user record
  } catch (error) {
    console.error("Error updating user:", error)
    return null // Return null if there's an error
  }
}

// export const login = async (credentials: loginProps) => {
//   const { password = "", email = "" } = credentials;
//   try {
//     await clientPromise;

//     const user = await User.findOne({ email });
//     // const user = true;

//     if (user && (await bcrypt.compare(password, user.password))) {
//       const { password, ...userWithoutPass } = user._doc;
//       const accessToken = signJwtAccessToken(userWithoutPass);

//       const result = {
//         ...userWithoutPass,
//         accessToken,
//       };
//       return result;
//     } else {
//       throw new Error("Wrong credentials!");
//     }
//   } catch (err) {
//     console.log(err);
//     throw new Error((err as Error).message);
//   }
// };

// export const checkEmailExists = async (email: string): Promise<boolean> => {
//   const user = await User.findOne({ email });
//   return !!user;
// };

// // Create a new user
// export const createUser = async (userData: any) => {
//   try {
//     const user = new User(userData);
//     const newUser = await user.save();
//     return newUser;
//   } catch (error) {
//     throw error;
//   }
// };
