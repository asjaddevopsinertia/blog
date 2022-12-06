import requests from './httpServices';

const CategoryServices = {
  getCategories() {
    return requests.get('/get-categories');
  },
};

export default CategoryServices;
