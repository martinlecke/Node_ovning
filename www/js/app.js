

$('.inputfield').on('keyup', function (event) {
  event.preventDefault();
  
  $.getJSON(`/books/title/${$(this).val()}`, (books) => {
    $('.result').empty();
    console.log(books.length)
    for(let book of books){
      $('.result').append(`
        <div class="col-6 col-md-3">
        <h2>${book.title}</h2>
        <h3>${book.author}</h3>
        </div>
      `);
    }
  });

})