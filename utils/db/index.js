import { getFirestore, addDoc, collection } from "firebase/firestore";

const db = getFirestore();

export const AddEvent = async (user, infoEvent) => {
  try {
    await addDoc(collection(db, "events"), {
      // id: user.uid,
      // email: user.email,
      // displayName: user.displayName,
      start: infoEvent.dateStr,
      title: infoEvent.title,
      allDay: infoEvent.allDay,
      display: infoEvent.display,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
