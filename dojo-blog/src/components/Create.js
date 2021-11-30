import React, {useState} from 'react';
import {useNavigate} from 'react-router';
import styled from 'styled-components';
import {useGlobalContext} from '../contexts/AppContext';
import {API_END_POINT} from '../utils/helper';

const Create = () => {
  const newBlog = {title: '', body: '', author: ''};
  const [state, setState] = useState(newBlog);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  console.log(navigate, 'navigate');
  const handleValue = (e) => {
    const {value} = e.target;
    const {name} = e.target;
    setState((prev) => {
      return {...prev, [name]: value};
    });
  };

  const postBlog = async () => {
    setLoading(true);
    const rawResponse = await fetch(API_END_POINT, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(state),
    });
    const content = await rawResponse.json();
    setLoading(false);
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postBlog();
  };

  return (
    <Wrapper>
      <h1>new blog created</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title ">blog title : </label>
        <input
          type="text"
          id="title"
          name="title"
          value={state.title}
          onChange={handleValue}
          required
          placeholder="write your blog title"
        />
        <label htmlFor="body ">blog body : </label>
        <textarea
          type="text"
          id="body"
          name="body"
          value={state.body}
          onChange={handleValue}
          required
          placeholder="write your blog body"
        />
        <label htmlFor="author ">blog author : </label>
        <select
          value={state.author}
          onChange={handleValue}
          name="author"
          id="author"
          required
        >
          <option value="mario">mario</option>
          <option value="minji">minji</option>
        </select>
        <button disabled={loading}>{loading ? 'Adding...' : 'Add blog'}</button>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  text-align: center;
  margin: 2rem auto;
  form {
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    margin: 2rem auto;
    input,
    textarea,
    select {
      padding: 0.3rem;
      margin: 1rem auto;
    }
  }
`;
export default Create;
