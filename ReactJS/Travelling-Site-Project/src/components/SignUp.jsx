import { useState } from "react";
import axios from "axios";

function SignUp() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    c_password: "",
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
        await axios.post("http://localhost:3000/signup", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image File uploaded successfully");

        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
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
      await axios.post("http://localhost:3000/signup", formData);

      setFormData({
        name: "",
        username: "",
        email: "",
        password: "",
        c_password: "",
      });
      setShowModal(false);
    } catch (error) {
      setError("Failed to sign-up.");
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <button onClick={() => setShowModal(true)} className="stylish-button">
          Sign Up
        </button>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md relative">
            <button onClick={() => setShowModal(false)}>&times;</button>
            <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col">
                <label className="font-medium">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Username:</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Password:</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 text-base"
                />
              </div>
              <div className="flex flex-col">
                <label className="font-medium">Confirm Password:</label>
                <input
                  type="password"
                  name="c_password"
                  value={formData.c_password}
                  onChange={handleInputChange}
                  required
                  className="border border-gray-300 rounded-md p-2 text-base"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 stylish-button "
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

export default SignUp;
