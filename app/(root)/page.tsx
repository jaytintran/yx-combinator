import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
// import go from "@/assets/go.svg";

// import Image from "next/image";
export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 13,
      author: {
        _id: 1,
        name: "Eddie Morra",
        image: "https://i.pravatar.cc/300",
      },
      description: "Example of description",
      // image: go,
      image: "https://placehold.co/600x400",
      category: "Design",
      title: "We Robot",
    },
  ];

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
            posts.map((post) => <StartupCard key={post?._id} post={post} />)
          ) : (
            <p>No results found</p>
          )}
        </ul>
      </section>
    </>
  );
}
