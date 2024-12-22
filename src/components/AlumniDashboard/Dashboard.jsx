import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { alumni } from "../../constants/AdminDashboard";
import "./like.css";
import { network, networking, networking1 } from "../../constants/LandingPage";
import { API_URL } from "../../data/api";

const Dashboard = ({ author }) => {
  const [posts, setPosts] = useState([]);
  const alumniId = localStorage.getItem("alumniId");
  const [color,setColor] = useState("false");

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${API_URL}/post/all-posts`
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleLike = async (postId) => {
    // Implement the logic to like a post
    try {
      await axios.post(`${API_URL}/post/${postId}/like/${alumniId}`);
      // Update the state to reflect the new like count (fetch the posts again or update locally)
      const updatedPosts = posts.map((post) =>
        post._id === postId
          ? { ...post, likes: [...post.likes, "currentUserId"] }
          : post
      );
      setPosts(updatedPosts);
      setColor("checked");
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  return (
    <div className="w-full mx-4 gap-4 flex">
      <div className="my-4 w-1/2">
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="start sharing your idea"
            className="w-full border border-charcoal rounded-full font-OpenSans px-4 py-2"
          /> 
          <button className="bg-lavender rounded-xl w-40">
            <Link to={`/alumni/post/${author}`}>Create Post</Link>
          </button>
        </div>
        <div className="flex flex-col gap-6 p-4 my-2 ">
          {posts.map((post) => (
            <div key={post._id} className="bg-white shadow rounded-lg p-4">
              <div className="flex items-center mb-4">
                <img className="w-12 rounded-full" src={alumni} alt="author" />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold font-Montserrat capitalize">
                    {post.author.au_name}
                  </h3>
                  <p className="text-charcoal font-mono text-sm">
                    {new Date(post.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mb-2 font-OpenSans">{post.title}</h2>
              <p className="text-gray-700 mb-4 font-OpenSans">{post.content}</p>

              {post.image && (
                <img
                  src={`${API_URL}${post.image}`}
                  alt="Post"
                  className="w-full h-64 object-cover rounded-md mb-4"
                />
              )}

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <button
                    onClick={() => handleLike(post._id)}
                    className={`flex items-center text-gray-500 hover:text-blue-500 ${color?'bg-red':''}`}
                  >
                    <div class="con-like">
                      <input class="like" type="checkbox" title="like" />
                      <div class="checkmark">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class=""
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="filled"
                          viewBox="0 0 24 24"
                        >
                          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="100"
                          width="100"
                          class="celebrate"
                        >
                          <polygon class="poly" points="10,10 20,20"></polygon>
                          <polygon class="poly" points="10,50 20,50"></polygon>
                          <polygon class="poly" points="20,80 30,70"></polygon>
                          <polygon class="poly" points="90,10 80,20"></polygon>
                          <polygon class="poly" points="90,50 80,50"></polygon>
                          <polygon class="poly" points="80,80 70,70"></polygon>
                        </svg>
                      </div>
                    </div>
                    <span className="ml-2">{post.likes.length}</span>
                  </button>
                </div>
                <div>
                  <p className="text-gray-500">
                    {post.comments.length} comments
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex mt-6 my-2 gap-4">
                <input
                  type="text"
                  className="w-full border border-charcoal rounded-full py-2 px-6"
                  placeholder="Add a comment..."
                />
                <button className="bg-perivinkle rounded-xl w-40">
                  Comment
                </button>
              </div>

              {/* Comments Section */}
              {/* <div className="border-t pt-4">
                {post.comments.map((comment) => (
                  <div key={comment._id} className="mb-4">
                    <h4 className="text-sm font-semibold">
                      {comment.author.name}
                    </h4>
                    <p className="text-gray-600">{comment.content}</p>
                  </div>
                ))}
              </div> */}
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 my-4 flex flex-col gap-4">
        <div className="bg-gray-200 p-4 rounded-md w-full">
          <h2 className="font-semibold text-xl mb-4 font-Montserrat">
            Upcoming Events
          </h2>
          <div className="flex flex-col gap-2">
            <div className="bg-white text-black px-4 py-2 rounded-lg">
              <div className="flex justify-between font-OpenSans">
                <h2 className="font-medium text-lg font-Roboto">
                  Alumni meet (Reunion)
                </h2>
                <div className="flex gap-4">
                  <p>20-09-2024</p>
                  <p className="text-celectic-blue font-mono">Banglore</p>
                </div>
              </div>
              <div className="font-OpenSans my-2">
                <p>
                  where alumni gather to reconnect with old friends and
                  professors. They often include dinners, dances, and campus
                  tours.
                </p>
              </div>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded-lg">
              <div className="flex justify-between font-OpenSans">
                <h2 className="font-medium text-lg font-Roboto">
                  Fundraising Galas
                </h2>
                <div className="flex gap-4">
                  <p>25-09-2024</p>
                  <p className="text-celectic-blue font-mono">Hyderabad</p>
                </div>
              </div>
              <div className="font-OpenSans my-2">
                <p>
                  These events help raise funds for college projects,
                  scholarships, or other initiatives. They often feature
                  auctions, raffles, and entertainment.
                </p>
              </div>
            </div>
            <div className="bg-white text-black px-4 py-2 rounded-lg">
              <div className="flex justify-between font-OpenSans">
                <h2 className="font-medium text-lg font-Roboto">
                  Career Networking Events
                </h2>
                <div className="flex gap-4">
                  <p>29-09-2024</p>
                  <p className="text-celectic-blue font-mono">Hyderabad</p>
                </div>
              </div>
              <div className="font-OpenSans my-2">
                <p>
                  Alumni share their professional experiences and offer guidance
                  to current students. These events can include panel
                  discussions, workshops, and one-on-one mentoring sessions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 p-4 rounded-md w-full">
        <h2 className="font-semibold text-xl mb-4 font-Montserrat">
            Memories Of Your Batch
            <div className="grid grid-cols-2 gap-4 p-4">
              <img src={network} className="w-60 border rounded-lg" alt="" />
              <img src={network} className="w-60 border rounded-lg" alt="" />
              <img src={network} className="w-60 border rounded-lg" alt="" />
              <img src={network} className="w-60 border rounded-lg" alt="" />
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
