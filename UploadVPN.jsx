import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const storage = getStorage();
const db = getFirestore();

const UploadVPN = () => {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');

  const handleUpload = async () => {
    if (!file) return alert("Select a file");
    const fileRef = ref(storage, `vpn/${file.name}`);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    await addDoc(collection(db, "vpnfiles"), {
      name,
      country,
      downloadUrl: url
    });
    alert("Uploaded successfully");
    setFile(null);
    setName('');
    setCountry('');
  }

  return (
    <div className="p-6">
      <input type="text" placeholder="VPN Name" className="p-2 mb-2" value={name} onChange={e => setName(e.target.value)} />
      <input type="text" placeholder="Country" className="p-2 mb-2" value={country} onChange={e => setCountry(e.target.value)} />
      <input type="file" className="mb-2" onChange={e => setFile(e.target.files[0])} />
      <button className="bg-blue-500 p-2 rounded" onClick={handleUpload}>Upload VPN</button>
    </div>
  );
}

export default UploadVPN;
