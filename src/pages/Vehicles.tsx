import { NextPageContext } from "next";
import { myGet } from "../../api/myGet";

export default function People({ vehicles }: any) {
  return <div>{JSON.stringify(vehicles)}</div>;
}

export async function getServerSideProps(ctx: NextPageContext) {
  const vehicles = await myGet("http://localhost:3000/api/vehicles", ctx);
  
  return {
    props: { vehicles }, // will be passed to the page component as props
  };
}
