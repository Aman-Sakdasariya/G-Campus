// StudentCarousel.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const StudentCarousel = ({ students }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <Carousel showArrows={true} showThumbs={false} infiniteLoop autoPlay>
        {students.map((student) => (
          <div key={student.id} className="p-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-4 md:mb-0">
                <img 
                  src={student.image} 
                  alt={student.name} 
                  className="w-48 h-48 object-cover rounded-full mx-auto"
                />
              </div>
              <div className="md:w-2/3 md:pl-8">
                <h3 className="text-2xl font-bold text-gray-800">{student.name}</h3>
                <p className="text-indigo-600 font-medium">{student.course} Student</p>
                <p className="mt-2 text-gray-600">{student.bio}</p>
                <p className="mt-2 font-semibold">Achievement: {student.achievement}</p>
                <Link 
                  to={`/students/${student.id}`} 
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  View Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default StudentCarousel;