import { getEvents } from "@utils/firebase";

export default async function handler(req, res) {
  const events = await getEvents();
  res.status(200).json(events);
}
