// src/components/shared/Navbar.tsx
import Link from "next/link";
import { wixClientServer } from "@/lib/wixClientServer";
import ClientNavbar from "./ClientNavbar";

export default async function Navbar() {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  return <ClientNavbar cats={cats.items} />;
}
