import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../data/api';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { author } = useParams();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('tags', tags);
    if (image) {
      formData.append('image', image);
    }

    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      };

      const response = await axios.post(
        `${API_URL}/post/create/${author}`,
        formData,
        config
      );

      setMessage('Post created successfully!');
      setLoading(false);

      // Reset form fields after successful submission
      setTitle('');
      setContent('');
      setTags('');
      setImage(null);
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error creating post');
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center my-4">
      <div className="w-1/3 bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="font-bold text-2xl mb-4">Create a New Post</h2>
        {message && (
          <p className={`text-sm mb-4 ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
            {message}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-4">
            <label className="text-lg font-medium mb-2 block">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="block w-full pl-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700"
            />
          </div>

          <div className="form-group mb-4">
            <label className="text-lg font-medium mb-2 block">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="block w-full pl-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700"
              rows="6"
            ></textarea>
          </div>

          <div className="form-group mb-4">
            <label className="text-lg font-medium mb-2 block">Tags (comma-separated)</label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="block w-full pl-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm text-gray-700"
            />
          </div>

          <div className="form-group mb-4">
            <label className="text-lg font-medium mb-2 block">Image</label>
            <input type="file" onChange={handleImageChange} className="block w-full py-2 text-sm" />
          </div>

          <button
            type="submit"
            className={`bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ${loading ? 'cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
