import Layout from "components/Layout";
import PageTitle from "components/PageTitle";
import { allPosts } from "contentlayer/generated";
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
    <Layout>
      <PageTitle
        title="Tags"
        description="A collection of topic and categoory tags to sort blog posts"
      />
      <div className="space-y-8">
        <div className="flex space-x-8 flex-wrap">
          {Object.keys(tags).map((tag) => {
            return (
              <Link href={`/tags/${tag.split(" ").join("-")}`}>
                <a className="uppercase inline-block">
                  <span className="text-blue-500">{tag}</span>{" "}
                  <span>({tags[tag]})</span>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default TagsPage;
