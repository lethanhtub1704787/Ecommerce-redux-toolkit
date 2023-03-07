export type CategoryImage = {
  id: string;
  resizedUrl: string;
  url: string;
};

export type Category = {
  id: string;
  image: CategoryImage;
  name: string;
};

export type CategoryState = {
  items: Array<Category>;
};
