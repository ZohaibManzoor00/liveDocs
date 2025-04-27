import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href="/">
      <Image
        src="/logo.svg"
        alt="Logo"
        width={36}
        height={36}
        className="w-9 h-8"
      />
    </Link>
  );
}
