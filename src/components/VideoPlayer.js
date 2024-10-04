import React from 'react';

function VideoPlayer() {
  return (
    <div>
      <h2>Video Player (Lazy Loaded)</h2>
      <video controls>
        <source src="720p.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlayer;
