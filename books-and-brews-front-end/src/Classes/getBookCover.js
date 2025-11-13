//Using function to retrieve bookCover
function getBookCover (name) {
    return new URL(`../bookCovers/${name}`, import.meta.url)
}

export {getBookCover}