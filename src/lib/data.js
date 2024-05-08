import { Post } from "./models";
import { connectToDB } from "./utils";

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getAllPosts = async () => {
  try {
    connectToDB();
    const post = await Post.find();
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};
