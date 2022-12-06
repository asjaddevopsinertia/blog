import React, { useEffect, useState } from "react";
import Image from "next/image";
import PostServices from "../../services/PostServices";
import { useRouter } from 'next/router'
import BlogCard from "../../component/blog-card/BlogCard";


const Category = () => {
  const [data, setData] = useState('')
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    const GetPosts = async() => {
      let data = await PostServices.getPostsByCategory(slug)
      setData(data)
    }

    GetPosts()
    
  },[])

  console.log("data", data)

  return (
      <div className='max-w-[1300px] relative mx-auto w-full flex'>
          
          <BlogCard blogs={data?.data} />
      </div>
  );
};


export default Category;
