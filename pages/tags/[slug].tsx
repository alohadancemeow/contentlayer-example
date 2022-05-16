import Header from "components/Header";
import Tags from "components/Tags";
import { allPosts, Post } from "contentlayer/generated";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Link from "next/link";
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
    <div className="my-20">
      <Header />

      <div className="max-w-3xl px-4 mx-auto space-y-8">
        <h3 className="text-4xl border-b pb-10">Tag: {query.slug}</h3>
        {posts.map((post) => {
          return (
            <div className="space-y-2">
              <h2 className="text-blue-500 font-medium text-3xl">
                {post.title}
              </h2>
              <div>{new Date(post.date).toLocaleDateString("en-US")}</div>
              <Tags tags={post.tags} />
              <p>{post.description}</p>
              <Link href={post.url}>
                <a className="text-blue-500 border-b border-blue-500">
                  Read More
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostPage;
