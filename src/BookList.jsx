function BookList(props) {
  const buttonLabel = "Read More";
  return (
    <div className="book">
      <img className="image" src="/daniel.png" alt="Book Cover" />
      <h2>{props.author}</h2>
      <button className='button'><a className='button' href="https://itbook.store/books/9781484292464" target="_blank">{buttonLabel}</a></button>
    </div>
  );
}

function SecondBookList(props) {
  const buttonLabel = "Read More";
  return (
    <div className="book">
      <img className="image" src="/sujay.png" alt="Book Cover" />
      <h2>{props.author}</h2>
      <button className='button'><a className='button' href="https://itbook.store/books/9781484289822" target="_blank">{buttonLabel}</a></button>
    </div>
  );
}

export default BookList;
export { SecondBookList };