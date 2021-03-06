import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
//components
import BookShelf from './BookShelf'
import { Link } from 'react-router-dom'
 
class BookList extends Component {
	static PropTypes = {
		books: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			shelf: PropTypes.string.isRequired,
			imageLinks: PropTypes.object.isRequired,
			authors: PropTypes.arrayOf(PropTypes.string.isRequired),
			id: PropTypes.string.isRequired,
		})),
		onShelfChange: PropTypes.func.isRequired
	}

	shelfs = [
		{
			name: `currentlyReading`,
			heading: 'Currently Reading'
		},
		{
			name: `wantToRead`,
			heading: `Want To Read`
		},
		{
			name: `read`,
			heading: `Read`
		}
	]

	render() {
		const shelfs = this.shelfs
		const books = this.props.books

		return (
			<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
            	<div>
            	{shelfs.map((shelf, index)=> (
            		<BookShelf
            			title={shelf.heading}
            			key={index}
            			books={books.filter((book) => book.shelf === self.name)}
            			onShelfChange={(id,shelf) => {
            				this.props.onShelfChange(id,shelf)
            			}}
            		/>
            		))}
            	</div>
          	</div>

            <div className="open-search">
            <Link to="/search">Add a book</Link>
            </div>
          </div>
			)
	}
}

export default BookList