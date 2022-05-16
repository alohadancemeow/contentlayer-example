import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination({
  totalPages,
  currentPage = 1,
}: {
  totalPages: number;
  currentPage?: number;
}) {
  const router = useRouter();
  let arr = [];
  for (let i = 1; i <= totalPages; ++i) arr.push(i);
  return (
    <div className="flex space-x-6">
      <button
        disabled={currentPage === 1}
        onClick={() => router.push(`/pages/${currentPage - 1}`)}
        className="border py-1 px-2 disabled:text-gray-300 h-10 rounded"
      >
        Prev
      </button>
      {arr.map((val, i) => {
        return (
          <button key={i}>
            <Link href={`/pages/${val}`}>
              <a
                className={`border py-1 px-3 rounded h-10 block ${
                  currentPage === val ? "text-blue-500 border-blue-500" : ""
                }`}
              >
                {val}
              </a>
            </Link>
          </button>
        );
      })}
      <button
        disabled={currentPage === totalPages}
        onClick={() => router.push(`/pages/${currentPage + 1}`)}
        className="border py-1 px-2 disabled:text-gray-300 h-10 rounded"
      >
        Next
      </button>
    </div>
  );
}
