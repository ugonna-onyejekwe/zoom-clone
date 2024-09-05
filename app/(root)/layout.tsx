import Navbar from "@/components/navbar";
import SideBar from "@/components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en">
      <Navbar />
      <section className="flex">
        <SideBar />
        <div className="flex flex-1 bg-dark-2 min-h-screen h-fit p-10 max-md:p-5">
          {children}
        </div>
      </section>
    </main>
  );
}
