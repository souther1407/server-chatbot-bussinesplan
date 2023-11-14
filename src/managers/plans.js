import { database } from "../db/firestore.js";
import { PLANS, USERS } from "../utils/constants/collections.js";
import { Timestamp } from "firebase-admin/firestore";
const getUserorCreate = async (user) => {
  const currentUser = await database.collection(USERS).doc(user.id).get();
  if (!currentUser.exists) {
    await currentUser.ref.create({
      id: user.id,
      email: user.email,
      created: Timestamp.now().seconds,
    });
  }
  return currentUser.ref;
};

export const createPlan = async ({ user, msg, steps }) => {
  const currentUser = await getUserorCreate(user);
  const newPlanRef = currentUser.collection(PLANS).doc();
  await newPlanRef.set({
    id: newPlanRef.id,
    userMsg: msg,
    steps,
    created: Timestamp.now().seconds,
  });
  return (await newPlanRef.get()).data();
};

export const getAll = async (user) => {
  const currentUser = await getUserorCreate(user);
  const results = await currentUser
    .collection(PLANS)
    .select("created", "id", "userMsg")
    .orderBy("created")
    .get();
  return results.docs.map((d) => d.data());
};
