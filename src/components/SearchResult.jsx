import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import client from '../contentfulClient';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/category.css';

const SearchResult = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const [totalEntries, setTotalEntries] = useState(0); 
  const postsPerPage = 5;
  const navigate = useNavigate();

  
  // Getting the search query
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  const cleanUpData = useCallback((rawData) => {
    const cleanData = rawData.map((data) => {
      const { sys, fields } = data;
      const { id } = sys;
      const videoTitle = fields.title;
      const tag = fields.tag;
      const image = fields.image?.fields?.file?.url || null; 
      const video = fields.video?.fields?.file?.url || null;

      return { id, videoTitle, tag, image, video };
    });

    setEntries(cleanData);
  }, []);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const skip = (currentPage - 1) * postsPerPage; // Calculate `skip` for pagination
    try {
      const response = await client.getEntries({
        content_type: 'exclusivefab',
        'fields.title[match]': query,
        limit: postsPerPage,
        skip: skip,
      });
      const responseData = response.items;
      const total = response.total; // Total number of entries in Contentful
      setTotalEntries(total);

      if (responseData) {
        cleanUpData(responseData);
      } else {
        setEntries([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [query, cleanUpData, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNext = () => {
    if (currentPage < Math.ceil(totalEntries / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  
  const handleReturnToHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  if (loading) {
    // Skeleton layout for loading
    return (
      <div className="skeleton-container">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="home-skeleton">
            <Skeleton className="thumbnail-skeleton" />
            <Skeleton className="text-skeleton" />
            <Skeleton className="tag-skeleton" />
          </div>
        ))}
      </div>
    );
  }

  if (!entries.length) return <div className="no-entry">
  <p className="no-entry-text">No Result found.</p>
  <button className="no-entry-Btn"onClick={handleReturnToHome}>Return to Home</button>
  </div>;

  return (
    <>
    
   <div className="container">
     <h3>Search Results for {query}</h3>
        {entries.map((item) => (
          <div key={item.id} className="item">
            <Link to={`/video/${item.id}`}>
              <img
                src={`https:${item.image}`}
                alt={item.videoTitle}
                className="thumbnail"
              />
              <h2 className="title">{item.videoTitle}</h2>
              <p className="tag">{item.tag}</p>
            </Link>
          </div>
        ))}
   </div>
   <div className="pagination">
        <button onClick={handlePrevious} disabled={currentPage === 1}>
          <p>{"<<<"}</p>
        </button>
        <span>
          Page {currentPage} of {Math.ceil(totalEntries / postsPerPage)}
        </span>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(totalEntries / postsPerPage)}
        >
          <p>{">>>"}</p>
        </button>
      </div>
   </>
  );
};

export default SearchResult;