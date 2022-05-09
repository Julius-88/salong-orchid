import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="font-bold underline text-center pt-20">
      <h1>The page cannot be found.</h1>
      <p>
        Go back to the{" "}
        <Link href="/">
          <a>Homepage</a>
        </Link>
      </p>
    </div>
  );
};
export default Error;
