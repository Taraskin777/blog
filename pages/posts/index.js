import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../helpers/post-util";

function AllPostPage(props) {
  return <AllPosts posts={props.posts} />;
}

export function getStaticProps() {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostPage;
