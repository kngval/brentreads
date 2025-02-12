import { books } from "./data/Books";
import authorSvg from "./assets/author.svg"
import { useMemo, useState } from "react";
import { BookEntity } from "./data/BookEntity";
function Books() {

  const [filter, setFilter] = useState<string>("ranking");


  const booksArray:BookEntity[] = useMemo(() => {
    switch (filter) {
      case "ranking" :
        return [...books].sort((a,b) => b.rating - a.rating);
      case "ranking-reverse" :
        return [...books].sort((a,b) => a.rating - b.rating);
      case "alphabetical":
        return [...books].sort((a, b) => a.title.localeCompare(b.title));
      case "alphabetical-reverse":
        return [...books].sort((a, b) => b.title.localeCompare(a.title));
      default:
        return books;
    }
  }, [filter])

  return (
    <div className="book-container">

      <div className="filter-container">
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="filter">
          <option value="ranking">Rating : Highest to Lowest</option>
          <option value="ranking-reverse">Rating : Lowest to Highest</option>
          <option value="alphabetical">Alphabetical (a-z)</option>
          <option value="alphabetical-reverse">Alphabetical (z-a)</option>
        </select>
      </div>

      {booksArray.length > 0 && (
        booksArray.map((book, index) => (
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


              <div className="book-synopsis">{book.synopsis}</div>

              <div className="book-rating">
                <div>
                  Genre: {" "}
                  <span>
                    {book.genre.map((g) => (
                      `${g == book.genre[book.genre.length - 1] ? g + "" : g + ","}`
                    ))}
                  </span>
                </div>

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
