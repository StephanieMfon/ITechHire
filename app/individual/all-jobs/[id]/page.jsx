import dynamic from "next/dynamic";

const SingleJob = dynamic(
  () => import("../../../../src/components/Individual/SingleJob/SingleJob"),
  {
    ssr: false,
  }
);
export default function Page({ params }) {
  return (
    <>
      <SingleJob id={params.id} />
    </>
  );
}
