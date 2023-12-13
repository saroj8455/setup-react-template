/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import axios from 'axios';

export default function Welcome() {
  // make an api call to jsonplaceholder
  useEffect(() => {
    // Create a function to API call
    const fetchTodo = async () => {
      try {
        const resp = await axios.get(
          'https://jsonplaceholder.typicode.com/todos/1'
        );
        console.log(resp.data);
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    };
    // Call the function
    fetchTodo();
  }, []);

  return (
    <section className='welcome'>
      <div className='container'>
        <h1 className='display-1 '>Hello World App</h1>
        <button className='btn btn-primary '>
          <i className='bi bi-amazon'></i> Click Me
        </button>
      </div>
    </section>
  );
}
