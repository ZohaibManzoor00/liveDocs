'use client'

import { usePaginatedQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { paginationAmount } from "@/constants/templates";
import DocumentsTable from "./documents-table";
import { useSearchParam } from "@/hooks/use-search-param";

export default function UserGallery() {
  const [search] = useSearchParam('search')
  const { results, status, loadMore } = usePaginatedQuery(
    api.documents.get,
    { search },
    { initialNumItems: paginationAmount },
  );

  return (
    <DocumentsTable documents={results} loadMore={loadMore} status={status} />
  );
}
