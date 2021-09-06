import Cors from "cors";
import initMiddleware from "@utils/cors";
import { getEvents } from "@utils/firebase";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  const events = await getEvents();
  res.status(200).json(events);
}
