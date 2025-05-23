"use client";

import Link from "next/link";
import { AlertTriangleIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-6">
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="bg-rose-100 p-3 rounded-full">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-xl font-semibold text-gray-900">
            Something went wrong
          </h1>
          <p>{error.message}</p>
        </div>
      </div>
      <div className="flex items-center gap-x-3">
        <Button className="font-medium px-6" onClick={reset}>
          Try again
        </Button>
        <Button asChild className="font-medium" variant="ghost">
          <Link href="/">Go back</Link>
        </Button>
      </div>
    </div>
  );
}
