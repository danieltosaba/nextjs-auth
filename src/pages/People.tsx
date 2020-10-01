import { NextPageContext } from "next";
import { myGet } from "../../api/myGet";

export default function People({ people }: any) {
  return <div>{JSON.stringify(people)}</div>;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const people = await myGet("http://localhost:3000/api/people", ctx);
  
  return {
    props: { people }, // will be passed to the page component as props
  };
}
