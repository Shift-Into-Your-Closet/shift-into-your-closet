export default {
  name: "accessoriesBrand",
  title: "Brand (Accessories)",
  description: "Accessories Brand",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Please provide the name of this brand.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Unique URL",
      type: "slug",
      description:
        "Your unique url will be created by clicking on the generate button.",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
