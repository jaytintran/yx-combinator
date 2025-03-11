import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
// import { client } from "@/sanity/lib/client";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/query";
// import go from "@/assets/go.svg";

// import Image from "next/image";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  // const posts = await client.fetch(POSTS_QUERY);
  // console.log(JSON.stringify(posts, null, 2));
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });

  return (
    <>
      <section className="pink-container pattern">
        <h1 className="heading">
          Find or Create Your Favorite Start-up FAST. <br /> Connect with Other
          Solopreneurs.
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, & Get Noticed.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section-container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "Trending Startups"}
        </p>

        <ul className="mt-7 card-grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
