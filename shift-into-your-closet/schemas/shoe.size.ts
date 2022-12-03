export default {
  name: "shoeSize",
  title: "Shoe (Size)",
  type: "document",
  fields: [
    {
      name: "shoeSize",
      title: "Shoe (Size)",
      type: "string",
      description: "Please provide the size of your shoes.",
      validation: (Rule: any) => Rule.required(),
    },
  ],
};
