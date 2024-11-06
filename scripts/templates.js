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
                    ${getComments(id)}
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

function getComments(id) {
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