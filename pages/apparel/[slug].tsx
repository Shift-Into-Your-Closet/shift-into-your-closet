import { GetStaticPaths, GetStaticProps } from "next";

import client from "../../apollo-client";
import {
  AllApparelsDocument,
  AllApparelsQuery,
  ApparelDocument,
  ApparelFragment,
  ApparelQuery,
} from "../../graphql-operations";

import _Apparel from "../../components/modules/Apparel";

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {
  let data;
  ({ data } = await client.query<AllApparelsQuery>({
    query: AllApparelsDocument,
  }));
  const allApparel: ApparelFragment[] = data?.allApparel ?? [];
  const slugs = allApparel
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

type ApparelProps = {
  apparel: ApparelQuery["allApparel"][0] | undefined;
};

export const getStaticProps: GetStaticProps<
  ApparelProps,
  { slug: string }
> = async ({ params }) => {
  let apparelData;

  ({ data: apparelData } = await client.query<ApparelQuery>({
    query: ApparelDocument,
    variables: {
      slug: params?.slug,
    },
  }));

  const apparel = apparelData?.allApparel?.[0];

  return {
    props: { apparel },
    revalidate: 200,
    notFound: !apparel,
  };
};

const Apparel = _Apparel;

export default Apparel;
