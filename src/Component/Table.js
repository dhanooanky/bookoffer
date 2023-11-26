// Table.js

import React, { useState, useEffect } from 'react';
import './Table.css';;

const Table = ({ data, onEdit, onDelete, editableRowIndex, onSaveEdit }) => {
  const [editedData, setEditedData] = useState({
    bookTitle: '',
    author: '',
    genre: '',
    year: '',
    isbn: '',
  });

  useEffect(() => {
    if (editableRowIndex !== null) {
      const { bookTitle, author, genre, year, isbn } = data[editableRowIndex];
      setEditedData({ bookTitle, author, genre, year, isbn });
    } else {
      setEditedData({
        bookTitle: '',
        author: '',
        genre: '',
        year: '',
        isbn: '',
      });
    }
  }, [editableRowIndex, data]);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSaveClick = (index) => {
    onSaveEdit(index, editedData);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>S No</th>
          <th>Book Title</th>
          <th>Author</th>
          <th>Genre</th>
          <th>Year of Publication</th>
          <th>ISBN</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>
              {editableRowIndex === index ? (
                <input
                  type="text"
                  name="bookTitle"
                  value={editedData.bookTitle}
                  onChange={handleEditChange}
                />
              ) : (
                row.bookTitle
              )}
            </td>
            <td>
              {editableRowIndex === index ? (
                <input
                  type="text"
                  name="author"
                  value={editedData.author}
                  onChange={handleEditChange}
                />
              ) : (
                row.author
              )}
            </td>
            <td>
              {editableRowIndex === index ? (
                <input
                  type="text"
                  name="genre"
                  value={editedData.genre}
                  onChange={handleEditChange}
                />
              ) : (
                row.genre
              )}
            </td>
            <td>
              {editableRowIndex === index ? (
                <input
                  type="text"
                  name="year"
                  value={editedData.year}
                  onChange={handleEditChange}
                />
              ) : (
                row.year
              )}
            </td>
            <td>
              {editableRowIndex === index ? (
                <input
                  type="text"
                  name="isbn"
                  value={editedData.isbn}
                  onChange={handleEditChange}
                />
              ) : (
                row.isbn
              )}
            </td>
            <td>
              {editableRowIndex === index ? (
                <div>
                  <button onClick={() => handleSaveClick(index)}>Save</button>
                </div>
              ) : (
                <div>
                  <button onClick={() => onEdit(index)}>Edit</button>
                  <button onClick={() => onDelete(index)}>Delete</button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;