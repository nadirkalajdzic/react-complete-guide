import { useRouter } from "next/dist/client/router";
import React from "react";

function newsId() {
  const router = useRouter();

  return <div>News id: {router.query.newsId}</div>;
}

export default newsId;
