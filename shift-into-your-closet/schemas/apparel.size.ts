export default {
  name: "apparelSize",
  title: "Apparel (Size)",
  type: "document",
  fields: [
    {
      name: "apparelSize",
      title: "Apparel (Size)",
      type: "string",
      description: "Please provide the size of your item.",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
