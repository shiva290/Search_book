import axios from "axios";
import "./App.css";
import BookCard from "./components/card";
import SearchBox from "./components/searchBox";
import { useCallback, useEffect, useState } from "react";
import { Grid } from "@mui/material";

function App() {
  const [bookList, setbookList] = useState([]);
  const [error, setError] = useState(null);
  const [searchKey, setSearchKey] = useState(null);
  const [loading, setLoading] = useState(false);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchBooks = async (searchKey) => {
    setError(null);
    setLoading(true);
    const url = `https://gutendex.com/books?search=${searchKey}`;
    try {
      const res = await axios.get(url);
      setbookList(res.data.results);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.error(error);
      setLoading(false);
    }
  };

  const handleSearch = useCallback(() => {
    searchKey && fetchBooks(searchKey);
  }, [searchKey]);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      handleSearch();
    }, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [handleSearch]);

  const handleonChange = (e) => {
    setSearchKey(e.target.value);
  };

  return (
    <div className="App">
      <SearchBox value={searchKey} onChange={handleonChange} />
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Grid container item xs={12} justifyContent="center">
          {bookList.map((book) => (
            <BookCard book={book} />
          ))}
        </Grid>
      )}
    </div>
  );
}

export default App;
