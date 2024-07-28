import React, { useState } from 'react';
import './SearchFilterSection.css';

const SearchFilterSection = ({ onSearch, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilter, setSelectedFilter] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        onSearch(e.target.value);
    };

    const handleFilter = (e) => {
        setSelectedFilter(e.target.value);
        onFilter(e.target.value);
    };

    return (
        <div className="search-filter-section">
            <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={handleSearch}
                className="search-bar"
            />
            <select value={selectedFilter} onChange={handleFilter} className="filter-select">
                <option value="">All Subjects</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Economics">Economics</option>
                <option value="Social Science">Social Science</option>
                <option value="Accounting">Social Science</option>
            </select>
        </div>
    );
}

export default SearchFilterSection;
