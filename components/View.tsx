import React from "react";
import Ping from "./Ping";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/query";
import { client } from "@/sanity/lib/client";
import { after } from "next/server";
import { writeClient } from "@/sanity/lib/write-client";

const View = async ({ id }: { id: string }) => {
  // const { views } = await sanityFetch({
  //   query: STARTUP_VIEWS_QUERY,
  //   params: { id },
  // });

  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch(STARTUP_VIEWS_QUERY, { id });

  // TODO: Update the view count when the page is visited
  after(
    async () =>
      await writeClient
        .patch(id)
        .set({ views: totalViews + 1 })
        .commit()
  );

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>

      <p className="view-text">
        <span className="font-black">
          {totalViews === 1
            ? "1 View"
            : totalViews === 0
              ? "0 View"
              : `${totalViews} Views`}
        </span>
      </p>
    </div>
  );
};

export default View;
