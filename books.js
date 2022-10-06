let books;

async function renderBooks (filter){
const booksWrapper = document.querySelector('.books')

booksWrapper.classList += ' books__loading'
if (!books){
    books = await getBooks()
}
booksWrapper.classList.remove('books__loading')


    if (filter === "LOW_TO_HIGH"){
        books.sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice))
    }
    else if (filter === "HIGH_TO_LOW"){
        books.sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice))
    }
    else if (filter === "RATING"){
        books.sort((a, b) => b.rating - a.rating)

    }

const booksHtml = books.map(book => {
    return `<div class="book">
    <figure class="book__image--wrapper">
    <img class="book__image" src="${book.url}" alt="">
    </figure>
    <div class="book__title">
    ${book.title}
    </div>
    <div class="book__ratings">
    ${ratingsHTML(book.rating)}
    </div>
    <div class="book__price">
    ${priceHTML(book.originalPrice, book.salePrice)}
    </div>
</div>`;
}).join("");

booksWrapper.innerHTML = booksHtml;
}

function priceHTML(originalPrice, salePrice){
    if (!salePrice){
        return `$${originalPrice.toFixed(2)}`
    }
        return `<span class="book__price--normal">$${originalPrice.toFixed(2)}</span> $${salePrice.toFixed(2)}`
}

function ratingsHTML (rating) {
    let ratingHTML = ''    
    for (let i = 0; i < Math.floor(rating); i++){
        ratingHTML += '<i class="fas fa-star"></i>\n'
    }
    if (!Number.isInteger(rating)){
        ratingHTML += '<i class="fas fa-star-half-alt"></i>\n'
    }
    return ratingHTML
}

function filterBooks(event){
renderBooks(event.target.value)
}



setTimeout(() => {
    renderBooks();
});

// DUMMY/NOT REAL DATA
function getBooks() {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve ([
                {
                  id: 1,
                  title: "Death Note Vol.1",
                  url: "assets/deathnote.jpg",
                  originalPrice: 49.95,
                  salePrice: 14.95,
                  rating: 5,
                },
                {
                  id: 2,
                  title: "Naruto Vol.1",
                  url: "assets/naruto.jpg",
                  originalPrice: 39,
                  salePrice: null,
                  rating: 5,
                },
                {
                  id: 3,
                  title: "Bleach Vol.1",
                  url: "assets/bleach.jpg",
                  originalPrice: 29,
                  salePrice: 12,
                  rating: 5,
                },
                {
                  id: 4,
                  title: "Fullmetal Alchemist Vol.1",
                  url: "assets/fullmetal-alchemist.jpg",
                  originalPrice: 44,
                  salePrice: 19,
                  rating: 5,
                },
                {
                  id: 5,
                  title: "Jujutsu Kaisen Vol.17",
                  url: "assets/jujutsukaisen.jpg",
                  originalPrice: 32,
                  salePrice: 17,
                  rating: 3,
                },
                {
                  id: 6,
                  title: "Konosuba: Gods Blessing On This Wonderful World! Vol.1",
                  url: "assets/konosuba.jpg",
                  originalPrice: 70,
                  salePrice: 12.5,
                  rating: 4.5,
                },
                {
                  id: 7,
                  title: "Berzerk Deluxe Vol.11",
                  url: "assets/berzerk.jpg",
                  originalPrice: 11,
                  salePrice: 10,
                  rating: 4,
                },
                {
                  id: 8,
                  title: "DragonBall Super Vol.16",
                  url: "assets/dbs.jpg",
                  originalPrice: 38,
                  salePrice: 17.95,
                  rating: 4.5,
                },
                {
                  id: 9,
                  title: "Highschool DxD Vol.2",
                  url: "assets/dxd.jpg",
                  originalPrice: 35,
                  salePrice: null,
                  rating: 3.5,
                },
                {
                  id: 10,
                  title: "My Dress Up Darling Vol.6",
                  url: "assets/mdud.jpg",
                  originalPrice: 40,
                  salePrice: null,
                  rating: 4,
                },
                {
                  id: 11,
                  title: "The Liminal Zone",
                  url: "assets/liminal zone.jpg",
                  originalPrice: 40,
                  salePrice: null,
                  rating: 2,
                },
                {
                  id: 12,
                  title: "Spy Family Vol.2",
                  url: "assets/spyfam.jpg",
                  originalPrice: 30,
                  salePrice: null,
                  rating: 4.5,
                },
              ]);
        }, 1000);
    });
  }
  