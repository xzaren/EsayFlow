import React, { useEffect, useState } from "react";
import { FaPlus, FaCalendarAlt, FaClock } from "react-icons/fa";

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';  
import Tabs from "../components/Tabs";
import ClassHeader from "../components/ClassHeader";
import FilterActions from "../components/FilterActions";
import AssignmentItem from "../components/AssignmentItem";

function Classwork() {
  const [activeTab, setActiveTab] = useState("Classwork");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const assignments = [
    {
      title: "Lab 2: ปัญหา: การออกแบบซอฟต์แวร์ขั้นสูง",
      due: "Due Mar 1, 11:59 PM",
    },
    {
      title: "Lab 1: ปัญหา: การออกแบบซอฟต์แวร์",
      due: "Due Today",
    },
  ];

  const handleCreateClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddClick = () => {
    // Logic สำหรับการกดปุ่ม "+"
    console.log("Add button clicked");
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col p-20">
          {/* Tabs */}
          <Tabs activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Class Header */}
          <ClassHeader
            code="OOP-53"
            teacher="Chanapon Nitiwirot"
            schedule="9:00-12:00(อ.) - 13:00-15:00(พ.)"
            backgroundImage="https://img5.pic.in.th/file/secure-sv1/110290.jpg"
          />

          {/* Filter and Create Buttons */}
          <FilterActions onCreateClick={handleCreateClick} />

          {/* Assignments List */}
          <div className="space-y-4">
            {assignments.map((assignment, index) => (
              <AssignmentItem
                key={index}
                title={assignment.title}
                due={assignment.due}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            {/* Header */}
            <h2 className="text-2xl font-semibold mb-6">Import MY lab</h2>

            {/* Form */}
            <div className="space-y-4">
              {/* My lab Button */}
              <div>
                <label className="block text-gray-700 mb-1">My lab</label>
                <button
                  onClick={handleAddClick}
                  className="w-28 h-12 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100"
                >
                  <FaPlus className="w-3 h-3 text-gray-500" />
                </button>
              </div>

              {/* Assignment due date */}
              <div>
                <label className="block text-gray-700 mb-1">Assignment due date</label>
                <div className="space-y-2">
                  {/* Date Input */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Date"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaCalendarAlt className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  </div>

                  {/* Time Input */}
                  <label className="block text-gray-700 mb-1">Time</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="-- : --"
                      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <FaClock className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={closeModal}
                className="bg-red-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-red-600"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Cancel
              </button>
              <button
                onClick={closeModal}
                className="bg-blue-600 text-white px-4 py-2 rounded-full flex items-center hover:bg-blue-700"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
                Create
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Classwork;