export default {
  name: "footwearCategory",
  title: "Footwear (Category)",
  description: "Please provide the cateogory that your item falls under.",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      description: "Please provide a new footwear category.",
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
