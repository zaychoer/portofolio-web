import React from 'react';
import Image from 'next/image';

const BackgroundPhotoProfile = () => (
  <div>
    <Image
      src="https://d1n6fa18ox4kyq.cloudfront.net/Zayyana_Choir.webp"
      alt="User profile picture"
      width="100%"
      height="100%"
      layout="responsive"
      objectFit="contain"
      objectPosition="right"
    />
  </div>
);

export default BackgroundPhotoProfile;
