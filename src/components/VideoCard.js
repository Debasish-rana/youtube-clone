import React from 'react'

const VideoCard = ({videoData}) => {
   //const { snippet } = videoData
   //console.log(videoData);
   
  return (
    <div className='px-8 p-4 w-[200px] md:w-[420px]'>
      <img className='rounded-2xl w-[420px]' src={videoData?.snippet.thumbnails.medium.url} alt="" srcset="" />
       <h1 className='font-bold pt-2 text-[10px] md:text-base'>{videoData?.snippet?.title}</h1>
       <h1 className='text-[10px] md:text-base'>{videoData?.snippet?.channelTitle}</h1>
       <h1 className='text-[10px] md:text-base'>Views - { videoData?.statistics?.viewCount } <span>{videoData.contentDetails.dimension}</span></h1>
    </div>
  )
}

export default VideoCard
