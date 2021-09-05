import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const db = getFirestore();

const test = async (user, infoEvent) => {
  try {
    await App.addDoc(App.collection(db, "events"), {
      id: user.uid,
      email: user.email,
      displayName: user.displayName,
      start: infoEvent.start,
      title: infoEvent.title,
      allDay: infoEvent.allDay,
      display: infoEvent.display,
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const test2 = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const events = [];
      const querySnapshot = await getDocs(collection(db, "events"));
      querySnapshot.forEach((doc) => {
        events.push(doc.data());
      });

      resolve(events);
    } catch (e) {
      reject(e);
    }
  });
};

export { test, test2 };
