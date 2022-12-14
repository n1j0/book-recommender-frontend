type Rating = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

interface Book {
    ISBN: string,
    rating: Rating,
    location: string,
    title: string,
    author: string,
    publication: string | number,
    publisher: string,
    imgSmall: string,
    imgMedium: string,
    imgLarge: string,
    userRating?: Rating,
}

const booksToRate: Book[] = [
    {
        ISBN: '0471197033',
        rating: 7,
        location: '',
        title: 'A Short History of Planet Earth : Mountains, Mammals, Fire, and Ice (Wiley Popular Series)',
        author: 'J. D. MacDougall',
        publication: '1998',
        publisher: 'Wiley',
        imgSmall: 'http://images.amazon.com/images/P/0471197033.01.THUMBZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0471197033.01.MZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0471197033.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '0671576925',
        rating: 10,
        location: '',
        title: 'Lawrence Sanders: McNallys Dilemma : An Archy McNally Novel (Archy McNally Novels (Audio))',
        author: 'Vincent Lardo',
        publication: '1999',
        publisher: 'Simon &amp Schuster Audio',
        imgSmall: 'http://images.amazon.com/images/P/0671576925.01.THUMBZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0671576925.01.MZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0671576925.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '679420339',
        rating: 7,
        location: '',
        title: 'The Tin Drum (Everymans Library Series)',
        author: 'Gunter Grass',
        publication: '1993',
        publisher: 'Everymans Library',
        imgSmall: 'http://images.amazon.com/images/P/0679420339.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0679420339.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0679420339.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '813522021',
        rating: 10,
        location: '',
        title: 'Lifebirds',
        author: 'George Lewis Levine',
        publication: '1995',
        publisher: 'Rutgers University Press',
        imgSmall: 'http://images.amazon.com/images/P/0813522021.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0813522021.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0813522021.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '440400287',
        rating: 8,
        location: '',
        title: 'The Witch Sister',
        author: 'Phyllis Reynolds Naylor',
        publication: '1993',
        publisher: 'Yearling Books',
        imgSmall: 'http://images.amazon.com/images/P/0440400287.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0440400287.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0440400287.01.LZZZZZZZ.jpg',
    }
]

const booksRecommended: Book[] = [
    {
        ISBN: '345371984',
        rating: 7,
        location: '',
        title: 'Last Chance to See',
        author: 'Douglas Adams',
        publication: '1992',
        publisher: 'Ballantine Books',
        imgSmall: 'http://images.amazon.com/images/P/0345371984.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0345371984.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0345371984.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '670815373',
        rating: 10,
        location: '',
        title: 'Urn Burial',
        author: 'Robert Westall',
        publication: '1987',
        publisher: `Viking Children's Books`,
        imgSmall: 'http://images.amazon.com/images/P/0670815373.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0670815373.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0670815373.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '440223571',
        rating: 10,
        location: '',
        title: 'This Year It Will Be Different: And Other Stories',
        author: 'Maeve Binchy',
        publication: '1997',
        publisher: 'Dell',
        imgSmall: 'http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0440223571.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '1575843366',
        rating: 7,
        location: '',
        title: 'What Shall I Be (Barbie Carryalong)',
        author: 'Rita Chapman Works',
        publication: '1999',
        publisher: 'Readers Digest',
        imgSmall: 'http://images.amazon.com/images/P/1575843366.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/1575843366.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/1575843366.01.LZZZZZZZ.jpg',
    },
    {
        ISBN: '684193957',
        rating: 7,
        location: '',
        title: 'ALL THAT REMAINS',
        author: 'Patricia Cornwell',
        publication: '1992',
        publisher: 'Scribner',
        imgSmall: 'http://images.amazon.com/images/P/0684193957.01.LZZZZZZZ.jpg',
        imgMedium: 'http://images.amazon.com/images/P/0684193957.01.LZZZZZZZ.jpg',
        imgLarge: 'http://images.amazon.com/images/P/0684193957.01.LZZZZZZZ.jpg',
    }
]

export {
    booksToRate,
    booksRecommended,
    Book,
}
