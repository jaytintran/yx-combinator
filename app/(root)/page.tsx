// import Image from "next/image";

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();

  return (
    <>
      <h1 className="text-2xl">Home</h1>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 container mx-auto py-10">
        {albums.slice(0, 10).map((album: { id: number; title: string }) => (
          <div
            key={album.id}
            className="bg-white text-black shadow-md rounded-lg p-4 transition hover:scale-105 hover:shadow-lg"
            >
            <h2 className="text-lg font-bold mb-2">{album.title}</h2>
            <p className="text-gray-600 text-xs">{album.id}</p>
          </div>
        ))}
      </div>
    </>
  );
}
