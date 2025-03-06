"use client";
import { SearchIcon } from "lucide-react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Button } from "./ui/button";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        type="text"
        placeholder="Search for startups..."
        className="search-input"
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <Button type="submit" className="search-btn hover:scale-120">
          <SearchIcon size={20} color="#fff" />
        </Button>
      </div>
    </Form>
  );
};

export default SearchForm;
