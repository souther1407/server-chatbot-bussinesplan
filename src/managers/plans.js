import { database } from "../db/firestore.js";
import { PLANS, USERS } from "../utils/constants/collections.js";
export const createPlan = async ({ user, msg, steps }) => {
  const currentUser = await database.collection(USERS).doc(user.id).get();
  if (!currentUser.exists) {
    await currentUser.ref.create({ id: user.id, email: user.email });
  }
  const newPlanRef = currentUser.ref.collection(PLANS).doc();
  await newPlanRef.set({ id: newPlanRef.id, userMsg: msg, steps });
  return (await newPlanRef.get()).data();
};
