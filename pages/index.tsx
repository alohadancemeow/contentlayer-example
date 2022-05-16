import { allPosts, Post } from "contentlayer/generated";
import type { GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import PostCard from "components/PostCard";
import PageTitle from "components/PageTitle";
import Pagination from "components/Pagination";
import siteMetadata from "siteMetadata";
import { NextSeo } from "next-seo";

export const getStaticProps: GetStaticProps = async (context) => {
  let posts = allPosts.sort((a, b) => {
    const x = new Date(a.date);
    const y = new Date(b.date);
    if (x === y) return 0;
    else if (x < y) return 1;
    else return -1;
  });
  const page = 1;
  const totalPosts = allPosts.length;
  const totalPages = Math.ceil(totalPosts / siteMetadata.postsPerPage);
  const start = (page - 1) * siteMetadata.postsPerPage;
  const end = start + siteMetadata.postsPerPage;
  posts = posts.slice(start, end);
  return {
    props: {
      posts,
      totalPages,
    },
  };
};

const Home: NextPage<{ posts: Post[]; totalPages: number }> = ({
  posts,
  totalPages,
}) => {
  return (
    <Layout>
      <NextSeo
        title={`${siteMetadata.title} | ${siteMetadata.author}`}
        description={siteMetadata.description}
        openGraph={{
          title: `${siteMetadata.title} | ${siteMetadata.author}`,
          description: siteMetadata.description,
          url: siteMetadata.siteAddess,
          site_name: siteMetadata.title,
        }}
        twitter={{
          handle: "@naimulcsx",
          site: "@naimulcsx",
          cardType: "summary_large_image",
        }}
      />
      <PageTitle
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <div className="space-y-12">
        {posts.map((post, i) => {
          return <PostCard key={i} {...post} />;
        })}
      </div>
      <Pagination totalPages={totalPages} />
    </Layout>
  );
};

export default Home;
