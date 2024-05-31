"use client";

import { Blog } from "@/interfaces/blog.interface";
import BoxedContainer from "../boxed-container";
import { BLOGS } from "@/utils/blogs-data";
import Image from "next/image";

const BlogSection = () => {
  return (
    <BoxedContainer>
      <h2 className="text-orange-500 text-sm font-semibold text-center">
        {BLOGS?.heading}
      </h2>
      <h3 className="font-bold text-3xl md:text-4xl mt-2 mb-10 text-center">
        {BLOGS?.subheading}
      </h3>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {BLOGS?.blogs?.slice(0, 3)?.map((blog: Blog) => {
          return (
            <article
              key={blog?.title}
              className="rounded-lg shadow-md overflow-hidden"
            >
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src={blog?.image}
                  fill
                  className="rounded-t-lg object-cover"
                  alt={blog?.title}
                />
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <div className="text-xs font-semibold text-white inline-block bg-orange-500 rounded-md shadow-sm px-2 py-1">
                    {blog?.category}
                  </div>
                </div>
                <h3 className="text-2xl font-semibold">{blog?.title}</h3>
                <p className="text-sm opacity-75 mt-2">{blog?.excerpt}</p>
              </div>
            </article>
          );
        })}
      </div>
    </BoxedContainer>
  );
};

export default BlogSection;
