import { getDatabase, ref, set, push, onValue } from "firebase/database";
import { auth } from "../firebase";

// Menyimpan state servo & waktu
export const updateServoState = async (state) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;

  const db = getDatabase();
  const now = new Date().toISOString();

  await set(ref(db, `servoState/${uid}/state`), state);

  const historyRef = ref(db, `servoState/${uid}/history`);
  const newLog = push(historyRef);
  await set(newLog, { action: state, time: now });
};

// Mendengarkan perubahan state secara realtime
export const listenToServoState = (callback) => {
  const uid = auth.currentUser?.uid;
  if (!uid) return;

  const db = getDatabase();
  const stateRef = ref(db, `servoState/${uid}/state`);

  onValue(stateRef, (snapshot) => {
    callback(snapshot.val());
  });
};
