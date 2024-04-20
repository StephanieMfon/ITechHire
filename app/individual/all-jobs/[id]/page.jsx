import SingleJob from "../../../../src/components/Individual/SingleJob/SingleJob";

export default function Page({ params }) {
  return (
    <>
      <SingleJob id={params.id} />
    </>
  );
}
