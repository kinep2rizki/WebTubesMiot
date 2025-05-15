import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useEffect, useState } from "react";
import { updateServoState, listenToServoState } from "../components/firebaseService";
import '../styling/dashboard.css';

function Dashboard() {
  const [servoState, setServoState] = useState("unknown");

  useEffect(() => {
    listenToServoState(setServoState);
  }, []);

  const handleUpdate = (state) => {
    updateServoState(state);
  };

  return (
    <div className="dashboard-wrapper">
      <h1>Locker Dashboard</h1>
      <p className="servo-status">Status Servo: <strong>{servoState}</strong></p>
      <div>
        <button onClick={() => handleUpdate("locked")} className="button-on">ON</button>
        <button onClick={() => handleUpdate("unlocked")} className="button-off">OFF</button>
      </div>
      <button onClick={() => signOut(auth)} className="logout-button">Logout</button>
    </div>
  );
}

export default Dashboard;
