import { wixClientServer } from "@/lib/wixClientServer";
import ClientNavbar from "./ClientNavbar";

export default async function Navbar() {
  const wixClient = await wixClientServer();
  const cats = await wixClient.collections.queryCollections().find();

  // Normalize collections into Category[] safely
  const validCats = cats.items
    .filter((item) => item._id && item.slug && item.name) // only valid ones
    .map((item) => ({
      _id: item._id!, // non-null assertion, safe after filter
      slug: item.slug!,
      name: item.name!,
    }));

  return <ClientNavbar cats={validCats} />;
}
