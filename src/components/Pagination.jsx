import React, { useState } from 'react';
import data from './data.json';
import './Pagination.css';

const ItemsPerPage = 10;

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * ItemsPerPage;
  const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='container'>
      <div className="wrapper">
        {currentItems.map((item, index) => (
          <div key={index} className='card'>
            <img src={item.image} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.start_production}</p>
            <p>{item.class}</p>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        {Array.from({ length: Math.ceil(data.length / ItemsPerPage) }, (_, i) => {
          if (i < 5) {
            return <button key={i} className="pagination-button" onClick={() => paginate(i + 1)}>{i + 1}</button>;
          }
          return null;
        })}
        {currentPage !== 1 && (
          <button className="pagination-button pagination-navigation-button" onClick={() => paginate(currentPage - 1)}>Oldingi</button>
        )}
        {currentPage !== Math.ceil(data.length / ItemsPerPage) && (
          <button className="pagination-button pagination-navigation-button" onClick={() => paginate(currentPage + 1)}>Keyingi</button>
        )}
      </div>
    </div>
  );
};

export default Pagination;
