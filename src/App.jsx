import { useState } from 'react';
import data from './data';
import { nanoid } from 'nanoid';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    setText(data.slice(0, amount));
  };
  // console.log(nanoid());
  return (
    <section className='section-center'>
      <h4>Tired of lorem Ipsum?</h4>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs</label>
        <input
          type='number'
          name='amount'
          id='amount'
          min='1'
          step='1'
          max='8'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item) => {
          return <p key={nanoid()}>{item}</p>;
          console.log(nanoid());
        })}
      </article>
    </section>
  );
}

export default App;
