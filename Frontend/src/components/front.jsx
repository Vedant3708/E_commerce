import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const Front = () => {
  const { user } = useAuth(); // Get the logged-in user
  const [clothes, setClothes] = useState([]);
  const [newCloth, setNewCloth] = useState({ name: '', brand: '', size: '', price: '', image: '' });

  // Fetch clothes from the backend
  useEffect(() => {
    const fetchClothes = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/clothes');
        const data = await response.json();
        setClothes(data);
      } catch (error) {
        console.error('Error fetching clothes:', error);
      }
    };
    fetchClothes();
  }, []);

  // Handle input changes for new cloth form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCloth({ ...newCloth, [name]: value });
  };

  // Add a new cloth item (Admin only)
  const handleAddCloth = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/clothes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCloth),
      });
      if (response.ok) {
        const addedCloth = await response.json();
        setClothes([...clothes, addedCloth]);
        // Reset the newCloth state to clear the form after adding a cloth
        setNewCloth({ name: '', brand: '', size: '', price: '', image: '' });
      }
    } catch (error) {
      console.error('Error adding cloth:', error);
    }
  };

  // Delete a cloth item (Admin only)
  const handleDeleteCloth = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/clothes/${id}`, { method: 'DELETE' });
      setClothes(clothes.filter((cloth) => cloth._id !== id));
    } catch (error) {
      console.error('Error deleting cloth:', error);
    }
  };

  return (
    <main className="flex-grow p-6 bg-gray-100">
      <section className="text-center mb-8">
        <p className="text-lg mb-6">Check out our latest collection of jeans and shirts!</p>
      </section>

      {/* Display clothes */}
      <section className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-blue-700">Our Collection</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {clothes.map((cloth) => (
            <div key={cloth._id} className="service-card bg-white p-4 shadow-md rounded">
              <img src={cloth.image} alt={cloth.name} className="w-full h-40 object-cover mb-2 rounded" />
              <h4 className="text-md font-semibold mb-2">{cloth.name}</h4>
              <p>Brand: {cloth.brand}</p>
              <p>Size: {cloth.size}</p>
              <p>Price: ₹{cloth.price}</p>
              {user && user.role === 'admin' && (
                <button
                  onClick={() => handleDeleteCloth(cloth._id)}
                  className="mt-2 bg-red-600 text-white py-1 px-2 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Add new cloth form (Admin only) */}
      {user && user.role === 'admin' && (
        <section className="mt-8 bg-white p-6 shadow-lg rounded-lg max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-blue-800">Add New Cloth</h3>
          <form onSubmit={handleAddCloth}>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={newCloth.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Brand</label>
              <input
                type="text"
                name="brand"
                value={newCloth.brand}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Size</label>
              <input
                type="text"
                name="size"
                value={newCloth.size}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Price (₹)</label>
              <input
                type="number"
                name="price"
                value={newCloth.price}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-semibold mb-1">Image URL</label>
              <input
                type="text"
                name="image"
                value={newCloth.image}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
                required
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
              Add Cloth
            </button>
          </form>
        </section>
      )}
    </main>
  );
};

export default Front;
