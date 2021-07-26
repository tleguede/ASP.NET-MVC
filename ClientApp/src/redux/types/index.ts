interface Entity {
    id: string | number
}

export interface Author extends Entity {
    name: string
}

export interface EditionDate extends Entity {
    date: string | Date
}

export interface Genre extends Entity {
    name: string
}

export interface LiteraryMovement extends Entity {
    name: string
    genre: Genre
}

export interface Book extends Entity {
    name: string
    isbn: string
    author: Author
    publishedAt: EditionDate
    literaryMovement: LiteraryMovement
    uri: string
}

