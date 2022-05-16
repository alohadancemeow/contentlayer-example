import Tags from "./Tags";

interface PostTitle {
  title: string;
  description: string;
  tags: string[];
  date: string;
}

export default function PostTitle({
  title,
  description,
  tags,
  date,
}: PostTitle) {
  return (
    <div className="border-b border-slate-200 pb-10 space-y-6">
      <p>
        {new Date(date).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <h2 className="text-5xl text-[color:var(--heading-color)] font-medium">
        {title}
      </h2>
      <div className="flex space-x-6">
        <Tags tags={tags} />
      </div>
      <p className="text-2xl">{description}</p>
    </div>
  );
}
