import {useEffect, useState} from 'react';

export const useFetchData = (url) => {
  const [blogs, setBlogs] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async () => {
    setLoading(true);
    setError(false);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        setError(true);
        throw new Error(`not matched our ${url} URL`);
      }
      const data = await response.json();
      if (data) {
        setBlogs(data);
      }
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {blogs, setBlogs, loading, error};
};
