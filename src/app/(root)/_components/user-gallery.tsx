'use client'

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { paginationAmount } from "@/constants/templates";
import DocumentsTable from "./documents-table";

export default function UserGallery() {
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    {},
    { initialNumItems: paginationAmount },
  );

  return (
    <DocumentsTable documents={results} loadMore={loadMore} status={status} />
  );
}
