import React, { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

const UserInteractionsTable: React.FC = () => {
  const [interactions, setInteractions] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "userInteractions"), orderBy("timestamp", "desc")); // Sort by timestamp (newest first)
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setInteractions(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>User Interaction Data</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Group</th>
            <th>Decision</th>
            <th>Interaction Time (ms)</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {interactions.map((entry) => (
            <tr key={entry.id}>
              <td>{entry.userId}</td>
              <td>{entry.group}</td>
              <td>{entry.decision}</td>
              <td>{entry.interactionTime}</td>
              <td>{new Date(entry.timestamp.toDate()).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserInteractionsTable;
