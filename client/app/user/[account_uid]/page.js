// "use client";

export default function Page({ params }) {
  return (
    <>
      <h1 className="text-3xl font-bold underline ml-5">Hello {params.account_uid}!</h1>
    </>
  );
}
