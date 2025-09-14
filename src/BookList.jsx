import { useState, useEffect } from 'react';

function BookList({isbn}) {
  const [book, setBook ] = useState(null);

  useEffect(() => {
    fetch(`https://api.itbook.store/1.0/books/${isbn}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [isbn]);

  if (!book) {
    return <div className='book'>Loading...</div>;
  }

//   const buttonLabel = "Read More"; 

  return (
    <div className="book">
      <img className="image" src="/daniel.png" alt="Book Cover" />
      <h2>{book.authors}</h2>
      <button className='button'>
        <a className='button' href={book.url} target="_blank">Read More</a></button>
    </div>
  );
}


export default BookList;
