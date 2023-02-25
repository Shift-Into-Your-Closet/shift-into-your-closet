import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AllShoesDocument,
  AllShoesQuery,
  ShoeDocument,
  ShoeFragment,
  ShoeQuery,
} from "../../graphql-operations";

import _Footwear from "../../components/modules/Footwear";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllShoesQuery>({
    query: AllShoesDocument,
  }));
  const allShoe: ShoeFragment[] = data?.allShoe ?? [];
  const slugs = allShoe
    .map(({ slug }) => slug?.current)
    .filter((slugString): slugString is string => Boolean(slugString));

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug,
      },
    })),
    fallback: false,
  };
};

type ShoeProps = {
  shoe: ShoeQuery["allShoe"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  ShoeProps,
  { slug: string }
> = async ({ params }) => {
  let shoeData;

  ({ data: shoeData } = await client.query<ShoeQuery>({
    query: ShoeDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const shoe = shoeData?.allShoe?.[0];

  return {
    props: { shoe },
    revalidate: 200,
    notFound: !shoe,
  };
};

const Footwear = _Footwear;

export default Footwear;
