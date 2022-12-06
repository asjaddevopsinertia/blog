import React from "react";
import Image from "next/image";
import Link from 'next/link'

const CategoryDrawer = ({ categories }) => {
  console.log("categories", categories?.categories);
  return (
    <div className="flex flex-col p-[32px] relative shadow-lg drop-shadow h-[100%] min-w-[240px] rounded-[20px]">
      <div className="flex mb-[12px] justify-start align-center font-bold">
      <Image src="/images/menu.png" alt="me" width="24" height="24" />
      <h2 className="text-[#222E3A] font-bold max-w-[100%] ml-[8px]">Categories</h2>
      </div>
  
      {categories?.categories?.map((category) => {
        return (
          <Link key={category.id} href={`/category/${category?.slug}`}>
          <div className=" pt-[7px] pb-[7px] text-[#222E3A] text-[16px]">
            {category?.name}
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryDrawer;
