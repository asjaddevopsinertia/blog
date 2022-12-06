import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogs }) => {
  return (
    <div className="flex w-full pl-[32px]">
      <div className="w-full pl-[16px] flex flex-wrap pt-[10px] pr-[0] pb-[10px] pb-[16px]">
        {blogs?.posts?.map((blog) => {
          return (
            <div key={blog.id} className="relative w-[310px] mr-[20px] mb-[20px] rounded-[20px] flex-[0_0_auto] shadow-lg drop-shadow">
              <div className="h-full text-left">
                <Link href={`/post/${blog.slug}`}>
                <Image
                  src={blog?.featured_image}
                  alt="blog feature image"
                  width={500}
                  height={500}
                  className="rounded-t-[20px]"
                />
                </Link>
                <div className="pt-[24px] pl-[20px] pr-[20px]">
                <a className="pill text-[#4D71FF]">
                  <p className="inline-block pt-[6px] pb-[6px] pl-[16px] pr-[16px] rounded-[20px] bg-[#E8EBF0] text-[#4D71FF] text-[14px] font-bold">{blog?.category[1]?.name}</p>
                </a>
                <h2 className="text-[#222E3A] lg:text-[18px] font-bold mt-[14px] block mb-[10px]">{blog?.title}</h2>
                <p className="line-clamp-5 font-[400] text-black text-[15px]">{blog?.short_description}</p>
                <Link href={`/post/${blog.slug}`}>
                <div className="button font-[300] text-[13px] mb-[24px] mt-[24px]"><span> Read more </span></div>
                </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogCard;
