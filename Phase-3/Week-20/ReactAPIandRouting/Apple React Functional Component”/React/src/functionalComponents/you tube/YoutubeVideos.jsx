import "./youtube.css"

import React, { useState, useEffect } from "react";

const YoutubeVideos = () => {
    
  const [youTubeVideos, setVideos] = useState([]);
  useEffect(()=> {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key= AIzaSyC5OYDzJx2g1CXantpEPJLs_rKjspoD3z0&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
    .then((response)=> response.json())
    .then((data)=>{
      const youTubeVideosData = data.items;
      setVideos(youTubeVideosData);
    })

  },[])
  return (
    <div>
      <div className="allVideosWrapper">
        <div className="container">
          <div className="row h-100 align-items-center justify-content-center text-center">
            <div className="col-12">
              <div className="title-wraper bold video-title-wrapper">
                Latest Videos
              </div>
            </div>
             {youTubeVideos?.map((singleVideo) => {
              let vidId = singleVideo.id.videoId;
              let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
              let videoWrapper = (
                <div key={vidId } className="col-sm-12 col-md-4">
                  <div className="singleVideoWrapper">
                    <div className="videoThumbnail">
                      <a href={vidLink} target="_blank">
                        <img src={singleVideo.snippet.thumbnails.high.url} />
                      </a>
                    </div>
                    <div className="videoInfoWrapper">
                      <div className="videoTitle">
                        <a href={vidLink} target="_blank">
                          {singleVideo.snippet.title}
                        </a>
                      </div>
                      <div className="videoDesc">
                        {singleVideo.snippet.description}
                      </div>
                    </div>
                  </div>
                </div>
              );
              return videoWrapper;
            })} 

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVideos;
