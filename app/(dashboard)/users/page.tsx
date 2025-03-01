import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 container h-full mx-auto">
      <h1 className="text-3xl uppercase">Dashboard Users</h1>

      <ul className="mt-3 p-10 flex gap-5">
        <li>
          <Link href="/dashboard/users/1">
            <p className="text-lime-500">Aaron</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">
            <p className="text-lime-500">Nick</p>
          </Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">
            <p className="text-lime-500">Joana</p>
          </Link>
        </li>
        <li>
          <Link href={""}>
            <p className="text-lime-500">Aurelie</p>
          </Link>
        </li>
        <li>
          <Link href={""}>
            <p className="text-lime-500">Laura</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Page;
