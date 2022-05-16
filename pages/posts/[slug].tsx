import Layout from "components/Layout";
import PostTitle from "components/PostTitle";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import siteMetadata from "siteMetadata";

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
  const { asPath } = useRouter();
  return (
    <Layout>
      <NextSeo
        title={`${post.title} | ${siteMetadata.author}`}
        description={post.description}
        openGraph={{
          title: `${post.title} | ${siteMetadata.author}`,
          description: post.description,
          url: siteMetadata.siteAddess + asPath,
          site_name: siteMetadata.title,
        }}
        twitter={{
          handle: "@naimulcsx",
          site: "@naimulcsx",
          cardType: "summary_large_image",
        }}
      />
      <PostTitle {...post} />
      <div
        dangerouslySetInnerHTML={{ __html: post.body.html }}
        className="prose prose-xl dark:prose-invert"
      ></div>
    </Layout>
  );
};

export default PostPage;
