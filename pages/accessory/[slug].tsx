import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AccessoriesDocument,
  AccessoriesFragment,
  AccessoriesQuery,
  AllAccessoryDocument,
  AllAccessoryQuery,
  AllShoesDocument,
  AllShoesQuery,
  ShoeDocument,
  ShoeFragment,
  ShoeQuery,
} from "../../graphql-operations";

import _Accessory from "../../components/modules/Accessory";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllAccessoryQuery>({
    query: AllAccessoryDocument,
  }));
  const allAccessories: AccessoriesFragment[] = data?.allAccessories ?? [];
  const slugs = allAccessories
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

type AccessoryProps = {
  accessory: AccessoriesQuery["allAccessories"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  AccessoryProps,
  { slug: string }
> = async ({ params }) => {
  let accessoryData;

  ({ data: accessoryData } = await client.query<AccessoriesQuery>({
    query: AccessoriesDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const accessory = accessoryData?.allAccessories?.[0];

  return {
    props: { accessory },
    revalidate: 200,
    notFound: !accessory,
  };
};

const Accessory = _Accessory;

export default Accessory;
