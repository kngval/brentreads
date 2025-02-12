import { booksArray } from "./data/Books";
import authorSvg from "./assets/author.svg"
function Books() {

  return (
    <div className="book-container">
      {booksArray.length > 0 && (
        booksArray.map((book,index) => (
          <div key={index} className="book-details">
            <div className="book-rank">{index + 1}</div>
            <img className="bookimg" src={book.imgPath} />

            <div>
              <div className="book-title-author-container">
                <h1 className="book-title">{book.title}</h1>

                <div className="author-container">
                  <img className="author-svg" src={authorSvg} />
                  <h4 className="book-author">{book.author}</h4>
                </div>
              </div>


              <div>{book.synopsis}</div>
              <div className="book-rating">
                <div>Rating : {book.rating}/5</div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
export default Books;
