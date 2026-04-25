import React, { useState } from "react";
import { dummyPostsData } from "../assets/vibes-assets/assets/assets";
import Loading from "../components/Loading";
import StoriesBar from "../components/StoriesBar";

import PostCard from "../components/PostCard";

const Feed = () => {
  const [feeds] = useState(dummyPostsData);
  // const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* {loading && <Loading />} */}
      {/* {!loading && ( */}
      <div className=" flex flex-col gap-6 p-5">
        <div>
          <StoriesBar />
        </div>
        <div className="space-y-6">
          {feeds.map((post) => (
            <div key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Feed;
