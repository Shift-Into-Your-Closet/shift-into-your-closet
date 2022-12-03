export default {
  name: "accessories",
  title: "Accessories",
  type: "document",
  fields: [
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Please provide a price for your accessories.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "brand",
      title: "Brand",
      type: "array",
      description:
        "Please select any and all brands that your accessory falls under.",
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [{ type: "accessoriesBrand" }],
        },
      ],
    },
    {
      title: "Condition",
      name: "condition",
      type: "string",
      description: "Please provide the condition of your accessory.",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: "Brand New", value: "brand-new" },
          { title: "Used", value: "used" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
        direction: "horizontal",
      },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "accessoriesCategory" }],
      description: "What is the category of your accessory?",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Please provide a photo of your accessory.",
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "array",
      description: "Please provide more photos if you'd like.",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "What is the name of your accessory?",
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
