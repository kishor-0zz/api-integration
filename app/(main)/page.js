import React from 'react'

export default function page() {
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
                {/* {videoData.videos.map((video) => (
                    <div key={video.id} video={video}>
                        <Videos video={video} id={video.id} />
                    </div>
                ))} */}
                {/* <!-- error section<div className="col-span-12">some error happened</div> --> */}
            </div>
        </div>
        {/* <!-- Video Grid --> */}
      

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
