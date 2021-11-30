import {useState} from 'react';
import BlogList from './BlogList';
import Error from './components/Error';
import Loader from './components/Loader';
import {useGlobalContext} from './contexts/AppContext';
import {useFetchData} from './hooks/useFetch';
import {API_END_POINT} from './utils/helper';

const Home = () => {
  const {blogs, setBlogs, loading, error} = useFetchData(API_END_POINT);
  const [name, setName] = useState('mario');

  if (blogs) {
    console.log(blogs, 'blogsssss');
  }
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  const handleDelete = (id) => {
    const newBlogs = blogs && blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  return (
    <div className="content">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName('luigi')}>change name</button>
    </div>
  );
};

export default Home;
