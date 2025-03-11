/* eslint-disable @next/next/no-img-element */
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { Author, Startup } from "@/sanity/types";

export type StartupTypeCard = Omit<Startup, "author"> & { author?: Author };

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    title,
    description,
    _id,
    author,
    views,
    category,
    image,
    _createdAt,
  } = post;
  return (
    <li className="startup-card group">
      {/* Project Date & Views Count */}
      <div className="flex-between">
        <p className="start-up_date text-12-thin">
          {formatDate(new Date(_createdAt))}
        </p>

        <div className="flex-center gap-1.5">
          <EyeIcon size={20} className="text-primary-300" />
          <span className="text-12-thin">{views}</span>
        </div>
      </div>

      {/* Project Overview & Author */}
      <div className="flex-between mt-6 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-12-thin line-clamp-1 text-xs">{author?.name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="startup-card_title">{title}</h3>
          </Link>
        </div>

        <Link href={`/startup/${_id}`}>
          <Image
            src={author?.image ?? "/default-image.jpg"}
            alt="Profile's Photo"
            className="rounded-full w-[60px] h-[60px] object-cover"
            width={60}
            height={60}
          />
        </Link>
      </div>

      {/* Project Desc, Image & Tag  */}
      <div>
        <Link href={`/startup/${_id}`}>
          <p className="startup-card_desc">{description}</p>
        </Link>

        <img
          src={image?.asset?._ref && urlFor(image).width(600).url()}
          alt={title}
          className="startup-card_img"
        />
      </div>

      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium category-tag max-w-fit">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>View Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
