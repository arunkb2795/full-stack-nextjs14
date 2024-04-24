import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>NotFound...</h1>
      <h3>Sorry, the page you are looking for does not exist</h3>
      <Link href="/">Return to home</Link>
    </>
  );
}
