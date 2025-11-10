//The purpose of the function below is to get the book cover and keep code DRY

function getBookCover (name) {
    return new URL(`../bookCovers/${name}`, import.meta.url)
}

export {getBookCover}