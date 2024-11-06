function renderBooks() {
    let contentRef = document.getElementById('content');
    let contentHTML = '';
    for (let i = 0; i < books.length; i++) {
        contentHTML += getBook(i);
    }
    contentRef.innerHTML = contentHTML;
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



