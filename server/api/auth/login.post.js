import { getUserByUsername } from "~~/server/db/users";
import bcrypt from "bcrypt";
import { generateTokens, sendRefreshToken } from "~~/server/utils/jwt";
import { userTransformer } from "~~/server/transformers/users";
import { createRefreshToken } from "~~/server/db/refreshToken";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, password } = body;
  if (!username || !password) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "invalid params" })
    );
  }

  // is the user registered? (sign up)

  const user = await getUserByUsername(username);

  if (!user) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // compare passwords
  const isPasswordmatched = await bcrypt.compare(password, user.password);

  if (!isPasswordmatched) {
    return sendError(
      event,
      createError({
        statusCode: 400,
        statusMessage: "Username or password is invalid",
      })
    );
  }

  // generate tokens
  // access token
  // refresh token

  const { accessToken, refreshToken } = generateTokens(user);

  // save it inside db
  await createRefreshToken({ token: refreshToken, userId: user.id });

  // add http only cookie
  sendRefreshToken(event, refreshToken);
  // return access_token, exclude refresh_token but only send it in https only
  return { access_token: accessToken, user: userTransformer(user) };
});
