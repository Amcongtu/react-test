import React from "react";
import "./SearchModal.scss";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`search-modal ${isOpen ? "open" : ""}`}>
      <div className="search-box">
        <h3>SEARCH</h3>
        <input type="text" placeholder="Search for a product..." />
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
    </div>
  );
};

export default SearchModal;
