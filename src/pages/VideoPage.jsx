import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import client from '../contentfulClient';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Ad1 from '../Ads/Ad1'
import Ad2 from '../Ads/Ad2'
import Ad3 from '../Ads/Ad3'
import Ad4 from '../Ads/Ad4'
import NativeAd from '../Ads/NativeAd'
import EvadavAds from '../Ads/EvadavAds'



const VideoPage = () => {
  const { slug } = useParams();
  const location = useLocation();
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [entriesLoading, setEntriesLoading] = useState(true); // Separate loading state for related posts
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);
  const [totalEntries, setTotalEntries] = useState(0);
  const postsPerPage = 6;

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

    useEffect(() => {
    const fetchVideo = async () => {
      setLoading(true);
      try {
        const videoId = location.state?.id; // Retrieve the ID from state
        if (videoId) {
          const response = await client.getEntry(videoId);
          setVideoData(response);
        } else {
          console.error('No ID provided.');
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [location.state]);
  
  
  useEffect(() => {
    const fetchData = async () => {
      if (!videoData?.fields?.tag) return;

      setEntriesLoading(true);
      try {
        const res = await client.getEntries({
          'fields.tag': videoData.fields.tag,
          content_type: 'exclusivefab',
          limit: postsPerPage,
        });
        const resData = res.items;
        const total = res.total;
        setTotalEntries(total);

        if (resData) {
          cleanUpData(resData);
        } else {
          setEntries([]);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setEntriesLoading(false);
      }
    };

    fetchData();
  }, [videoData, cleanUpData]);

  const handleReload = () => {
    window.location.reload();
  };

  if (error) return <p>Error: {error.message}</p>;

  const videoTitle = videoData?.fields?.title || (
    <div className="skeleton">
      <Skeleton className="title-skeleton" />
      <Skeleton className="video-skeleton" />
    </div>
  );
  const videoUrl = videoData?.fields?.video?.fields?.file?.url;

  return (
    <>
    <div className="ads">
       <div className="ad1"><Ad1 /></div>
       <div className="ad2"><Ad2 /></div>
    </div>
     <div className="video-page">
       <div className="flex-1">
         <h2 className="video-page-title">{videoTitle}</h2>
        {videoUrl && <video className="video" controls src={`https:${videoUrl}`} />}
        <div className="ad3"><Ad3 /></div>
         <div>
          <h2 className="related-h2">Related Videos</h2>
          <div className="related-container">
            {entriesLoading ? (
              // Skeleton loaders for related posts
              Array.from({ length: postsPerPage }).map((_, index) => (
                <div key={index} className="related-item skeleton-item">
                  <Skeleton className="related-thumbnail-skeleton" height={120} width={200} />
                  <Skeleton className="related-title-skeleton" width="80%" />
                </div>
              ))
            ) : (
              entries.map((item) => (
                <div key={item.id} className="related-item">
                  <Link to={`/video/${item.id}`} onClick={handleReload}>
                    <img
                      src={`https:${item.image}`}
                      alt={item.videoTitle}
                      className="related-thumbnail"
                    />
                    <h2 className="related-title">{item.videoTitle}</h2>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="ad3"><Ad4 /></div>
        <div className="ad3">
        </div>
      </div>
      <div className="flex-2">
         <div className="ad3">
            <NativeAd />
         </div>
         <div className="ad3">
         </div>
         <div className="ad3">
            <div data-banner-id="6036358"></div>
         </div>
      </div>
    </div>
    </>
  );
};

export default VideoPage;
