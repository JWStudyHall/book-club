const books = [
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian novel exploring surveillance, authoritarianism, and the manipulation of truth in a totalitarian society.",
    pgs: 328,
    image: "https://www.magicmurals.com/media/catalog/product/cache/af1e2a1566fa2dbb552605e8822354b7/a/d/adg-0000001048_1.jpg"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A powerful story about racial injustice and moral growth told through the eyes of a young girl in the American South.",
    pgs: 336,
    image: "https://m.media-amazon.com/images/I/81aY1lxk+9L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A tragic portrait of wealth, ambition, and the American Dream during the Jazz Age.",
    pgs: 180,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBQFQsAYm78NqUJT6iebxB4gl0Jm5qjhKxDw&s"
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A classic romance that critiques class, marriage, and social expectations in 19th-century England.",
    pgs: 279,
    image: "https://m.media-amazon.com/images/I/71CvWDPcVEL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A coming-of-age novel centered on teenage alienation and the search for authenticity.",
    pgs: 277,
    image: "https://m.media-amazon.com/images/I/8125BDk3l9L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description: "A fantasy adventure following Bilbo Baggins as he embarks on an unexpected journey filled with danger and wonder.",
    pgs: 310,
    image: "https://m.media-amazon.com/images/I/712cDO7d73L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    description: "The beginning of a magical series about friendship, courage, and discovering one's identity.",
    pgs: 309,
    image: "https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    author: "J.R.R. Tolkien",
    description: "An epic fantasy about the struggle between good and evil in the world of Middle-earth.",
    pgs: 423,
    image: "https://m.media-amazon.com/images/I/71Ep7UNeTtL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    description: "A philosophical novel about following your dreams and listening to your heart.",
    pgs: 208,
    image: "https://m.media-amazon.com/images/I/71+2-t7M35L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    description: "An exploration of human history, evolution, and the forces that shaped modern civilization.",
    pgs: 443,
    image: "https://m.media-amazon.com/images/I/716E6dQ4BXL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "A practical guide to building good habits, breaking bad ones, and mastering small behavioral changes.",
    pgs: 320,
    image: "https://m.media-amazon.com/images/I/81kg51XRc1L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    description: "A bleak yet emotional story of a father and son struggling to survive in a post-apocalyptic world.",
    pgs: 287,
    image: "https://m.media-amazon.com/images/I/51M7XGLQTBL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    description: "A haunting tale narrated by Death, centered on a young girl living in Nazi Germany who finds solace in books.",
    pgs: 552,
    image: "https://m.media-amazon.com/images/I/914cHl9v7oL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    description: "A dystopian novel examining consumerism, technology, and the cost of engineered happiness.",
    pgs: 268,
    image: "https://m.media-amazon.com/images/I/71GNqqXuN3L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    description: "A story of friendship, betrayal, and redemption set against the backdrop of Afghanistan's history.",
    pgs: 371,
    image: "https://m.media-amazon.com/images/I/81LVEH25iJL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "The Lean Startup",
    author: "Eric Ries",
    description: "A business book focused on innovation, rapid experimentation, and building successful startups.",
    pgs: 336,
    image: "https://m.media-amazon.com/images/I/71sxTeZIi6L._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Meditations",
    author: "Marcus Aurelius",
    description: "A collection of personal writings by a Roman emperor on philosophy, self-discipline, and resilience.",
    pgs: 256,
    image: "https://cloud.firebrandtech.com/api/v2/image/111/9781577154617/CoverArtHigh/XL"
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    description: "A memoir and psychological exploration of finding purpose through suffering.",
    pgs: 184,
    image: "https://m.media-amazon.com/images/I/61157LApbuL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    description: "An examination of how the human mind makes decisions, highlighting biases and cognitive systems.",
    pgs: 499,
    image: "https://m.media-amazon.com/images/I/61fdrEuPJwL._AC_UF1000,1000_QL80_.jpg"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    description: "A science-fiction epic involving politics, religion, and power on a desert planet.",
    pgs: 412,
    image: "https://m.media-amazon.com/images/I/81Ua99CURsL._AC_UF1000,1000_QL80_.jpg"
  }
];

module.exports = books;