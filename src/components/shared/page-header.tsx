"use client";
import { BackMenu } from "../icons";
import { useRouter } from "next/navigation";

type PageHeaderProps = {
  pageName: string;
};

export default function PageHeader({ pageName }: PageHeaderProps) {
  const router = useRouter();

  return (
    <div className="w-full flex flex-row items-center px-4 py-5">
      <BackMenu
        className="cursor-pointer text-white size-6"
        onClick={() => router.back()}
      />

      {/* Header Text */}
      <div className="flex-1">
        <p className=" font-roboto font-bold text-lg text-white text-center">
          {pageName}
        </p>
      </div>
    </div>
  );
}
