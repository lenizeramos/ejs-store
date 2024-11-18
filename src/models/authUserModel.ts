export interface AuthUser {
  name: string;
  email: string;
  password: string;
}

let authUsers: AuthUser[] = [];

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

