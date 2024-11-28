import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import client from '../contentfulClient';
import Footer from '../Components/Footer.jsx';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import '../Css/Home.css';

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [entries2, setEntries2] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchEntries = useCallback(() => {
    client.getEntries({ content_type: 'pinPost' })
      .then((response) => {
        setEntries(response.items);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => console.log('Error fetching entries:', error));
  }, []);

  useEffect(() => {
    fetchEntries();
  }, [fetchEntries]);

  const fetchEntries2 = useCallback(() => {
    client.getEntries({ content_type: 'blogPost' })
      .then((response) => {
        setEntries2(response.items);
        setLoading(false); // Stop loading when data is fetched
      })
      .catch((error) => console.log('Error fetching entries:', error));
  }, []);

  useEffect(() => {
    fetchEntries2();
  }, [fetchEntries2]);

  const getEntryField = (entry, field) =>
    entry?.fields?.[field] || '';

  const getImageUrl = (entry) =>
    entry?.fields?.featuredImage?.fields?.file?.url ? `https:${entry.fields.featuredImage.fields.file.url}` : '';

  const getDate = (entry) => (entry?.fields?.date ? entry.fields.date.split('T')[0] : '');

  const pinPost = entries[0];
  const pinTitle = getEntryField(pinPost, 'title');
  const pinTag = getEntryField(pinPost, 'tag');
  const pinDate = getDate(pinPost);
  const pinImg = getImageUrl(pinPost);

  return (
    <div className="home-container">
      {/* Pin Post Section */}
      <h2 className="breaking-news">Breaking News</h2>
      <div className="pin-container">
        <Link 
          to={{
            pathname: "/post-details", // Define the route for the post details page
            state: {
              post: {
                title: pinTitle,
                featuredImage: pinImg
              }
            }
          }}
        >
          {loading ? <Skeleton  className="pin-skeleton" /> : <img src={pinImg} alt="Pin Post" className="pin-img" />}
          <p className="pin-tag">{pinTag}</p>
          <h3 className="pin-title">{pinTitle}</h3>
          <p className="pin-date">post on: {pinDate}</p>
        </Link>
      </div>
 
      {/* Other Posts Section */}
     <div className="pin-other-posts">
        {entries.slice(1, 4).map((entry, index) => (
          <Link to="/NewsPage" key={index} className="pin-post-container">
            {loading ? 
            <div>
              <Skeleton width={300} className="pin-other-skeleton" />
              <Skeleton width={100} className="pin-other-skeleton" />
              <Skeleton width={100} className="pin-other-skeleton" />
            </div> : 
            <img src={getImageUrl(entry)} alt="Post" className="pin-post-img" />}
            <div className="pin-post-text">
              {loading ? <Skeleton width={150} /> : <h3 className="pin-post-title">{getEntryField(entry, 'title')}</h3>}
              {loading ? <Skeleton width={100} /> : <p className="pin-post-date">{`${getEntryField(entry, 'tag')} | ${getDate(entry)}`}</p>}
            </div>
          </Link>
        ))}
      </div>

      {/* Latest News Section */}
      <h2 className="latest-news">Latest News</h2>
      <div className="latest-post-container">
        {entries2.map((entry, index) => (
          <Link to="/NewsPage" key={index} className="latest-post-link">
            {loading ? <Skeleton height={200} /> : <img src={getImageUrl(entry)} alt="Latest Post" className="latest-post-img" />}
            <div className="latest-post-text">
              {loading ? <Skeleton width={100} /> : <p className="latest-post-tag">{getEntryField(entry, 'tag')}</p>}
              {loading ? <Skeleton width={200} /> : <h3 className="latest-post-title">{getEntryField(entry, 'title')}</h3>}
              {loading ? <Skeleton width={100} /> : <p className="latest-post-date">{`${getEntryField(entry, 'tag')} | ${getDate(entry)}`}</p>}
            </div>
          </Link>
        ))}
      </div>

      {/* Load More Button */}
      <div className="load-btn-container">
        {loading ? <Skeleton width={100} height={40} /> : <button className="load-btn">Load More</button>}
      </div>

      <Footer />
    </div>
  );
};

export default Home;


return (
    <div className="container">
      {/* Map through entries to render links */}
      {entries.map((entry, index) => {
        const title = entry.fields?.title || 'No Title';
        const imageUrl = entry.fields?.image?.fields?.file?.url;
        const videoId = entry.fields?.video?.sys?.id; // Use Contentful's unique ID

        return (
          <div key={index} className="item">
            <Link to={`/video/${videoId}`}>
              {imageUrl && (
                <img
                  src={`https:${imageUrl}`}
                  alt={title}
                  className="thumbnail"
                />
              )}
              <h2 className="title">{title}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const SearchResult = () => {
  // const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  return(
    <>
      <h1>Search Result Page</h1>
      <h1>{query}</h1>
    </>
    )
}

export default SearchResult

