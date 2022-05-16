import { allPosts } from "contentlayer/generated";
import Header from "components/Header";
import { GetStaticProps, NextPage } from "next";
import Link from "next/link";

interface Tags {
  [key: string]: number;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const tags: Tags = {};
  allPosts.forEach((post) => {
    post.tags.forEach((tag: string) => {
      if (!tags[tag]) tags[tag] = 1;
      else tags[tag]++;
    });
  });
  return {
    props: {
      tags,
    },
  };
};

const TagsPage: NextPage<{ tags: Tags }> = ({ tags }) => {
  return (
    <div className="my-20">
      <Header />
      <div className="max-w-3xl px-4 mx-auto space-y-8">
        <div className="flex space-x-2 flex-wrap">
          {Object.keys(tags).map((tag) => {
            return (
              <div className="bg-blue-100 px-2 py-1 rounded-xl text-sm">
                <Link href={`/tags/${tag.split(" ").join("-")}`}>
                  <a>
                    {tag} ({tags[tag]})
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TagsPage;
