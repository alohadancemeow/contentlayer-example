import { allPosts, Post } from "contentlayer/generated";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Layout from "components/Layout";
import PostCard from "components/PostCard";
import PageTitle from "components/PageTitle";
import Pagination from "components/Pagination";
import siteMetadata from "siteMetadata";

const totalPosts = allPosts.length;
const totalPages = Math.ceil(totalPosts / siteMetadata.postsPerPage);

export const getStaticPaths: GetStaticPaths = () => {
  let paths: string[] = [];
  for (let i = 1; i <= totalPages; ++i) {
    paths.push(`/pages/${i}`);
  }
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const page = parseInt(context.params!.slug as string);
  let posts = allPosts.sort((a, b) => {
    const x = new Date(a.date);
    const y = new Date(b.date);
    if (x === y) return 0;
    else if (x < y) return 1;
    else return -1;
  });
  const start = (page - 1) * siteMetadata.postsPerPage;
  const end = start + siteMetadata.postsPerPage;
  posts = posts.slice(start, end);
  return {
    props: {
      posts,
      totalPages,
      currentPage: page,
    },
  };
};

const Home: NextPage<{
  posts: Post[];
  totalPages: number;
  currentPage: number;
}> = ({ posts, totalPages, currentPage }) => {
  return (
    <Layout>
      <PageTitle
        title="Contentlayer + Next.js Blog"
        description="Hi, I'm Naimul Haque. Aspiring to become a polymath."
      />
      <div className="space-y-12">
        {posts.map((post, i) => {
          return <PostCard key={i} {...post} />;
        })}
      </div>
      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </Layout>
  );
};

export default Home;
