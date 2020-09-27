import { verify } from "jsonwebtoken";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import sqlite from "sqlite";
import { secret } from "../../../api/secret";

export const authenticated = (fn: NextApiHandler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  verify(req.headers.authorization!, secret, async (err, decoded) => {
    if (!err && decoded) {
      await fn(req, res);
    }
    res.status(500).json({ message: "Sorry, you are not authenticated!" });
  });
};

export default authenticated(async function getPeople(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const db = await sqlite.open("./mydb.sqlite");
  const people = await db.all("select id, email, name from person");

  res.json(people);
});
