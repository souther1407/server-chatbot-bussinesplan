import { auth } from "../../db/firestore.js";
export const isValidToken = async (req, res, next) => {
  if (!req.headers.authorization)
    return res.status(401).json({ error: "Not authorized" });
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodedData = await auth.verifyIdToken(token);
    req.user = {
      id: decodedData.uid,
      email: decodedData.email,
    };
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Not authorized" });
  }
};
