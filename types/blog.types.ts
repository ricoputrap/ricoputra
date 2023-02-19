export type TFrontmatter = {
  date: string;
  description: string;
  title: string;
  cover: string;
  tags: string[];
}

export type TPost = {
  frontmatter: TFrontmatter;
  slug: string;
}