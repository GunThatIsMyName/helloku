import React, {useEffect} from 'react';
import {useNavigate, useParams} from 'react-router';
import {Link} from 'react-router-dom';
import {API_END_POINT} from '../utils/helper';
import Loader from './Loader';
import styled from 'styled-components';
import {useFetchData} from '../hooks/useFetch';
import Error from './Error';

const BlogDetail = () => {
  const {id} = useParams();
  const {loading, error, blogs} = useFetchData(`${API_END_POINT}?id=${id}`);
  const navigate = useNavigate();
  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }
  if (blogs) {
    console.log(blogs);
  }

  const handleClick = async () => {
    fetch(`${API_END_POINT}/${id}`, {
      method: 'DELETE',
    }).then(() => {
      navigate('/');
    });
  };
  return (
    <Wrapper>
      <Link className="btn" to="/">
        back to home
      </Link>
      {blogs &&
        blogs.map((item) => {
          const {author, title, body, id} = item;
          return (
            <article key={id}>
              <h2>{title}</h2>
              <h3>written by {author}</h3>
              <p>{body}</p>
            </article>
          );
        })}
      <button onClick={handleClick}>delete</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  max-width: 800px;
  .btn {
    margin: 13rem;
    padding: 0.5rem 1rem;
    background: gold;
    border-radius: 5px;
  }
  p {
    margin: 2rem 0;
  }
  article {
    margin: 2rem 0;
  }
  h2 {
    margin: 0.3rem 0;
  }
`;

export default BlogDetail;
