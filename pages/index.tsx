import Header from "components/Header";
import Tags from "components/Tags";
import { allPosts } from "contentlayer/generated";
import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="my-20">
      <Header />
      <div className="max-w-3xl px-4 mx-auto space-y-8">
        {allPosts.map((post) => {
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

export default Home;
