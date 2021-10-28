import { AuthProvider } from "ra-core";

export interface Options {
  obtainAuthTokenUrl?: string;
}

function jwtTokenAuthProvider(options: Options = {}): AuthProvider {
  const opts = {
    obtainAuthTokenUrl: "/api/token/",
    ...options,
  };
  return {
    login: async ({ username, password }) => {
      const request = new Request(opts.obtainAuthTokenUrl, {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: new Headers({ "Content-Type": "application/json" }),
      });
      return fetch(request)
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("Credenziali errate");
        })
        .then((user) => localStorage.setItem("user", JSON.stringify(user)));
    },
    logout: () => {
      localStorage.removeItem("user");
      return Promise.resolve();
    },
    checkAuth: () =>
      localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
    checkError: (error) => {
      const status = error.status;
      if (status === 401 || status === 403) {
        localStorage.removeItem("user");
        return Promise.reject();
      }
      return Promise.resolve();
    },
    getPermissions: () => {
      const user = getUser();
      return user && user.permissions
        ? Promise.resolve(user.permissions)
        : Promise.reject();
    },
  };
}

export function getAccessToken() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user).access;
  return undefined;
}
export function getRefreshToken() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user).refresh;
  return undefined;
}
export function getUser() {
  const user = localStorage.getItem("user");
  if (user) return JSON.parse(user);
  return undefined;
}

export default jwtTokenAuthProvider;
