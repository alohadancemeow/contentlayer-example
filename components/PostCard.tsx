import Link from "next/link";
import { ArrowSmRightIcon } from "@heroicons/react/solid";
import Tags from "./Tags";

interface PostCard {
  title: string;
  description: string;
  tags: string[];
  date: string;
  url: string;
}

export default function PostCard({
  title,
  tags,
  date,
  description,
  url,
}: PostCard) {
  return (
    <div className="grid grid-cols-4">
      <div>
        {new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
      <div className="col-span-3 space-y-3">
        <h2 className="text-3xl font-medium text-[color:var(--heading-color)]">
          {title}
        </h2>
        <div className="flex space-x-6">
          <Tags tags={tags} />
        </div>
        <p>{description}</p>
        <Link href={url}>
          <a className="text-blue-500 flex items-center space-x-1">
            <span>Read More</span> <ArrowSmRightIcon className="w-6 h-6" />
          </a>
        </Link>
      </div>
    </div>
  );
}
