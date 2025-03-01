import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  return (
    <section className="flex flex-col w-1/2 mx-auto p-10">
      <h1 className="text-3xl uppercase">User Profile:</h1>
      <div className="bg-slate-100 p-10 rounded">
        <ul className="">
          <li className="text-gray-600 text-xl">ID: {id}</li>
          <li className="text-gray-600 text-xl"></li>
          <li className="text-gray-600 text-xl"></li>
          <li className="text-gray-600 text-xl"></li>
          <li className="text-gray-600 text-xl"></li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
