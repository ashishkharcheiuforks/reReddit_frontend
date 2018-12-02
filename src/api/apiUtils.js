export const tokenContextObj = (token) => ({
  headers:{
    Authorization: `Token ${token}`,
  },
});
