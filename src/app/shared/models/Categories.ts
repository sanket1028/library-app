export interface Book {
  name: String;
  desc: String;
}

export interface Categories {
  id: Number;
  image: String;
  name: String;
  description: Number;
  books: Book[];
}
