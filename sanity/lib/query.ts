import { defineQuery } from "groq";

// export const STARTUPS_QUERY =
//   defineQuery(` *[_type == "startup" && defined(slug.current) | order(_createdAt desc)] {
//     title,
//     _id,
//     slug,
//     _createdAt,
//     image,
//     author -> {
//       _id,
//       name,
//       image,
//       bio
//     },
//     views,
//     description
// }`);

export const POSTS_QUERY = defineQuery(
  `*[_type == "startup" && defined(slug.current) && (!defined($search) || title match $search || category match $search || author->name match $search)] | order(_createdAt desc) {
      title,
      _id,
      slug,
      _createdAt,
      image,
      author -> {
        _id,
        name,
        image,
        bio
      },
      views,
      description,
      category
  }`
);

export const STARTUP_QUERY = defineQuery(
  `*[_type == "startup" && _id == $id][0] {
    title,
    _id,
    slug,
    _createdAt,
    image,
    author -> {
      _id,
      name,
      image,
      bio,
      username
    },
    views,
    description,
    category, 
    pitch,
    link
}`
);
