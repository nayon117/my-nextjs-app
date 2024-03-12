import Counter from "@/components/Counter/Counter";
import Link from "next/link";

const HomePage = () => {
  // throw new Error( );
  return (
    <div>
      <h1 className="text-2xl"> This is Next app </h1>
      <Counter/>
      <Link href='/about' >
      <button className="btn-sm btn btn-accent mt-3">About</button>
      </Link>
      <Link href='/news' className="mt-3">
      <button className="btn-sm btn btn-accent ml-3">News</button>
      </Link>
    </div>
  );
};
export default HomePage;
