import { useState } from "react";
import axios from "axios";
import "./StylishButton.css";

function Register() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    age: "",
    gender: "",
    address: "",
    country: "",
    city: "",
  });
  const [error, setError] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        await axios.post("http://localhost:3000/registration", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image File uploaded successfully");

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result); // Set the preview URL
        };
        reader.readAsDataURL(file);
      } catch (error) {
        setError("Error uploading image file.");
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/registration", formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: "",
        age: "",
        gender: "",
        address: "",
        country: "",
        city: "",
      });
      setShowModal(false);
    } catch (error) {
      setError("Failed to submit registration.");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button onClick={() => setShowModal(true)} className="stylish-button">
          Register
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full hover:bg-red-700"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              Registration
            </h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    First Name:
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    />
                  </label>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Last Name:
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    />
                  </label>
                </div>
              </div>
              <label className="block text-sm font-medium mb-1">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 w-full text-base"
                />
              </label>
              <div className="flex flex-wrap gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Phone No:
                    <input
                      type="text"
                      name="phoneNo"
                      value={formData.phoneNo}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    />
                  </label>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Age:
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    />
                  </label>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Gender:
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    >
                      <option value="" className="font-bold">
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    Country:
                    <select
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    >
                      <option value="" className="font-bold">
                        Select Country
                      </option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium mb-1">
                    City:
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="border border-gray-300 rounded-md p-2 w-full text-base"
                    >
                      <option value="" className="font-bold">
                        Select City
                      </option>
                      <option value="Lahore">Lahore</option>
                      <option value="Karachi">Karachi</option>
                      <option value="Other">Other</option>
                    </select>
                  </label>
                </div>
              </div>
              <label className="block text-sm font-medium mb-1">
                Address:
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 w-full text-base"
                />
              </label>
              {imagePreview && (
                <div className="mb-4">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-auto object-cover rounded-md"
                  />
                </div>
              )}
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 w-full stylish-button"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
