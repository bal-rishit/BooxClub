import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cards from './Cards';

function Course() {
  const [list, setList] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/courses");
        setList(res.data); // Set courses from the server response
        setFilteredCourses(res.data); // Initially display all courses
      } catch (err) {
        console.error('Error fetching the courses:', err);
      }
    };
    getCourses();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'all') {
      setFilteredCourses(list);
    } else {
      const filtered = list.filter((course) => course.category === category);
      setFilteredCourses(filtered);
    }
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-blue-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <div className="mt-6 flex justify-center items-center">
            <button
              className={`mr-2 px-4 py-2 rounded-md ${
                selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleCategoryChange('all')}
            >
              All
            </button>
            <button
              className={`mr-2 px-4 py-2 rounded-md ${
                selectedCategory === 'category1' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleCategoryChange('category1')}
            >
              Beginner
            </button>
            <button
              className={`mr-2 px-4 py-2 rounded-md ${
                selectedCategory === 'category2' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleCategoryChange('category2')}
            >
              Intermediate
            </button>
            <button
              className={`px-4 py-2 rounded-md ${
                selectedCategory === 'category3' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
              onClick={() => handleCategoryChange('category3')}
            >
              Advanced
            </button>
          </div>
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {filteredCourses.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
