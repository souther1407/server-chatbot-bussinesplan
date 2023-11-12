export const health = (req, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
};
