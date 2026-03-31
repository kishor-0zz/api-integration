
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'






export default function Services({service}) {

  return (
      <div>
      {/* <!-- Tags --> */}
        <section>
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto"
            >
                <div
                    className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
                >
                    react
                </div>
                {/* <!-- selected --> */}
                <div
                    className="bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer"
                >
                    redux
                </div>
            </div>
        </section>
         <div className="pt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-5 lg:px-0">

                {
                    service?.videos.map((video)=>(
                        <div video={video} key={video.id}>
                            <div className="w-full flex flex-col">
                                    <div className="relative">
                                        <a href="video.html">
                                            <img
                                                src={video.thumbnail}
                                                className="w-full h-auto"
                                                alt="Some video title"
                                            />
                                        </a>
                                        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">12:10</p>
                                    </div>

                                    <div className="flex flex-row mt-2 gap-2">
                                        
                                        <Image src={video.avatar} width={100} height={80} alt='Services'  />
                                        <div clas="flex flex-col">
                                            <Link href={`/service/${video.id}`}> <p className=" text-sm font-semibold"> {video.title}  Video title</p> </Link>
                                            <a className="text-gray-400 text-xs mt-2 hover:text-gray-600" href="#">{video.author}</a>
                                            <p className="text-gray-400 text-xs mt-1">
                                                {video.views} . {video.date}
                                            </p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    ))
                }
                {/* <div className="col-span-12">some error happened</div> */}
            </div>
        </div>


        {/* <!-- pagination--> */}
        <section className="pt-12">
            <div
                className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 justify-end"
            >
                <div className="bg-blue-600 text-white px-4 py-1 rounded-full">
                    1
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    2
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    3
                </div>
                <div className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full">
                    4
                </div>
            </div>
        </section>
    </div>
  )
}
