"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function BlogView() {
  const params = useSearchParams();
  const id = params.get("id");

  return (
    <div>
      Blog view — {id}
    </div>
  );
}

export default function BlogViewClient() {
  return (
    <Suspense fallback={<div>Loading…</div>}>
      <BlogView />
    </Suspense>
  );
}
