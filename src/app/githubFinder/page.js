"use client";

import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function GithubFinder() {
  const [searchText, setSearchText] = useState("");
  const [profile, setProfile] = useState(null);
  const [repo, setRepo] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  async function getProfile() {
    try {
      setProfile(null);
      setRepo(null);
      setFollowers([]);
      setFollowing([]);
      setError(false);
      setLoading(true);

      // disable empty search
      if (!searchText.trim()) {
        return;
      }

      const res = await fetch("/api/githubfinder", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: searchText,
        }),
      });

      const data = await res.json();

      console.log(data);

      // if backend returns error
      if (!res.ok) {
        setError(true);
        return;
      }

      setProfile(data.profile);
      setRepo(data.repos);
      setFollowers(data.followers);
      setFollowing(data.following);
    } catch (e) {
      console.log(e);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-100 via-blue-100 to-indigo-100 px-6 py-20">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          GitHub Finder
        </h1>

        <p className="text-gray-600 text-lg mt-5">
          Search and explore GitHub developer profiles
        </p>

        {/* Search Box */}
        <div className="mt-12 backdrop-blur-2xl bg-white/40 border border-white/30 shadow-2xl rounded-3xl p-5 flex flex-col md:flex-row gap-4">
          <input
            value={searchText}
            type="text"
            placeholder="Enter GitHub username..."
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") getProfile();
            }}
            className="flex-1 bg-white/50 border border-white/40 rounded-2xl px-6 py-4 outline-none text-lg text-gray-800 placeholder:text-gray-500 focus:ring-4 focus:ring-blue-300"
          />

          <button
            onClick={getProfile}
            className="bg-linear-to-r from-blue-600 to-indigo-600 hover:scale-105 transition-all duration-300 text-white font-bold px-8 py-4 rounded-2xl shadow-xl"
          >
            Search
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-6 bg-red-100 border border-red-300 text-red-700 px-5 py-4 rounded-2xl text-lg font-medium">
            Profile Not Found
          </div>
        )}
      </div>

      {/* Skeleton Loading */}
      {loading && (
        <div className="max-w-5xl mx-auto mt-16 backdrop-blur-2xl bg-white/40 border border-white/30 rounded-[2rem] shadow-2xl p-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <Skeleton circle height={160} width={160} />

            <div className="flex-1 w-full">
              <Skeleton height={50} width={300} />

              <div className="mt-4">
                <Skeleton height={25} width={180} />
              </div>

              <div className="mt-6">
                <Skeleton count={3} />
              </div>

              <div className="mt-8">
                <Skeleton height={50} width={180} borderRadius={20} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white/40 rounded-3xl p-6">
                <Skeleton height={40} />

                <div className="mt-4">
                  <Skeleton height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Profile Card */}
      {profile && (
        <div className="max-w-5xl mx-auto mt-16 backdrop-blur-2xl bg-white/40 border border-white/30 rounded-[2rem] shadow-2xl overflow-hidden">
          {/* Top */}
          <div className="p-10 flex flex-col md:flex-row gap-8 items-center border-b border-white/20">
            <img
              src={profile.avatar_url}
              alt="avatar"
              className="w-40 h-40 rounded-full border-4 border-white shadow-2xl"
            />

            <div className="text-center md:text-left">
              <h2 className="text-5xl font-black text-gray-900">
                {profile.name || "No Name"}
              </h2>

              <p className="text-2xl text-blue-600 mt-2">@{profile.login}</p>

              <p className="text-gray-700 text-lg mt-5 max-w-2xl">
                {profile.bio || "No bio available"}
              </p>

              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-7 py-3 rounded-2xl font-bold hover:scale-105 transition"
              >
                Visit GitHub
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8">
            <div className="bg-white/40 border border-white/30 rounded-3xl p-6 text-center">
              <h3 className="text-4xl font-black text-gray-900">
                {profile.followers}
              </h3>

              <p className="text-gray-600 mt-2">Followers</p>
            </div>

            <div className="bg-white/40 border border-white/30 rounded-3xl p-6 text-center">
              <h3 className="text-4xl font-black text-gray-900">
                {profile.following}
              </h3>

              <p className="text-gray-600 mt-2">Following</p>
            </div>

            <div className="bg-white/40 border border-white/30 rounded-3xl p-6 text-center">
              <h3 className="text-4xl font-black text-gray-900">
                {profile.public_repos}
              </h3>

              <p className="text-gray-600 mt-2">Repositories</p>
            </div>

            <div className="bg-white/40 border border-white/30 rounded-3xl p-6 text-center">
              <h3 className="text-4xl font-black text-gray-900">
                {profile.public_gists}
              </h3>

              <p className="text-gray-600 mt-2">Gists</p>
            </div>
          </div>

          {/* Tabs */}
          <div className="px-8 pb-8">
            {/* Tab Buttons */}
            <div className="flex gap-4 flex-wrap mb-8">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === "overview"
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-white/40 text-gray-700 hover:bg-white/60"
                }`}
              >
                Overview
              </button>

              <button
                onClick={() => setActiveTab("repos")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === "repos"
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-white/40 text-gray-700 hover:bg-white/60"
                }`}
              >
                Repositories
              </button>

              <button
                onClick={() => setActiveTab("followers")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === "followers"
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-white/40 text-gray-700 hover:bg-white/60"
                }`}
              >
                Followers
              </button>

              <button
                onClick={() => setActiveTab("following")}
                className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === "following"
                    ? "bg-blue-600 text-white shadow-xl scale-105"
                    : "bg-white/40 text-gray-700 hover:bg-white/60"
                }`}
              >
                Following
              </button>
            </div>

            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Company</p>

                  <h4 className="text-xl font-bold text-gray-900">
                    {profile.company || "Not Available"}
                  </h4>
                </div>

                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Location</p>

                  <h4 className="text-xl font-bold text-gray-900">
                    {profile.location || "Not Available"}
                  </h4>
                </div>

                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Blog</p>

                  <h4 className="text-xl font-bold text-gray-900 break-all">
                    {profile.blog || "Not Available"}
                  </h4>
                </div>

                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Joined GitHub</p>

                  <h4 className="text-xl font-bold text-gray-900">
                    {profile.created_at
                      ? new Date(profile.created_at).toDateString()
                      : "Not Available"}
                  </h4>
                </div>

                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Last Updated</p>

                  <h4 className="text-xl font-bold text-gray-900">
                    {profile.updated_at
                      ? new Date(profile.updated_at).toDateString()
                      : "Not Available"}
                  </h4>
                </div>

                <div className="bg-white/40 border border-white/30 rounded-3xl p-6">
                  <p className="text-gray-500 mb-2">Twitter</p>

                  <h4 className="text-xl font-bold text-gray-900">
                    {profile.twitter_username || "Not Available"}
                  </h4>
                </div>
              </div>
            )}

            {/* REPOS */}
            {activeTab === "repos" && (
              <div className="grid gap-6">
                {repo?.length > 0 ? (
                  repo.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/40 border border-white/30 rounded-3xl p-6 hover:scale-[1.01] transition-all duration-300"
                    >
                      <div className="flex justify-between items-start gap-4 flex-wrap">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="text-gray-600 mt-3 max-w-3xl leading-relaxed">
                            {item.description || "No description available"}
                          </p>
                        </div>

                        <a
                          href={item.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-2xl font-semibold transition"
                        >
                          Visit Repo
                        </a>
                      </div>

                      <div className="flex gap-6 flex-wrap mt-6 text-gray-700 font-medium">
                        <div className="bg-white/50 px-4 py-2 rounded-xl">
                          ⭐ {item.stargazers_count} Stars
                        </div>

                        <div className="bg-white/50 px-4 py-2 rounded-xl">
                          🍴 {item.forks_count} Forks
                        </div>

                        <div className="bg-white/50 px-4 py-2 rounded-xl">
                          🖥 {item.language || "N/A"}
                        </div>

                        <div className="bg-white/50 px-4 py-2 rounded-xl">
                          👀 {item.watchers_count} Watchers
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-2xl font-bold text-gray-700 py-10">
                    No Repositories Found
                  </div>
                )}
              </div>
            )}

            {/* FOLLOWERS */}
            {activeTab === "followers" && (
              <div className="grid md:grid-cols-2 gap-6">
                {followers.length > 0 ? (
                  followers.map((user) => (
                    <div
                      key={user.id}
                      className="bg-white/40 border border-white/30 rounded-3xl p-6 flex items-center gap-5"
                    >
                      <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-20 h-20 rounded-full"
                      />

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {user.login}
                        </h3>

                        <a
                          href={user.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-2xl font-bold text-gray-700 py-10">
                    No Followers Found
                  </div>
                )}
              </div>
            )}

            {/* FOLLOWING */}
            {activeTab === "following" && (
              <div className="grid md:grid-cols-2 gap-6">
                {following.length > 0 ? (
                  following.map((user) => (
                    <div
                      key={user.id}
                      className="bg-white/40 border border-white/30 rounded-3xl p-6 flex items-center gap-5"
                    >
                      <img
                        src={user.avatar_url}
                        alt={user.login}
                        className="w-20 h-20 rounded-full"
                      />

                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {user.login}
                        </h3>

                        <a
                          href={user.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 font-semibold"
                        >
                          View Profile
                        </a>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center text-2xl font-bold text-gray-700 py-10">
                    No Following Users Found
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
