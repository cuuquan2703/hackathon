export const AuthReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USER":
      return {
        ...state,
        username: payload.username,
        isAuthenticated: payload.isAuthenticated,
      };
    default:
      break;
  }
};
