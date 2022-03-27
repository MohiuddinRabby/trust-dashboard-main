import Axios from "axios";

export const getBlogPosts = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`);

    if (res.status === 200 && res?.data) {
      setter(res?.data?.slice(0,15));
    }
  } catch (error) {
    console.log(error.message);
  }
};
