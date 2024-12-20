$("document").ready(() => {
  const url = "https://anapioficeandfire.com/api/books/";
  const addToDom = (book) => {
    $("#books").append(
      $("<div>")
        .css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        })
        .append($("<h3>").text(book.name))
        .append($("<p>").text(book.authors[0]))
        .append($("<p>").text(book.released.substr(0, 4)))
        .append($("<p>").text(`${book.numberOfPages} pages`))
    );
  };

  const fetchData = (url) => {
    $.ajax({
      type: "GET",
      url: url,
      success: (data) => {
        data.forEach((book) => {
          addToDom(book);
        });
      },
      error: (error) => {
        console.error(error);
        $("#books").append(
          $("<div>").text("An error occurred while fetching data")
        );
      },
      complete: () => {
        $("#loading").remove();
      },
    });
  };
  fetchData(url);
});
