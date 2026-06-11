import React from 'react'

const Player = () => {
  return (
    <div className="bg-black w-full h-22 fixed flex flex-row bottom-0 p-2">
      <div className=' w-full h-full flex flex-row  items-center pl-2'>
        <img src="https://d1csarkz8obe9u.cloudfront.net/themedlandingpages/tlp_hero_album-cover-art-73ab5b3d9b81f442cb2288630ab63acf.jpg?ts%20=%201754037710" alt="" className='h-14 w-14 mr-1.5'/>
        <span className='pl-1.5 pr-1.5 flex flex-col w-40'>
          <a href="" className=' font-normal hover:underline text-white'>Song Name</a>
          <a href="" className=' font-light text-sm hover:underline hover:text-amber-50 text-gray-300' >Singer</a>
        </span>
        <div>
          
        </div>
      </div>
      <div className='bg-blue-500 w-full'>hi</div>
      <div className='bg-blue-600 w-full'>hi</div>
    </div>
  )
}

export default Player
