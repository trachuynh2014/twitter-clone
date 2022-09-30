import { createUser } from "~~/server/db/users";
import { userTransformer } from "~~/server/transformers/users";

export default defineEventHandler(async (event) => {
  const body = await useBody(event);

  const { username, email, password, repeatedPassword, name } = body;

  if (!username || !email || !password || !repeatedPassword || !name) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "invalid params" })
    );
  }

  if (password !== repeatedPassword) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Passwords do not match" })
    );
  }

  const userData = {
    username,
    email,
    password,
    name,
    profileImage: "https://picsum.photos/200/200",
  };

  const user = await createUser(userData);

  return {
    body: userTransformer(user),
  };
});
