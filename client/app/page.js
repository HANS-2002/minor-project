// "use client";
import Render from "../lib/components/rendergallery";

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-bold underline ml-5">
        This is the homepage
      </h1>
      {Render && <Render page='0' />}
    </>
  );
}
