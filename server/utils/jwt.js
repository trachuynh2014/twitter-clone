import jwt from "jsonwebtoken";
const { jwtAccessSecret, jwtRefreshSecret } = useRuntimeConfig();

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user.id }, jwtAccessSecret, {
    expiresIn: "10m", // 10 minutes
  });
};
const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user.id }, jwtRefreshSecret, {
    expiresIn: "4h", // 4 hours
  });
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  return { accessToken, refreshToken };
};

export const sendRefreshToken = (event, refreshToken) => {
  setCookie(event.res, "refresh_token", refreshToken, {
    httpOnly: true,
    sameSite: true,
  });
};
