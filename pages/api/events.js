import { test2 } from "@/components/firebase/firebase";
let events = [];
export default function handler(req, res) {
  // events = test2();
  // console.log(events);
  let toto = "toto";
  res.status(200).json(toto);
}
