"use client";
import React, { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function handleFetch() {
      try {
        setLoading(true);
        const res = await fetch(url);
        const body = await res.json();
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        setData(body);
      } catch (e) {
        console.log(e);
        setError(e);
      } finally {
        setLoading(false);
      }
    }

    handleFetch()
  }, [url]);
  return { data, loading, error };
}
