// CampusMap.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CampusMap = ({ points }) => {
  const [activePoint, setActivePoint] = useState(null);

  return (
    <div className="relative">
      {/* Base map image with interactive points */}
      <div className="relative w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
        <img 
          src="/path/to/campus-map.jpg" 
          alt="Campus Map" 
          className="w-full h-full object-cover"
        />
        
        {/* Interactive points */}
        {points.map(point => (
          <button
            key={point.id}
            className={`absolute w-6 h-6 rounded-full ${activePoint === point.id ? 'bg-indigo-700' : 'bg-indigo-500'} hover:bg-indigo-700 transition`}
            style={{ left: `${point.coordinates.x}%`, top: `${point.coordinates.y}%` }}
            onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
            aria-label={point.title}
          />
        ))}
      </div>
      
      {/* Info panel for active point */}
      {activePoint && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">
            {points.find(p => p.id === activePoint).title}
          </h3>
          <p className="mt-2 text-gray-600">
            {points.find(p => p.id === activePoint).description}
          </p>
          
          <h4 className="mt-4 font-semibold">Featured Students:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
            {points.find(p => p.id === activePoint).students.map(student => (
              <div key={student.id} className="flex items-center space-x-3">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <Link 
                    to={`/students/${student.id}`} 
                    className="font-medium text-indigo-600 hover:underline"
                  >
                    {student.name}
                  </Link>
                  <p className="text-sm text-gray-500">{student.achievement}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CampusMap;