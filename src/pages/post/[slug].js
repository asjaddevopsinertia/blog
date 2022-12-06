import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostServices from "../../services/PostServices";
import { useRouter } from "next/router";
import { FacebookShareButton, FacebookIcon } from "next-share";
import Head from 'next/head';

const PostDetail = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const GetPostsDetail = async () => {
      let data = await PostServices.getPostDetail(slug);
      setData(data);
    };

    GetPostsDetail();
  }, []);

  console.log("data", data);

  return (
    <>
      <Head>
        <title>{data?.post?.title}</title>
        <meta
          name="description"
          content={data?.post?.short_description}
          key="desc"
        />
        <meta property="og:title" content={data?.post?.title} />
        <meta
          property="og:description"
          content={data?.post?.short_description}
        />
        <meta property="og:image" content={data?.post?.featured_image} />
      </Head>
      <div className="max-w-[1300px] relative mx-auto w-full flex flex-col blog-detail">
        <Image
          src={data?.post?.featured_image}
          alt="blog feature image"
          width={500}
          height={500}
        />

        <FacebookShareButton
          url={`https://blog-theta-vert.vercel.app/post/${slug}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <h1 className="text-[#222E3A] lg:text-[24px] font-bold mt-[14px] block mb-[15px]">
          {data?.post?.title}
        </h1>
        <p className="text-[#222E3A]">{data?.post?.author}</p>
        <p className="text-[#222E3A] mb-[15px]">{data?.post?.created_at}</p>
        <p
          dangerouslySetInnerHTML={{ __html: data?.post?.long_description }}
        ></p>
      </div>
    </>
  );
};

export default PostDetail;
