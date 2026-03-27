import React from 'react'

export default function Videos() {
  return (
     <div className="w-full flex flex-col">
            <div className="relative">
                <a href="video.html">
                    <img
                        // src={video.thumbnail}
                        className="w-full h-auto"
                        alt="Some video title"
                    />
                </a>
                <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">12:10</p>
            </div>

            <div className="flex flex-row mt-2 gap-2">
                <a href="#" className="shrink-0">
                    <img
                        src="https://avatars.githubusercontent.com/u/73503432?v=4"
                        className="rounded-full h-6 w-6"
                        alt="Learn with Sumit"
                    />
                </a>

                <div clas="flex flex-col">
                  
                    {/* <Link href={`/video/${id}`}> <p className=" text-sm font-semibold"> {video.title}  Video title</p> </Link> */}
                    <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">{video.author}</a>
                    <p className="text-gray-400 text-xs mt-1">
                        {/* {video.views} . {video.date} */}
                    </p>
                </div>
            </div>
        </div>
  )
}
