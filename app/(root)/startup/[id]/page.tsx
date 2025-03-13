/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import { STARTUP_QUERY } from "@/sanity/lib/query";
import { sanityFetch } from "@/sanity/lib/live";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Eye, Globe, Heart } from "lucide-react";
import { urlFor } from "@/components/StartupCard";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate } from "@/lib/utils";
import markdownit from "markdown-it";
import View from "@/components/View";

// Remove this if you're not using the canary version of Next.js
// export const experimental_ppr = true;

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  // Fetch startup data from Sanity
  const { data: post } = await sanityFetch({
    query: STARTUP_QUERY,
    params: { id },
  });

  if (!post) {
    return notFound();
  }

  const { image } = post;
  const placeholder = "https://placehold.co/600x400";

  const parsedPitch = markdownit().render(post?.pitch || "");

  return (
    <>
      {/* Header Section */}
      <header className="flex flex-col justify-between items-center pink-container">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post.title}</h1>
        <div className="w-[150px] shadow-100 bg-white p-1 profile_image">
          <Image
            src={
              post?.logo ? urlFor(post.logo).url() : `https://picsum.photos/200`
            }
            width={200}
            height={200}
            className="rounded-full object-cover"
            alt="logo"
          />
        </div>
        <div className="mt-5">
          <div className="flex flex-col items-center gap-3">
            <p className="category-tag !bg-primary-300">{post.category}</p>
            <p className="sub-heading text-center !max-w-3xl">
              {post.description}
            </p>
          </div>
        </div>
      </header>
      <div className="section-container">
        {/* Meta Section */}
        <section className="flex-between items-center mb-10">
          <Link
            href={`user/${post.author?._id}`}
            className="flex gap-2 items-center"
          >
            {/* Fetch the image of author */}
            <img
              src={post?.author?.image}
              className="rounded-full object-cover w-[60px] h-[60px] drop-shadow-md"
              alt="avatar"
              width={64}
              height={64}
            />
            <div>
              <p className="text-20-medium">{post.author.name}</p>
              <p className="text-16-medium !text-black-300">
                @{post.author.username}
              </p>
            </div>
          </Link>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-2">
              <Heart className="text-primary-300" /> Save
            </Button>
            <Button variant="outline">
              <Link
                href={post?.link || "#"}
                className="flex items-center gap-2"
              >
                <Globe className="text-primary-300" /> URL
              </Link>
            </Button>
            {post.views && (
              <Button variant="outline">
                <Eye className="text-primary-300" /> {post.views}
              </Button>
            )}
          </div>
        </section>
        {/* Image Section */}
        <div className="mt-6 rounded-lg overflow-hidden">
          {/* If image doesn not exist render "placeholder" */}
          <img
            src={
              image?.asset?._ref
                ? urlFor(image).quality(100).url()
                : placeholder
            }
            alt={post.title}
            className="rounded-xl shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Details Section */}
        <section className="my-8">
          <h2 className="text-2xl font-semibold mb-4">About This Startup</h2>
          {parsedPitch ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedPitch }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </section>

        <hr />

        <Suspense>
          <View id={id} />
        </Suspense>

        {/* Related Startups Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Related Startups</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Render related startups */}
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
