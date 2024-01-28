"use client";

import { usePathname } from "next/navigation";

export default function DynamicProject() {
  const pathname = usePathname().split("/").pop();
  return <div>Dimanico - {pathname}</div>;
}
