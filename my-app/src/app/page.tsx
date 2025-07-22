import Image from "next/image";
import PageHeader from "../../components/PageHeader";
import CategoryListing from "../../components/CategoryListing";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#232830] ">
        {/* Page Header */}
        <PageHeader />

        {/* Category Listing */}
        <div className="w-full border-t-1 border-[#4D4D4D] mt-32"></div>
        <CategoryListing />
      </div>
    </>
  );
}
