"use server";

import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { username } = body;

    const [profile, repo, followers, following] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`),

      fetch(`https://api.github.com/users/${username}/repos`),

      fetch(`https://api.github.com/users/${username}/followers`),

      fetch(`https://api.github.com/users/${username}/following`),
    ]);

    const [profileBody, repoBody, followersBody, followingBody] =
      await Promise.all([
        profile.json(),
        repo.json(),
        followers.json(),
        following.json(),
      ]);

    if (!profile.ok || !repo.ok || !followers.ok || !following.ok) {
      return NextResponse.json(
        { message: "Profile Not Found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      profile: profileBody,
      repos: repoBody,
      followers: followersBody,
      following: followingBody,
    });
  } catch (e) {
    console.log(e);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
