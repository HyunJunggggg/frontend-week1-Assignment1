import BookList from "./BookList";
import HoverButton from "./HoverButton";

function App() {
  return (
    <div className="app">
      <div className="header">
        <h1 className="title_text">Book Catalog</h1>
      </div>
      <div className="content">
        <HoverButton />
        <BookList isbn="9781484292464" />
        <BookList isbn="9781484289822" />
        {/* <BookList author="By Daniel Irvine" />
      <SecondBookList author="By Sujay Raghavendra" /> */}
      </div>
      <footer className="footer">
        <p>© Hyunjung Shin, 2025</p>
      </footer>
    </div>
  );
}

export default App;
