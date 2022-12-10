import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AccessoryDocument,
  AccessoryFragment,
  AccessoryQuery,
  AllAccessoryDocument,
  AllAccessoryQuery,
} from "../../graphql-operations";

import _Accessory from "../../components/modules/Accessory";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllAccessoryQuery>({
    query: AllAccessoryDocument,
  }));
  const allAccessories: AccessoryFragment[] = data?.allAccessory ?? [];
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
  accessory: AccessoryQuery["allAccessory"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  AccessoryProps,
  { slug: string }
> = async ({ params }) => {
  let accessoryData;

  ({ data: accessoryData } = await client.query<AccessoryQuery>({
    query: AccessoryDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const accessory = accessoryData?.allAccessory?.[0];

  return {
    props: { accessory },
    revalidate: 200,
    notFound: !accessory,
  };
};

const Accessory = _Accessory;

export default Accessory;
