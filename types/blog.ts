export type BlogPost = {
  id: number,
  title: string,
  desc: string,
  published_at: string,
  cover: string
}

export type Blogs = {
  data: BlogPost[]
}