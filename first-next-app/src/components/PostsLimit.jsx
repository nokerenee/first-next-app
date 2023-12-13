"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

// Client component allowing user to choose the number of posts displayed
// and set new value in search params
export default function PostsLimit({ defaultLimit, defaultPage }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const limit = searchParams.has("limit")
    ? searchParams.get("limit")
    : defaultLimit;
  const page = searchParams.has("page")
    ? searchParams.get("page")
    : defaultPage;

  const handleChangeLimit = (e) => {
    // change the route to the existing path plus the new search param
    router.replace(`${pathname}?limit=${e.target.value}&page=${page}`);
  };

  const handleChangePage = (e) => {
    router.replace(`${pathname}?limit=${limit}&page=${e.target.value}`);
  };

  return (
    <div className="PostsLimit">
      <label>
        Number of posts:
        <select onChange={handleChangeLimit} value={limit}>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </label>
      <label>
        Current Page:
        <select onChange={handleChangePage} value={page}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          {/* Add more options as needed */}
        </select>
      </label>
    </div>
  );
}
