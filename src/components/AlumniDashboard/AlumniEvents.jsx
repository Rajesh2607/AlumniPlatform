import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../data/api';

const AlumniEvents = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    eventDate: '',
    location: '',
    mode: '',
    audience: '',
  });

  const [image, setImage] = useState(null);
  const [message, setMessage] = useState('');
  const alumniId = localStorage.getItem("alumniId");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.eventDate || !formData.location || !formData.mode || !formData.audience) {
      setMessage('Please fill out all fields.');
      return;
    }

    try {
      const eventFormData = new FormData();
      eventFormData.append('title', formData.title);
      eventFormData.append('description', formData.description);
      eventFormData.append('eventDate', formData.eventDate);
      eventFormData.append('location', formData.location);
      eventFormData.append('mode', formData.mode);
      eventFormData.append('audience', formData.audience);
      if (image) {
        eventFormData.append('image', image);
      }

      const response = await axios.post(`${API_URL}/event/create-event/${alumniId}`, eventFormData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setMessage('Event created successfully!');
      setFormData({
        title: '',
        description: '',
        eventDate: '',
        location: '',
        mode: '',
        audience: '',
      });
      setImage(null);
    } catch (error) {
      setMessage('Error creating event: ' + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-lg p-8 mt-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Alumni Event</h2>

      {message && (
        <p className={`text-center mb-6 ${message.includes('Error') ? 'text-red-500' : 'text-green-500'} text-lg`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Event Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
            placeholder="Enter event title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Event Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
            placeholder="Enter event description"
            rows="4"
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              placeholder="Enter location"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Mode</label>
            <select
              name="mode"
              value={formData.mode}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              required
            >
              <option value="">Select Mode</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">Audience</label>
            <select
              name="audience"
              value={formData.audience}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              required
            >
              <option value="">Select Audience</option>
              <option value="Alumni">Alumni</option>
              <option value="Students">Students</option>
              <option value="Public">Public</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Event Image</label>
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-32 bg-indigo-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-indigo-500 transition duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Create Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default AlumniEvents;
