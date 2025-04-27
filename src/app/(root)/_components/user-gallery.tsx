"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function UserGallery() {
  const documents = useQuery(api.documents.get);
  if (documents == undefined) return <p>Loading...</p>;
  return (
    <>
      {documents?.map((document) => (
        <span key={document._id}>{document.title}</span>
      ))}

      <div>UserGallery</div>
    </>
  );
}
