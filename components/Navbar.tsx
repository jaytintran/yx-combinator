import { auth, signOut, signIn } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();

  return (
    <header className="px-5 bg-white shadow-sm font-work-sans ">
      <nav className="flex justify-between items-center py-5">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session.user ? (
            <>
              <Link href="/startup/create" className="nav-link">
                Create
              </Link>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className="nav-link"
              >
                <button type="submit">Logout</button>
              </form>
              <Link href={`/user/${session.user.id}`} className="nav-link">
                <span>{session?.user?.name}</span>
              </Link>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  "use server";
                  await signIn("github");
                }}
                className="nav-link"
              >
                <button type="submit">Login</button>
              </form>
              <Link href="/signup" className="nav-link">
                Signup
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
