import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs2",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs3",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  },
  {
    title: "Getting Started with NextJS",
    slug: "getting-started-with-nextjs4",
    image: "getting-started-nextjs.png",
    date: "2022-02-10",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
  },
];

function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostPage;
