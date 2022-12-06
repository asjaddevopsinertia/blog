import requests from './httpServices';

const PostServices = {
  getPosts() {
    return requests.get('/get-posts?page=1&per_page=20');
  },
  getPostDetail(slug) {
    return requests.get(`/get-post-detail?slug=${slug}`);
  },
  getPostsByCategory(slug){
    return requests.get(`/category-detail?slug=${slug}&per_page=50&page=1`);
  }
};

export default PostServices;