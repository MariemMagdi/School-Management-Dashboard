import Image from "next/image";
import Link from "next/link";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      {/* LEFT */}
      <div className="w-[14%] md:w-[8%] l:w-[16%] xl:w-[14%] p-4">
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 lg:justify-start p-4"
        >
          <Image src="/logo.png" width={50} height={50} alt="logo" />
          <span className="hidden xl:block font-bold">SchoolLama</span>
        </Link>
        <Menu />
      </div>
      {/* RIGHT */}
      <div className="w-[86%] md:w-[92%] l:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll flex flex-col">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
