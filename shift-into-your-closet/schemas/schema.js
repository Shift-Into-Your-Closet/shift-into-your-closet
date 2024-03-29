// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import apparel from "./apparel";
import apparelBrand from "./apparel.brand";
import shoe from "./shoe";
import shoeBrand from "./shoe.brand";
import apparelSize from "./apparel.size";
import shoeSize from "./shoe.size";
import apparelCategory from "./apparel.category";
import accessory from "./accessory";
import accessoryBrand from "./accessory.brand";
import accessoryCategory from "./accessory.category";
import footwearCategory from "./footwear.category";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: "default",
  types: schemaTypes.concat([
    apparel,
    apparelBrand,
    apparelCategory,
    apparelSize,
    accessory,
    accessoryBrand,
    accessoryCategory,
    footwearCategory,
    shoe,
    shoeBrand,
    shoeSize,
  ]),
});
