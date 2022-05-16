import Header from "components/Header";
import Tags from "components/Tags";
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
    <div className="my-20">
      <Header />
      <div className="max-w-3xl px-4 mx-auto space-y-8">
        <div className="space-y-2">
          <h2 className="text-blue-500 fnt-medium text-3xl">{post.title}</h2>
          <div>{new Date(post.date).toLocaleDateString("en-US")}</div>
          <Tags tags={post.tags} />
          <div
            dangerouslySetInnerHTML={{ __html: post.body.html }}
            className="prose"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
