export type Link = {
  name: 'About' | 'Blog' | 'Home';
  path: string;
  shouldShow: boolean;
};

export type Links = Link[];
