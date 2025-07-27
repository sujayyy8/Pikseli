import React from 'react'
import appwriteService from "../appwrite/config"
import {Link,NavLink} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="bg-gray-100 rounded-xl p-4 h-full flex flex-col">
          <div className=" group flex-shrink-0 mb-4 rounded-xl overflow-hidden">
            <img
              src={appwriteService.getFileView(featuredImage)}
              alt={title}
              className="transition-all duration-200 ease-in-out group-hover:scale-110 object-cover w-full h-40 "
            />
          </div>
        <h2 className="text-xl font-bold mt-auto">{title}</h2>
      </div>
    </Link>
  )
}


export default PostCard