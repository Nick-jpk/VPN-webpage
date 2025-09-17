import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const db = getFirestore();

const VPNList = () => {
  const [files, setFiles] = useState([]);

  const fetchFiles = async () => {
    const snapshot = await getDocs(collection(db, "vpnfiles"));
    setFiles(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "vpnfiles", id));
    fetchFiles();
  }

  useEffect(() => { fetchFiles(); }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Uploaded VPN Files</h2>
      {files.map(f => (
        <div key={f.id} className="flex justify-between mb-2 bg-gray-700 p-2 rounded text-white">
          <span>{f.name} - {f.country}</span>
          <button onClick={() => handleDelete(f.id)} className="bg-red-500 p-1 rounded">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default VPNList;
