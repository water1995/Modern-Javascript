class Book{

  constructor(title,author,isbn){

    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{

  addBook(book){

    const list = document.getElementById('book-list');
    //const div = document.createElement('div');
    const row = document.createElement('tr');

    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a></td>`;
    //div.appendChild(row);

    list.appendChild(row);
  }

  showAlert(message,className){

    const div = document.createElement('div');

    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const form = document.getElementById("book-form");

    container.insertBefore(div,form);

    setTimeout(function(){
          div.remove();
    },3000);
  }

  deleteBook(target){

    if(target.className === 'delete'){

      target.parentElement.parentElement.remove();
    }
  }

  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';

  };

}

class Store{

  static getBooks(){

    let books;

    if(localStorage.getItem('Books') === null){

      books = [];
    }
    else{

      books = JSON.parse(localStorage.getItem('Books'));
    }

    return books;

  }

  static displayBooks(){

    let books = Store.getBooks();

    books.forEach(function(book){

      const ui = new UI();
      ui.addBook(book);
    })

  }

  static addBook(book){

    let books = Store.getBooks();

    books.push(book);

    localStorage.setItem('Books',JSON.stringify(books));

  }

  static removeBook(isbn){

    let books = Store.getBooks();

    books.forEach(function(book,index){

      if(book.isbn === isbn){

        books.splice(index,1);
      }
    });

    localStorage.setItem('Books',JSON.stringify(books));

  }
}

document.addEventListener('DOMContentLoaded',Store.displayBooks);


document.getElementById('book-form').addEventListener('submit',function(e){

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;

  const ui = new UI();
  
  if(title === '' || author === '' || isbn === ''){

    ui.showAlert('Please fill all fields!','error');

  }else{
  const bk = new Book(title,author,isbn);

  ui.addBook(bk);
  Store.addBook(bk);
  ui.showAlert('Book Added!','success');
  ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){

  const ui = new UI();
 
    ui.deleteBook(e.target);
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    ui.showAlert('Book Removed!','error');
  
  e.preventDefault();
});