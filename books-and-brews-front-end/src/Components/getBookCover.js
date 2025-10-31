//The purpose of the function below is to 

function getBookCover (name) {
    return new URL(`../bookCovers/${name}`, import.meta.url)
}

export {getBookCover}