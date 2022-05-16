import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import PostCard from "components/PostCard";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import siteMetadata from "siteMetadata";

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
  const { query, asPath } = useRouter();
  return (
    <Layout>
      <NextSeo
        title={`Tag: ${query.slug} | ${siteMetadata.author}`}
        description={`Posts about ${query.slug}`}
        openGraph={{
          title: `${query.slug} | ${siteMetadata.author}`,
          description: `Posts about ${query.slug}`,
          url: siteMetadata.siteAddess + asPath,
          site_name: siteMetadata.title,
        }}
        twitter={{
          handle: "@naimulcsx",
          site: "@naimulcsx",
          cardType: "summary_large_image",
        }}
      />
      <PageTitle title={`Tag: ${query.slug}`} />
      {posts.map((post, i) => {
        return <PostCard key={i} {...post} />;
      })}
    </Layout>
  );
};

export default PostPage;
