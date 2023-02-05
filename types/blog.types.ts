export type TFrontmatter = {
  date: string;
  description: string;
  title: string;
}

export type TPost = {
  frontmatter: TFrontmatter;
  slug: string;
}