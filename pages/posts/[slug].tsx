import Layout from "components/Layout";
import PostTitle from "components/PostTitle";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

export const getStaticPaths: GetStaticPaths = () => {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const post = allPosts.find(
    (post) => post._raw.flattenedPath === context.params!.slug
  );
  return {
    props: {
      post,
    },
  };
};

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  return (
    <Layout>
      <PostTitle {...post} />
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose prose-xl"
      ></div>
    </Layout>
  );
};

export default PostPage;
