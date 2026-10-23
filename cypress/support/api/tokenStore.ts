let authorization: string | null = null;

export const tokenStore = {
  set(value: string) {
    authorization = value;
  },
  get() {
    return authorization;
  },
  clear() {
    authorization = null;
  },
};
