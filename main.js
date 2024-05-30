function addBook() {
    const bookName = document.getElementById('book-name').value;
    const bookAuthor = document.getElementById('book-author').value;
    const bookGenre = document.getElementById('book-genre').value;
    const bookDescription = document.getElementById('book-description').value;

    if (bookName && bookAuthor && bookGenre && bookDescription) {
        const library = document.getElementById('library');

        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');

        bookItem.innerHTML = `
            <h3>${bookName}</h3>
            <p><strong>Author:</strong> ${bookAuthor}</p>
            <p><strong>Genre:</strong> ${bookGenre}</p>
            <p><strong>Description:</strong> ${bookDescription}</p>
            <button class="delete-btn" onclick="deleteBook(this)">Delete</button>
        `;

        library.appendChild(bookItem);

        document.getElementById('book-name').value = '';
        document.getElementById('book-author').value = '';
        document.getElementById('book-genre').value = '';
        document.getElementById('book-description').value = '';
    } else {
        alert('Please fill out all fields.');
    }
}

function deleteBook(button) {
    const bookItem = button.parentElement;
    bookItem.remove();
}
