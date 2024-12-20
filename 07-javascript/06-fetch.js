const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

function addToDom(book) {
  let division = document.createElement("div");
  let title = document.createElement("h3");
  let author = document.createElement("p");
  let released = document.createElement("p");
  let pages = document.createElement("p");

  title.textContent = book.name;
  author.textContent = book.authors[0];
  released.textContent = book.released.substr(0, 4);
  pages.textContent = `${book.numberOfPages} pages`;

  division.style.display = "flex";
  division.style.flexDirection = "column";
  division.style.textAlign = "center";
  division.style.marginTop = "20px";

  division.append(title);
  division.append(author);
  division.append(released);
  division.append(pages);
  app.append(division);
}

const fetchData = (url) => {
  // Fetch all books from the API of Ice and Fire and append them to the DOM
  // Create an element for each book that contains title, author, publication year, and number of pages
  // Update the styles in JavaScript to center all the books in the container given
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((book) => {
        console.log(book.name, book.authors);
        addToDom(book);
      });
    })
    .catch((error) => console.error(error))
    .finally(() => {
      let loader = document.querySelector("#loading");
      app.removeChild(loader);
    });
};

fetchData(url);
