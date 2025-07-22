import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-[#232830]">
        <div className="max-w-[1236px] mx-auto pt-16 flex  flex-col  ">
          <div className="flex justify-between">
            <div className="">
              <p>Writings.Dev</p>
            </div>
            <div className="flex gap-4">
              <p>Categories</p>
              <p>Articles</p>
              <p>About</p>
            </div>
          </div>
          <div className="text-center flex flex-col justify-center items-center pt-16">
            {/* logo */}
            <div>
              <Image
                src={"/Logo.png"}
                height={205}
                width={195}
                alt="Logo"
              ></Image>
            </div>
            <div>
              <p className="text-[71px] text-[#FF7575]">
                Writings for Developers
              </p>
              <p className="text-[24px]">
                Curated collection of articles for busy developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
