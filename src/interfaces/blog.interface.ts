export interface Blog {
  title: string;
  excerpt: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  category: string;
  image: string;
  slug: string;
}

export interface BlogSection {
  heading: string;
  subheading: string;
  blogs: Blog[];
}
