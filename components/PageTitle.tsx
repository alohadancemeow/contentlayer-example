interface PageTitle {
  title: string;
  description?: string;
}

export default function PageTitle({ title, description }: PageTitle) {
  return (
    <div className="border-b border-slate-200 dark:border-gray-700 pb-10">
      <h2 className="text-5xl font-medium mb-6 text-[color:var(--heading-color)]">
        {title}
      </h2>
      {description && <p className="text-2xl">{description}</p>}
    </div>
  );
}
