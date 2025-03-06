"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const reset = () => {
  const form = document.querySelector(".search-form") as HTMLFormElement;

  if (form) form.reset();
};

const SearchFormReset = () => {
  return (
    <>
      <Button type="reset" onClick={reset} className="search-btn">
        <Link href="/">
          <X size={20} color="#fff" />
        </Link>
      </Button>
    </>
  );
};

export default SearchFormReset;
