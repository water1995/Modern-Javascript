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
  ui.showAlert('Book Added!','success');
  ui.clearFields();
  }

  e.preventDefault();
});

document.getElementById('book-list').addEventListener('click',function(e){

  const ui = new UI();
 
    ui.deleteBook(e.target);
    ui.showAlert('Book Removed!','error');
  
  e.preventDefault();
});