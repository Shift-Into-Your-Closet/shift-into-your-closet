export default {
  name: "apparel",
  title: "Apparel",
  type: "document",
  fields: [
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "Please provide a price for your item.",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "brand",
      title: "Brand",
      type: "array",
      description:
        "Please select any and all brands that your item falls under.",
      validation: (Rule: any) => Rule.required(),
      of: [
        {
          type: "reference",
          to: [{ type: "apparelBrand" }],
          description:
            "Please choose a brand from the dropdown or use the create new button to add a new brand.",
        },
      ],
    },
    {
      name: "condition",
      title: "Condition",
      type: "string",
      description: "Please provide the condition of your item.",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: "Brand New", value: "brand-new" },
          { title: "Tried On", value: "tried-on" },
          { title: "Worn", value: "worn" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
        // direction: "horizontal",
      },
    },
    {
      name: "size",
      title: "Size",
      type: "reference",
      to: [{ type: "apparelSize" }],
      description: "What is the size of this item? (if possible)",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "apparelCategory" }],
      description: "What is the category of this item?",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      description: "Please provide a photo of your item.",
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
      description: "What is the name of your item?",
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
