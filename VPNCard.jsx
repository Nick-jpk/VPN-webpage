import React from 'react';

const VPNCard = ({ name, country, downloadUrl }) => (
  <div className="bg-gray-700 p-4 rounded-lg text-white">
    <h2 className="font-bold">{name}</h2>
    <p>{country}</p>
    <a href={downloadUrl} className="text-blue-400 mt-2 inline-block" download>
      Download
    </a>
  </div>
);

export default VPNCard;
