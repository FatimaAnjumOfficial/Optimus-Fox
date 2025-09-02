import React, { useState, useEffect } from "react";
import axios from "axios";
import "./StylishButton.css";
import NftCard from "../components/marketPlace/NftCard";
import "./Preview.css";

function Button() {
  const [showModal, setShowModal] = useState(false);
  const [newNft, setNewNft] = useState({
    image: "",
    title: "",
    rank: "",
    author: "",
    price_eth: "",
    price_usd: "",
  });
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Fetch NFTs on component mount
  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/nfts");
        setNfts(response.data);
      } catch (error) {
        setError("Failed to fetch NFTs.");
      }
    };

    fetchNfts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNft((prevNft) => ({
      ...prevNft,
      [name]: value,
    }));
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        await axios.post("http://localhost:4000/nfts", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("Image File uploaded successfully");

        const response = await axios.get("http://localhost:4000/nfts");
        setNfts(response.data);
      } catch (error) {
        setError("Error uploading image file.");
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setNewNft((prevNft) => ({
          ...prevNft,
          image: reader.result,
        }));
        setImagePreview(reader.result); // Set the preview URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editMode) {
        await axios.put(`http://localhost:4000/nfts/${editId}`, newNft);
      } else {
        await axios.post("http://localhost:4000/nfts", newNft);
      }

      setNewNft({
        image: "",
        title: "",
        rank: "",
        author: "",
        price_eth: "",
        price_usd: "",
      });
      setShowModal(false);
      setEditMode(false);
      setEditId("");

      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to process request.");
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/nfts/${editId}`);
      setNewNft(response.data);
      setEditMode(true);
      setShowModal(true);
    } catch (error) {
      setError("Failed to fetch NFT for editing.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/nfts/${editId}`);
      setEditMode(false);
      setEditId("");
      setShowModal(false);

      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to delete NFT.");
    }
  };

  const handleNftClick = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/nfts/${id}`);
      setSelectedNft(response.data);
    } catch (error) {
      setError("Failed to fetch NFT details.");
    }
  };

  return (
    <>
      <div>
        <div style={{ display: "flex", gap: "7px", marginLeft: "175px" }}>
          <button onClick={() => setShowModal(true)} className="stylish-button">
            Add NFT
          </button>
          <div style={{ display: "flex", padding: "10px" }}>
            <input
              type="text"
              placeholder="NFT ID for Edit/Delete"
              value={editId}
              style={{
                color: "black",
                padding: "5px 20px",
                fontSize: "10px",
              }}
              onChange={(e) => setEditId(e.target.value)}
            />
          </div>
          <button onClick={handleEdit} className="stylish-button">
            Edit NFT
          </button>
          <button onClick={handleDelete} className="stylish-button">
            Delete NFT
          </button>
        </div>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>
                &times;
              </span>
              <h2>{editMode ? "Edit NFT" : "Add New NFT"}</h2>
              {error && <p className="error">{error}</p>}
              <form onSubmit={handleSubmit}>
                <label>
                  Image:
                  <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                {imagePreview && (
                  <div className="image-preview-container">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="image-preview"
                    />
                  </div>
                )}
                <label>
                  Title:
                  <input
                    type="text"
                    name="title"
                    value={newNft.title}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Rank:
                  <input
                    type="text"
                    name="rank"
                    value={newNft.rank}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Author:
                  <input
                    type="text"
                    name="author"
                    value={newNft.author}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Price (ETH):
                  <input
                    type="number"
                    step="0.01"
                    name="price_eth"
                    value={newNft.price_eth}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <label>
                  Price (USD):
                  <input
                    type="number"
                    step="0.01"
                    name="price_usd"
                    value={newNft.price_usd}
                    onChange={handleInputChange}
                    required
                  />
                </label>
                <button type="submit" className="submit-button">
                  {editMode ? "Update" : "Submit"}
                </button>
              </form>
            </div>
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {nfts.length > 0 ? (
            nfts.map((nft) => (
              <div
                key={nft.id}
                onClick={() => handleNftClick(nft.id)}
                style={{ cursor: "pointer", margin: "10px" }}
              >
                <NftCard nft={nft} />
              </div>
            ))
          ) : (
            <p>No NFTs available.</p>
          )}
        </div>
        {selectedNft && (
          <div className="nft-preview">
            <h1 className="text-lg md:text-[35px] font-semibold text-center ">
              Preview
            </h1>
            <img
              src={selectedNft.image}
              alt={selectedNft.title}
              width={300}
              height={300}
            />
            <p>Title: {selectedNft.title}</p>
            <p>Rank: {selectedNft.rank}</p>
            <p>Author: {selectedNft.author}</p>
            <p>Price (ETH): {selectedNft.price_eth}</p>
            <p>Price (USD): {selectedNft.price_usd}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Button;
