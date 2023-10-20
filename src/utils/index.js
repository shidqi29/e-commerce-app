import jwtDecode from "jwt-decode";

export const formattedPrice = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const getUsername = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
