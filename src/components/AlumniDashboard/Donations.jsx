import React, { useState } from 'react';
import axios from 'axios';
import { API_URL } from '../../data/api';
import { toast, ToastContainer } from "react-toastify";

const Donations = () => {
  const [institution, setInstitution] = useState('');
  const [amount, setAmount] = useState('');
  const [transactionId, setTransactionId] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const alumniId = localStorage.getItem("alumniId");
  const adminId = localStorage.getItem("adminId");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Basic validation
    if (!amount || !transactionId) {
      setError('Please fill out all required fields.');
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/donation/donations/create-donation/${alumniId}/${adminId}`, {
        alumniId,
        adminId,
        amount,
        transactionId
      });
      toast.success('Donation successful!');

      //setSuccess('Donation successful!');
      setInstitution('');
      setAmount('');
      setTransactionId('');
    } catch (err) {
      setError('Error processing donation. Please try again.');
    }
  };

  return (
    <div className=" flex flex-col justify-center m-auto ">
      <ToastContainer />
      <div className='flex flex-col justify-center items-center bg-white py-6 px-10 rounded-lg'>
      <h2 className="text-2xl font-bold mb-4">Make a Donation</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}
      <form onSubmit={handleSubmit}>

        <div className="mb-8">
          <label htmlFor="amount" className="block font-medium text-gray-700 text-lg">Donation Amount</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="my-3 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter donation amount"
            required
          />
        </div>

        <div className="mb-8">
          <label htmlFor="transactionId" className="block font-medium text-gray-700 text-lg">Transaction ID</label>
          <input
            type="text"
            id="transactionId"
            value={transactionId}
            onChange={(e) => setTransactionId(e.target.value)}
            className="my-3 block w-full px-4 py-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 "
            placeholder="Enter transaction ID"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:ring-indigo-500 focus:border-indigo-500">
          Submit Donation
        </button>
      </form>
      </div>
    </div>
  );
};

export default Donations;
