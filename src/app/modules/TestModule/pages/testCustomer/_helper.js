import Axios from "axios";
import { toast } from "react-toastify";
export const getBlogPosts = async (setter) => {
  try {
    const res = await Axios.get(`https://jsonplaceholder.typicode.com/posts`);

    if (res.status === 200 && res?.data) {
      setter(res?.data?.slice(0, 15));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
export const createBlogPost = async (data) => {
  try {
    const res = await Axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      data
    );
    console.log(res);
    if (res.status === 201) {
      toast.success("Submitted succesfully");
    }
  } catch (error) {
    toast.error(error.message);
  }
};
