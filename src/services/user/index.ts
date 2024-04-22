import { db } from "@/lib/db"

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
