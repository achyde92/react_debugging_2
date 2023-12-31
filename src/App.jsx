import './App.css';
import { useState, useEffect } from 'react';

// generateBookData is used to simulate source data.
// debug the "books" state variable to identify what that data looks like.
// **DO NOT USE generateBookData ANYWHERE ELSE IN THIS LAB!**
import { generateBookData } from './data/bookData';
import BookTable from './components/BookTable/BookTable';

const App = () => {
	const [books, setBooks] = useState([]);

	console.log("Books data:", books);

	useEffect(() => {
		setBooks(generateBookData()); // **DO NOT EDIT THIS LINE!**
	}, []);

	return (
		<div>
			<h1>Book Depot</h1>
			<BookTable books={books}/>
		</div>
	);
};

export default App;
