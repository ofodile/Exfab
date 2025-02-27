import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import client from '../contentfulClient';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../css/category.css';
import Ad1 from '../Ads/Ad1';
import Ad2 from '../Ads/Ad2';

const formatSlug = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalEntries, setTotalEntries] = useState(0);
  const postsPerPage = 36;

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
    const skip = (currentPage - 1) * postsPerPage;
    try {
      const response = await client.getEntries({
        content_type: 'exclusivefab',
        limit: postsPerPage,
        skip: skip,
      });
      const responseData = response.items;
      const total = response.total;
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
  }, [cleanUpData, currentPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleNext = () => {
    if (currentPage < Math.ceil(totalEntries / postsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  if (loading) {
    return (
      <div className="skeleton-container">
        {Array.from({ length: 36 }).map((_, index) => (
          <div key={index} className="home-skeleton">
            <Skeleton className="thumbnail-skeleton" />
            <Skeleton className="text-skeleton" />
            <Skeleton className="tag-skeleton" />
          </div>
        ))}
      </div>
    );
  }

  if (!entries.length) return <p>No entries found.</p>;

  return (
    <>
      <div className="ads">
        <div className="ad1"><Ad1 /></div>
        <div className="ad2"><Ad2 /></div>
      </div>
      <div className="container">
        {entries.map((item) => (
          <div key={item.id} className="item">
            <Link
              to={`/video/${formatSlug(item.videoTitle)}`}
              state={{ id: item.id }} // Pass the ID as state
            >
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
        <button onClick={handlePrevious} className="btn" disabled={currentPage === 1}>
          Back
        </button>
        <p className="page">Page {currentPage}</p>
        <button
          className="btn"
          onClick={handleNext}
          disabled={currentPage === Math.ceil(totalEntries / postsPerPage)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Home;
