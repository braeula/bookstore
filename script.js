let books = [
    {
        "name": "Die Geheimnisse des Ozeans",
        "author": "Clara Meer",
        "likes": 1250,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2018,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat."
            },
            {
                "name": "Bookworm84",
                "comment": "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat."
            },
            {
                "name": "FantasyFanatic",
                "comment": "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte."
            },
            {
                "name": "SciFiGuru",
                "comment": "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren."
            },
            {
                "name": "NovelLover",
                "comment": "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat."
            }
        ]
    },
    {
        "name": "Der vergessene Pfad",
        "author": "Maximilian Schwarz",
        "likes": 980,
        "liked": false,
        "price": 14.50,
        "publishedYear": 2021,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Die Farben des Himmels",
        "author": "Laura Blau",
        "likes": 1520,
        "liked": true,
        "price": 22.95,
        "publishedYear": 2019,
        "genre": "Romantik",
        "comments": [
            {
                "name": "LeserPeter",
                "comment": "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt."
            },
            {
                "name": "BookLover21",
                "comment": "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat."
            },
            {
                "name": "FantasyNerd",
                "comment": "Fantastische Welten und epische Abenteuer - genau mein Geschmack!"
            },
            {
                "name": "SciFiEnthusiast",
                "comment": "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht."
            },
            {
                "name": "ReadingAddict",
                "comment": "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat."
            }
        ]
    },
    {
        "name": "Das Rätsel der Zeit",
        "author": "Alexander Weiss",
        "likes": 750,
        "liked": false,
        "price": 18.00,
        "publishedYear": 2020,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BuchKenner",
                "comment": "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat."
            },
            {
                "name": "LeseWurm",
                "comment": "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben."
            }
        ]
    },
    {
        "name": "Der letzte Wächter",
        "author": "Sabine Grün",
        "likes": 1300,
        "liked": true,
        "price": 16.75,
        "publishedYear": 2017,
        "genre": "Fantasy",
        "comments": []
    },
    {
        "name": "Im Schatten des Mondes",
        "author": "Philipp Silber",
        "likes": 890,
        "liked": false,
        "price": 12.30,
        "publishedYear": 2022,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "BücherLiebhaber",
                "comment": "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd."
            },
            {
                "name": "Leseratte",
                "comment": "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat."
            }
        ]
    },
    {
        "name": "Jenseits der Sterne",
        "author": "Oliver Schwarz",
        "likes": 1450,
        "liked": true,
        "price": 21.00,
        "publishedYear": 2015,
        "genre": "Science-Fiction",
        "comments": [
            {
                "name": "Leser123",
                "comment": "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat."
            }
        ]
    },
    {
        "name": "Das verborgene Königreich",
        "author": "Elena Gold",
        "likes": 920,
        "liked": false,
        "price": 17.50,
        "publishedYear": 2020,
        "genre": "Fantasy",
        "comments": [
            {
                "name": "Bookworm92",
                "comment": "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat."
            }
        ]
    },
    {
        "name": "Liebe in Zeiten des Krieges",
        "author": "Emilia Rot",
        "likes": 1800,
        "liked": true,
        "price": 19.99,
        "publishedYear": 2016,
        "genre": "Romantik",
        "comments": [
            {
                "name": "Bibliophile23",
                "comment": "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen."
            },
            {
                "name": "StorySeeker",
                "comment": "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat."
            },
            {
                "name": "SciFiExplorer",
                "comment": "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig."
            }
        ]
    }
]

function renderBooks() {
    let contentRef = document.getElementById('content');
    let contentHTML = '';
    for (let i = 0; i < books.length; i++) {
        contentHTML += getBook(i);
    }
    contentRef.innerHTML = contentHTML;
}

function getBook(id) {
    return `<div class="book">
            <div class="title">
                <h2>${books[id].name}</h2>
            </div>
            <div class="image">
                <img src="./assets/icons/Golden-Book-icon.png" alt="book">
            </div>
            <div class="information">
                <div class="price_and_likes">
                    <h3 class="price">${books[id].price.toFixed(2).replace('.', ',')} €</h3>
                    <div class="likes">
                        <div id="number_of_likes_${id}">${books[id].likes}</div>  
                        <div class="not_liked" id="no_${id}">
                            <img onclick="like(${id})" class="like_icon" src="./assets/icons/like_no.png" alt="not liked">
                        </div>
                        <div class="liked d_none" id="yes_${id}">
                            <img onclick="like(${id})" class="like_icon" src="./assets/icons/like_yes.png" alt="liked">
                        </div>   
                    </div>
                </div>
                <div class="book_info">
                    <div class="info">
                        <h4 class="name">Autor</h4>
                        <div class="text">: ${books[id].author}</div>
                    </div>
                    <div class="info">
                        <h4 class="name">Erscheinungsjahr</h4>
                        <div class="text">: ${books[id].publishedYear}</div>
                    </div>
                    <div class="info">
                        <h4 class="name">Genre</h4>
                        <div class="text">: ${books[id].genre}</div>
                    </div>
                </div>               
            </div>
            <div class="comment_section">
                <div class="comments_title">
                    <h3>Kommentare:</h3>
                </div>
                <div class="comments">
                    ${getComment(id)}
                </div>    
                <form class="input">
                    <input required class="comment_input" type="text" id="${id}" placeholder="Schreibe dein Kommentar...">
                    <button type='button' onclick="addComment(${id})">
                        <img src="./assets/icons/send.png" alt="">
                    </button>
                </form>                
            </div>
        </div>`

}

function getComment(id) {
    let comments = '';
    if (books[id].comments != []) {
        for (let i = 0; i < books[id].comments.length; i++) {
            comments += `<div class="comment">
                            <div class="name">
                            [${books[id].comments[i].name}]
                            </div>
                            <div class="text">
                                : ${books[id].comments[i].comment}
                            </div>
                        </div>`
        }
    }
    return comments
}

function addComment(id) {
    books[id].comments.unshift({
        "name": "Arthur",
        "comment": `${document.getElementById(id).value}`
    })
    renderBooks()
}

function like(id) {
    let number = document.getElementById(`number_of_likes_${id}`).innerHTML;
    if (document.getElementById(`yes_${id}`).classList.contains('d_none')) {
        number = Number(number) + 1;
    }
    else {
        number = Number(number) - 1;
    }
    document.getElementById(`number_of_likes_${id}`).innerHTML = number;
    document.getElementById(`no_${id}`).classList.toggle('d_none');
    document.getElementById(`yes_${id}`).classList.toggle('d_none');
}



