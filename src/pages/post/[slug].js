import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostServices from "../../services/PostServices";
import Head from "next/head";
import { FacebookShareButton, FacebookIcon } from "next-share";

const PostDetail = ({post}) => {
 console.log("post", post)
  return (
    <React.Fragment>
     <Head>
        <title>{post?.post?.title}</title>
        <meta
          name="description"
          content={post?.post?.short_description}
          key="desc"
        />
        <meta property="og:title" content={post?.post?.title} />
        <meta
          property="og:description"
          content={post?.post?.short_description}
        />
        <meta property="og:image" content={post?.post?.featured_image} />
      </Head>
      <div className="max-w-[1300px] relative mx-auto w-full flex flex-col blog-detail">
        <Image
          src={post?.post?.featured_image}
          alt="blog feature image"
          width={500}
          height={500}
        />

        <FacebookShareButton
          url={`https://blog-theta-vert.vercel.app/post/${post?.post?.slug}`}
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <h1 className="text-[#222E3A] lg:text-[24px] font-bold mt-[14px] block mb-[15px]">
          {post?.post?.title}
        </h1>
        <p className="text-[#222E3A]">{post?.post?.author}</p>
        <p className="text-[#222E3A] mb-[15px]">{post?.post?.created_at}</p>
        <p
          dangerouslySetInnerHTML={{ __html: post?.post?.long_description }}
        ></p>
      </div>
    </React.Fragment>
  );
};

export const getServerSideProps = async (context) => {
  const { slug } = context.params;

  console.log('slug', slug)
  const blogs = await PostServices.getPostDetail(slug);
  
  return {
    props: {
        post: blogs
    },
  };
};



export default PostDetail;
