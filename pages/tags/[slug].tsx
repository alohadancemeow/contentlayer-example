import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import PostCard from "components/PostCard";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { useRouter } from "next/router";

export const getStaticPaths: GetStaticPaths = () => {
  const paths: string[] = [];
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      paths.push(`/tags/${tag.split(" ").join("-")}`);
    });
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const posts: Post[] = [];
  allPosts.forEach((post) => {
    post.tags.forEach((tag) => {
      if (tag.split(" ").join("-") === context.params!.slug) {
        posts.push(post);
      }
    });
  });
  return {
    props: {
      posts,
    },
  };
};

const PostPage: NextPage<{ posts: Post[] }> = ({ posts }) => {
  const { query } = useRouter();
  return (
    <Layout>
      <PageTitle title={`Tag: ${query.slug}`} />
      {posts.map((post) => {
        return <PostCard {...post} />;
      })}
    </Layout>
  );
};

export default PostPage;
