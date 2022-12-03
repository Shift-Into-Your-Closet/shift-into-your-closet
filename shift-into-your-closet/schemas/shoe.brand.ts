export default {
  name: "shoeBrand",
  title: "Brand (Shoes)",
  description: "Shoe Brand",
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
      description: "Please click on generate to create your unique url.",
      options: {
        source: "name",
        maxLength: 90,
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
