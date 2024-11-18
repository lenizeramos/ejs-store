import bcrypt from "bcrypt";

export interface AuthUser {
  name: string;
  email: string;
  password: string;
}

let authUsers: AuthUser[] = [/* {
  name: "admin",
  email: "admin@admin.com",
  password: bcrypt.hashSync("admiN*&", 10)
} */];

export const setAuthUser = (user: AuthUser) => {
  const userExists = authUsers.find((u) => u.email === user.email);
  if (userExists) {
    throw new Error("User already exists");
  }
  authUsers.push(user);
};

export const getAuthUsers = () => {
  return authUsers;
};

export const getAuthUserByEmail = (email: string) => {
  return authUsers.find((u) => u.email === email);
};

