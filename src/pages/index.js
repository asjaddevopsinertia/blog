import BlogCard from '../component/blog-card/BlogCard';
import PostServices from '../services/PostServices';
import CategoryServices from '../services/CategoryServices'
import CategoryDrawer from '../component/drawer/CategoryDrawer';

const Blog = ({ blogs, categories }) => {
  return (
    <>
      <div className='max-w-[1300px] relative mx-auto w-full flex'>
          <CategoryDrawer categories={categories} />
          <BlogCard blogs={blogs} />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const blogs = await PostServices.getPosts();
  const categories = await CategoryServices.getCategories()

  return {
    props: {
        blogs: blogs,
        categories: categories
    },
  };
};

export default Blog;
