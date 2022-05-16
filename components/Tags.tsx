import Link from "next/link";

export default function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex space-x-2">
      {tags.map((tag) => {
        return (
          <div className="bg-blue-100 px-2 py-1 rounded text-sm">
            <Link href={`/tags/${tag.split(" ").join("-")}`}>{tag}</Link>
          </div>
        );
      })}
    </div>
  );
}
