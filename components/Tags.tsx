import Link from "next/link";

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex space-x-6">
      {tags.map((tag) => {
        return (
          <Link href={`/tags/${tag.split(" ").join("-")}`}>
            <a className="text-blue-500 uppercase border-b-2 border-transparent hover:border-blue-500">
              {tag}
            </a>
          </Link>
        );
      })}
    </div>
  );
}
