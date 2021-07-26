interface Entity {
    id: string | number

}

interface Author extends Entity {
    name: string
}

interface EditionDate extends Entity {
    date:Date | string
}

interface Genre extends Entity {
    title: string

}

interface LiteraryMovement extends Entity {
    genre: Genre
}


interface Book extends Entity {
    id: string
    title: string
    isbn: string
    file: string
    author: Author
    publishedAt: EditionDate
    literaryMovement: LiteraryMovement
}

export {}