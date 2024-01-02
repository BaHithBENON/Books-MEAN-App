const page = require('page');

document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.feature-item');

    listItems.forEach(item => {
        item.addEventListener('click', async () => {
            const featureId = item.dataset.featureId;
            const response = await fetch(`/api/books/${featureId}`);
            const bookDatas = await response.json();

            // Mettez à jour l'interface utilisateur avec les données du livre
            updateUI(bookDatas);
            
            // Naviguez vers la nouvelle page
            page(`/api/books/${featureId}`);
        });
    });
});

// Initialisez la bibliothèque de routage
page();

function updateUI(bookData) {
    const bookListContainer = document.getElementById('books');
    const bookTemplate = document.getElementById('book-template');
    // Effacez le contenu actuel
    bookListContainer.innerHTML = '';

    // Itérez sur la liste de livres
    bookList.forEach(bookData => {
        // Clonez le contenu du template
        const bookElement = document.importNode(bookTemplate.content, true);

        // Mettez à jour les données du livre dans le clone
        bookElement.querySelector('.book-title').textContent = bookData.title;
        // Mettez à jour d'autres données du livre en conséquence
        // ...

        // Ajoutez le clone à la liste de livres
        bookListContainer.appendChild(bookElement);
    });
}