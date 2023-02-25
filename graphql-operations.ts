import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
};

export type Accessory = Document & {
  __typename?: 'Accessory';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Array<Maybe<AccessoryBrand>>>;
  /** What is the category of your accessory? */
  category?: Maybe<AccessoryCategory>;
  /** Please provide the condition of your accessory. */
  condition?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Image>>>;
  mainImage?: Maybe<Image>;
  /** What is the name of your accessory? */
  name?: Maybe<Scalars['String']>;
  /** Please provide a price for your accessories. */
  price?: Maybe<Scalars['Float']>;
  slug?: Maybe<Slug>;
};

export type AccessoryBrand = Document & {
  __typename?: 'AccessoryBrand';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide the name of this brand. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type AccessoryBrandFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type AccessoryBrandSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type AccessoryCategory = Document & {
  __typename?: 'AccessoryCategory';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide a new apparel category. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type AccessoryCategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type AccessoryCategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type AccessoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  category?: InputMaybe<AccessoryCategoryFilter>;
  condition?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type AccessorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Apparel = Document & {
  __typename?: 'Apparel';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Array<Maybe<ApparelBrand>>>;
  /** What is the category of this item? */
  category?: Maybe<ApparelCategory>;
  /** Please provide the condition of your item. */
  condition?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Image>>>;
  mainImage?: Maybe<Image>;
  /** What is the name of your item? */
  name?: Maybe<Scalars['String']>;
  /** Please provide a price for your item. */
  price?: Maybe<Scalars['Float']>;
  /** What is the size of this item? (if possible) */
  size?: Maybe<ApparelSize>;
  slug?: Maybe<Slug>;
};

export type ApparelBrand = Document & {
  __typename?: 'ApparelBrand';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide the name of this brand. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type ApparelBrandFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type ApparelBrandSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type ApparelCategory = Document & {
  __typename?: 'ApparelCategory';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide a new apparel category. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type ApparelCategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type ApparelCategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type ApparelFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  category?: InputMaybe<ApparelCategoryFilter>;
  condition?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  size?: InputMaybe<ApparelSizeFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type ApparelSize = Document & {
  __typename?: 'ApparelSize';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide the size of your item. */
  apparelSize?: Maybe<Scalars['String']>;
};

export type ApparelSizeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  apparelSize?: InputMaybe<StringFilter>;
};

export type ApparelSizeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  apparelSize?: InputMaybe<SortOrder>;
};

export type ApparelSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Block = {
  __typename?: 'Block';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  children?: Maybe<Array<Maybe<Span>>>;
  list?: Maybe<Scalars['String']>;
  style?: Maybe<Scalars['String']>;
};

export type BooleanFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Boolean']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Boolean']>;
};

export type CrossDatasetReference = {
  __typename?: 'CrossDatasetReference';
  _dataset?: Maybe<Scalars['String']>;
  _key?: Maybe<Scalars['String']>;
  _ref?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  _weak?: Maybe<Scalars['Boolean']>;
};

export type CrossDatasetReferenceFilter = {
  _dataset?: InputMaybe<StringFilter>;
  _key?: InputMaybe<StringFilter>;
  _ref?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _weak?: InputMaybe<BooleanFilter>;
};

export type CrossDatasetReferenceSorting = {
  _dataset?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _ref?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _weak?: InputMaybe<SortOrder>;
};

export type DateFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Date']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Date']>;
};

export type DatetimeFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['DateTime']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['DateTime']>;
};

/** A Sanity document */
export type Document = {
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
};

export type DocumentFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
};

export type DocumentSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
};

export type File = {
  __typename?: 'File';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityFileAsset>;
};

export type FileFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityFileAssetFilter>;
};

export type FileSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
};

export type FloatFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Float']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Float']>;
};

export type FootwearCategory = Document & {
  __typename?: 'FootwearCategory';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide a new footwear category. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type FootwearCategoryFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type FootwearCategorySorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Geopoint = {
  __typename?: 'Geopoint';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  alt?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
};

export type GeopointFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  alt?: InputMaybe<FloatFilter>;
  lat?: InputMaybe<FloatFilter>;
  lng?: InputMaybe<FloatFilter>;
};

export type GeopointSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  alt?: InputMaybe<SortOrder>;
  lat?: InputMaybe<SortOrder>;
  lng?: InputMaybe<SortOrder>;
};

export type IdFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['ID']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['ID']>;
  nin?: InputMaybe<Array<Scalars['ID']>>;
};

export type Image = {
  __typename?: 'Image';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  asset?: Maybe<SanityImageAsset>;
  crop?: Maybe<SanityImageCrop>;
  hotspot?: Maybe<SanityImageHotspot>;
};

export type ImageFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  asset?: InputMaybe<SanityImageAssetFilter>;
  crop?: InputMaybe<SanityImageCropFilter>;
  hotspot?: InputMaybe<SanityImageHotspotFilter>;
};

export type ImageSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  crop?: InputMaybe<SanityImageCropSorting>;
  hotspot?: InputMaybe<SanityImageHotspotSorting>;
};

export type IntFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than the given input. */
  gt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is greater than or equal to the given input. */
  gte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than the given input. */
  lt?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is lesser than or equal to the given input. */
  lte?: InputMaybe<Scalars['Int']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['Int']>;
};

export type RootQuery = {
  __typename?: 'RootQuery';
  Accessory?: Maybe<Accessory>;
  AccessoryBrand?: Maybe<AccessoryBrand>;
  AccessoryCategory?: Maybe<AccessoryCategory>;
  Apparel?: Maybe<Apparel>;
  ApparelBrand?: Maybe<ApparelBrand>;
  ApparelCategory?: Maybe<ApparelCategory>;
  ApparelSize?: Maybe<ApparelSize>;
  Document?: Maybe<Document>;
  FootwearCategory?: Maybe<FootwearCategory>;
  SanityFileAsset?: Maybe<SanityFileAsset>;
  SanityImageAsset?: Maybe<SanityImageAsset>;
  Shoe?: Maybe<Shoe>;
  ShoeBrand?: Maybe<ShoeBrand>;
  ShoeSize?: Maybe<ShoeSize>;
  allAccessory: Array<Accessory>;
  allAccessoryBrand: Array<AccessoryBrand>;
  allAccessoryCategory: Array<AccessoryCategory>;
  allApparel: Array<Apparel>;
  allApparelBrand: Array<ApparelBrand>;
  allApparelCategory: Array<ApparelCategory>;
  allApparelSize: Array<ApparelSize>;
  allDocument: Array<Document>;
  allFootwearCategory: Array<FootwearCategory>;
  allSanityFileAsset: Array<SanityFileAsset>;
  allSanityImageAsset: Array<SanityImageAsset>;
  allShoe: Array<Shoe>;
  allShoeBrand: Array<ShoeBrand>;
  allShoeSize: Array<ShoeSize>;
};


export type RootQueryAccessoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryAccessoryBrandArgs = {
  id: Scalars['ID'];
};


export type RootQueryAccessoryCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryApparelArgs = {
  id: Scalars['ID'];
};


export type RootQueryApparelBrandArgs = {
  id: Scalars['ID'];
};


export type RootQueryApparelCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQueryApparelSizeArgs = {
  id: Scalars['ID'];
};


export type RootQueryDocumentArgs = {
  id: Scalars['ID'];
};


export type RootQueryFootwearCategoryArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityFileAssetArgs = {
  id: Scalars['ID'];
};


export type RootQuerySanityImageAssetArgs = {
  id: Scalars['ID'];
};


export type RootQueryShoeArgs = {
  id: Scalars['ID'];
};


export type RootQueryShoeBrandArgs = {
  id: Scalars['ID'];
};


export type RootQueryShoeSizeArgs = {
  id: Scalars['ID'];
};


export type RootQueryAllAccessoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccessorySorting>>;
  where?: InputMaybe<AccessoryFilter>;
};


export type RootQueryAllAccessoryBrandArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccessoryBrandSorting>>;
  where?: InputMaybe<AccessoryBrandFilter>;
};


export type RootQueryAllAccessoryCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<AccessoryCategorySorting>>;
  where?: InputMaybe<AccessoryCategoryFilter>;
};


export type RootQueryAllApparelArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApparelSorting>>;
  where?: InputMaybe<ApparelFilter>;
};


export type RootQueryAllApparelBrandArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApparelBrandSorting>>;
  where?: InputMaybe<ApparelBrandFilter>;
};


export type RootQueryAllApparelCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApparelCategorySorting>>;
  where?: InputMaybe<ApparelCategoryFilter>;
};


export type RootQueryAllApparelSizeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ApparelSizeSorting>>;
  where?: InputMaybe<ApparelSizeFilter>;
};


export type RootQueryAllDocumentArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DocumentSorting>>;
  where?: InputMaybe<DocumentFilter>;
};


export type RootQueryAllFootwearCategoryArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FootwearCategorySorting>>;
  where?: InputMaybe<FootwearCategoryFilter>;
};


export type RootQueryAllSanityFileAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityFileAssetSorting>>;
  where?: InputMaybe<SanityFileAssetFilter>;
};


export type RootQueryAllSanityImageAssetArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<SanityImageAssetSorting>>;
  where?: InputMaybe<SanityImageAssetFilter>;
};


export type RootQueryAllShoeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ShoeSorting>>;
  where?: InputMaybe<ShoeFilter>;
};


export type RootQueryAllShoeBrandArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ShoeBrandSorting>>;
  where?: InputMaybe<ShoeBrandFilter>;
};


export type RootQueryAllShoeSizeArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<ShoeSizeSorting>>;
  where?: InputMaybe<ShoeSizeFilter>;
};

export type SanityAssetSourceData = {
  __typename?: 'SanityAssetSourceData';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  /** The unique ID for the asset within the originating source so you can programatically find back to it */
  id?: Maybe<Scalars['String']>;
  /** A canonical name for the source this asset is originating from */
  name?: Maybe<Scalars['String']>;
  /** A URL to find more information about this asset in the originating source */
  url?: Maybe<Scalars['String']>;
};

export type SanityAssetSourceDataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityAssetSourceDataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityFileAsset = Document & {
  __typename?: 'SanityFileAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityFileAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityFileAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageAsset = Document & {
  __typename?: 'SanityImageAsset';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  altText?: Maybe<Scalars['String']>;
  assetId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  metadata?: Maybe<SanityImageMetadata>;
  mimeType?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  sha1hash?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  source?: Maybe<SanityAssetSourceData>;
  title?: Maybe<Scalars['String']>;
  uploadId?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SanityImageAssetFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  altText?: InputMaybe<StringFilter>;
  assetId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  extension?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  metadata?: InputMaybe<SanityImageMetadataFilter>;
  mimeType?: InputMaybe<StringFilter>;
  originalFilename?: InputMaybe<StringFilter>;
  path?: InputMaybe<StringFilter>;
  sha1hash?: InputMaybe<StringFilter>;
  size?: InputMaybe<FloatFilter>;
  source?: InputMaybe<SanityAssetSourceDataFilter>;
  title?: InputMaybe<StringFilter>;
  uploadId?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export type SanityImageAssetSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  altText?: InputMaybe<SortOrder>;
  assetId?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  extension?: InputMaybe<SortOrder>;
  label?: InputMaybe<SortOrder>;
  metadata?: InputMaybe<SanityImageMetadataSorting>;
  mimeType?: InputMaybe<SortOrder>;
  originalFilename?: InputMaybe<SortOrder>;
  path?: InputMaybe<SortOrder>;
  sha1hash?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
  source?: InputMaybe<SanityAssetSourceDataSorting>;
  title?: InputMaybe<SortOrder>;
  uploadId?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
};

export type SanityImageCrop = {
  __typename?: 'SanityImageCrop';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  bottom?: Maybe<Scalars['Float']>;
  left?: Maybe<Scalars['Float']>;
  right?: Maybe<Scalars['Float']>;
  top?: Maybe<Scalars['Float']>;
};

export type SanityImageCropFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  bottom?: InputMaybe<FloatFilter>;
  left?: InputMaybe<FloatFilter>;
  right?: InputMaybe<FloatFilter>;
  top?: InputMaybe<FloatFilter>;
};

export type SanityImageCropSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  bottom?: InputMaybe<SortOrder>;
  left?: InputMaybe<SortOrder>;
  right?: InputMaybe<SortOrder>;
  top?: InputMaybe<SortOrder>;
};

export type SanityImageDimensions = {
  __typename?: 'SanityImageDimensions';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type SanityImageDimensionsFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  aspectRatio?: InputMaybe<FloatFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
};

export type SanityImageDimensionsSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  aspectRatio?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
};

export type SanityImageHotspot = {
  __typename?: 'SanityImageHotspot';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
};

export type SanityImageHotspotFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  height?: InputMaybe<FloatFilter>;
  width?: InputMaybe<FloatFilter>;
  x?: InputMaybe<FloatFilter>;
  y?: InputMaybe<FloatFilter>;
};

export type SanityImageHotspotSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  height?: InputMaybe<SortOrder>;
  width?: InputMaybe<SortOrder>;
  x?: InputMaybe<SortOrder>;
  y?: InputMaybe<SortOrder>;
};

export type SanityImageMetadata = {
  __typename?: 'SanityImageMetadata';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  blurHash?: Maybe<Scalars['String']>;
  dimensions?: Maybe<SanityImageDimensions>;
  hasAlpha?: Maybe<Scalars['Boolean']>;
  isOpaque?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Geopoint>;
  lqip?: Maybe<Scalars['String']>;
  palette?: Maybe<SanityImagePalette>;
};

export type SanityImageMetadataFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  blurHash?: InputMaybe<StringFilter>;
  dimensions?: InputMaybe<SanityImageDimensionsFilter>;
  hasAlpha?: InputMaybe<BooleanFilter>;
  isOpaque?: InputMaybe<BooleanFilter>;
  location?: InputMaybe<GeopointFilter>;
  lqip?: InputMaybe<StringFilter>;
  palette?: InputMaybe<SanityImagePaletteFilter>;
};

export type SanityImageMetadataSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  blurHash?: InputMaybe<SortOrder>;
  dimensions?: InputMaybe<SanityImageDimensionsSorting>;
  hasAlpha?: InputMaybe<SortOrder>;
  isOpaque?: InputMaybe<SortOrder>;
  location?: InputMaybe<GeopointSorting>;
  lqip?: InputMaybe<SortOrder>;
  palette?: InputMaybe<SanityImagePaletteSorting>;
};

export type SanityImagePalette = {
  __typename?: 'SanityImagePalette';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  darkMuted?: Maybe<SanityImagePaletteSwatch>;
  darkVibrant?: Maybe<SanityImagePaletteSwatch>;
  dominant?: Maybe<SanityImagePaletteSwatch>;
  lightMuted?: Maybe<SanityImagePaletteSwatch>;
  lightVibrant?: Maybe<SanityImagePaletteSwatch>;
  muted?: Maybe<SanityImagePaletteSwatch>;
  vibrant?: Maybe<SanityImagePaletteSwatch>;
};

export type SanityImagePaletteFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  dominant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
  muted?: InputMaybe<SanityImagePaletteSwatchFilter>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchFilter>;
};

export type SanityImagePaletteSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  darkMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  darkVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  dominant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightMuted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  lightVibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
  muted?: InputMaybe<SanityImagePaletteSwatchSorting>;
  vibrant?: InputMaybe<SanityImagePaletteSwatchSorting>;
};

export type SanityImagePaletteSwatch = {
  __typename?: 'SanityImagePaletteSwatch';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
  foreground?: Maybe<Scalars['String']>;
  population?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
};

export type SanityImagePaletteSwatchFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  background?: InputMaybe<StringFilter>;
  foreground?: InputMaybe<StringFilter>;
  population?: InputMaybe<FloatFilter>;
  title?: InputMaybe<StringFilter>;
};

export type SanityImagePaletteSwatchSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  background?: InputMaybe<SortOrder>;
  foreground?: InputMaybe<SortOrder>;
  population?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
};

export type Sanity_DocumentFilter = {
  /** All documents that are drafts. */
  is_draft?: InputMaybe<Scalars['Boolean']>;
  /** All documents referencing the given document ID. */
  references?: InputMaybe<Scalars['ID']>;
};

export type Shoe = Document & {
  __typename?: 'Shoe';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  brand?: Maybe<Array<Maybe<ShoeBrand>>>;
  /** What is the category of this item? */
  category?: Maybe<FootwearCategory>;
  /** Please provide the condition of your shoes. */
  condition?: Maybe<Scalars['String']>;
  image?: Maybe<Array<Maybe<Image>>>;
  mainImage?: Maybe<Image>;
  /** What is the name of your shoes? */
  name?: Maybe<Scalars['String']>;
  /** Please provide a price for your shoes. */
  price?: Maybe<Scalars['Float']>;
  /** What is the size of your shoes? */
  size?: Maybe<ShoeSize>;
  slug?: Maybe<Slug>;
};

export type ShoeBrand = Document & {
  __typename?: 'ShoeBrand';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide the name of this brand. */
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Slug>;
};

export type ShoeBrandFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  name?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type ShoeBrandSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type ShoeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  category?: InputMaybe<FootwearCategoryFilter>;
  condition?: InputMaybe<StringFilter>;
  mainImage?: InputMaybe<ImageFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  size?: InputMaybe<ShoeSizeFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export type ShoeSize = Document & {
  __typename?: 'ShoeSize';
  /** Date the document was created */
  _createdAt?: Maybe<Scalars['DateTime']>;
  /** Document ID */
  _id?: Maybe<Scalars['ID']>;
  _key?: Maybe<Scalars['String']>;
  /** Current document revision */
  _rev?: Maybe<Scalars['String']>;
  /** Document type */
  _type?: Maybe<Scalars['String']>;
  /** Date the document was last modified */
  _updatedAt?: Maybe<Scalars['DateTime']>;
  /** Please provide the size of your shoes. */
  shoeSize?: Maybe<Scalars['String']>;
};

export type ShoeSizeFilter = {
  /** Apply filters on document level */
  _?: InputMaybe<Sanity_DocumentFilter>;
  _createdAt?: InputMaybe<DatetimeFilter>;
  _id?: InputMaybe<IdFilter>;
  _key?: InputMaybe<StringFilter>;
  _rev?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  _updatedAt?: InputMaybe<DatetimeFilter>;
  shoeSize?: InputMaybe<StringFilter>;
};

export type ShoeSizeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  shoeSize?: InputMaybe<SortOrder>;
};

export type ShoeSorting = {
  _createdAt?: InputMaybe<SortOrder>;
  _id?: InputMaybe<SortOrder>;
  _key?: InputMaybe<SortOrder>;
  _rev?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  _updatedAt?: InputMaybe<SortOrder>;
  condition?: InputMaybe<SortOrder>;
  mainImage?: InputMaybe<ImageSorting>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  slug?: InputMaybe<SlugSorting>;
};

export type Slug = {
  __typename?: 'Slug';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  current?: Maybe<Scalars['String']>;
};

export type SlugFilter = {
  _key?: InputMaybe<StringFilter>;
  _type?: InputMaybe<StringFilter>;
  current?: InputMaybe<StringFilter>;
};

export type SlugSorting = {
  _key?: InputMaybe<SortOrder>;
  _type?: InputMaybe<SortOrder>;
  current?: InputMaybe<SortOrder>;
};

export enum SortOrder {
  /** Sorts on the value in ascending order. */
  Asc = 'ASC',
  /** Sorts on the value in descending order. */
  Desc = 'DESC'
}

export type Span = {
  __typename?: 'Span';
  _key?: Maybe<Scalars['String']>;
  _type?: Maybe<Scalars['String']>;
  marks?: Maybe<Array<Maybe<Scalars['String']>>>;
  text?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  /** Checks if the value is equal to the given input. */
  eq?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  /** Checks if the value matches the given word/words. */
  matches?: InputMaybe<Scalars['String']>;
  /** Checks if the value is not equal to the given input. */
  neq?: InputMaybe<Scalars['String']>;
  nin?: InputMaybe<Array<Scalars['String']>>;
};

export type AccessoryFragment = { __typename?: 'Accessory', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, category?: { __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null };

export type AllAccessoryQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAccessoryQuery = { __typename?: 'RootQuery', allAccessory: Array<{ __typename?: 'Accessory', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, category?: { __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AccessoryQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type AccessoryQuery = { __typename?: 'RootQuery', allAccessory: Array<{ __typename?: 'Accessory', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, category?: { __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllWornAccessoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWornAccessoriesQuery = { __typename?: 'RootQuery', allAccessory: Array<{ __typename?: 'Accessory', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, category?: { __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type NewestAccessoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type NewestAccessoriesQuery = { __typename?: 'RootQuery', allAccessory: Array<{ __typename?: 'Accessory', _createdAt?: any | null, price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, category?: { __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllAccessoryBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAccessoryBrandsQuery = { __typename?: 'RootQuery', allAccessoryBrand: Array<{ __typename?: 'AccessoryBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllAccessoryCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllAccessoryCategoriesQuery = { __typename?: 'RootQuery', allAccessoryCategory: Array<{ __typename?: 'AccessoryCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type ApparelFragment = { __typename?: 'Apparel', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null };

export type AllApparelsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllApparelsQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type ApparelQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ApparelQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllWornApparelQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWornApparelQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type NewestApparelsQueryVariables = Exact<{ [key: string]: never; }>;


export type NewestApparelsQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', _createdAt?: any | null, price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type FeaturedApparelsQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedApparelsQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null, category?: { __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllApparelCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllApparelCategoriesQuery = { __typename?: 'RootQuery', allApparelCategory: Array<{ __typename?: 'ApparelCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllApparelBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllApparelBrandsQuery = { __typename?: 'RootQuery', allApparelBrand: Array<{ __typename?: 'ApparelBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllApparelSizesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllApparelSizesQuery = { __typename?: 'RootQuery', allApparel: Array<{ __typename?: 'Apparel', size?: { __typename?: 'ApparelSize', apparelSize?: string | null } | null }> };

export type ShoeFragment = { __typename?: 'Shoe', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null };

export type AllShoesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllShoesQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type ShoeQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']>;
}>;


export type ShoeQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllWornShoesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllWornShoesQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type NewestShoesQueryVariables = Exact<{ [key: string]: never; }>;


export type NewestShoesQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', _createdAt?: any | null, price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type FeaturedShoesQueryVariables = Exact<{ [key: string]: never; }>;


export type FeaturedShoesQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', price?: number | null, condition?: string | null, name?: string | null, brand?: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null> | null, size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null, category?: { __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null } | null, mainImage?: { __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null, image?: Array<{ __typename?: 'Image', asset?: { __typename?: 'SanityImageAsset', url?: string | null } | null } | null> | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllShoeBrandsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllShoeBrandsQuery = { __typename?: 'RootQuery', allShoeBrand: Array<{ __typename?: 'ShoeBrand', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllFootwearCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllFootwearCategoriesQuery = { __typename?: 'RootQuery', allFootwearCategory: Array<{ __typename?: 'FootwearCategory', name?: string | null, slug?: { __typename?: 'Slug', current?: string | null } | null }> };

export type AllShoeSizesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllShoeSizesQuery = { __typename?: 'RootQuery', allShoe: Array<{ __typename?: 'Shoe', size?: { __typename?: 'ShoeSize', shoeSize?: string | null } | null }> };

export const AccessoryFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"accessory"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Accessory"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]} as unknown as DocumentNode<AccessoryFragment, unknown>;
export const ApparelFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"apparel"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Apparel"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparelSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]} as unknown as DocumentNode<ApparelFragment, unknown>;
export const ShoeFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"shoe"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Shoe"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"brand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"condition"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shoeSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mainImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]} as unknown as DocumentNode<ShoeFragment, unknown>;
export const AllAccessoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allAccessory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"accessory"}}]}}]}},...AccessoryFragmentDoc.definitions]} as unknown as DocumentNode<AllAccessoryQuery, AllAccessoryQueryVariables>;
export const AccessoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"accessory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"accessory"}}]}}]}},...AccessoryFragmentDoc.definitions]} as unknown as DocumentNode<AccessoryQuery, AccessoryQueryVariables>;
export const AllWornAccessoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allWornAccessories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"worn","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"accessory"}}]}}]}},...AccessoryFragmentDoc.definitions]} as unknown as DocumentNode<AllWornAccessoriesQuery, AllWornAccessoriesQueryVariables>;
export const NewestAccessoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"newestAccessories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"1"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"accessory"}},{"kind":"Field","name":{"kind":"Name","value":"_createdAt"}}]}}]}},...AccessoryFragmentDoc.definitions]} as unknown as DocumentNode<NewestAccessoriesQuery, NewestAccessoriesQueryVariables>;
export const AllAccessoryBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allAccessoryBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessoryBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllAccessoryBrandsQuery, AllAccessoryBrandsQueryVariables>;
export const AllAccessoryCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allAccessoryCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allAccessoryCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllAccessoryCategoriesQuery, AllAccessoryCategoriesQueryVariables>;
export const AllApparelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allApparels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"apparel"}}]}}]}},...ApparelFragmentDoc.definitions]} as unknown as DocumentNode<AllApparelsQuery, AllApparelsQueryVariables>;
export const ApparelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"apparel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"apparel"}}]}}]}},...ApparelFragmentDoc.definitions]} as unknown as DocumentNode<ApparelQuery, ApparelQueryVariables>;
export const AllWornApparelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allWornApparel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"worn","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"apparel"}}]}}]}},...ApparelFragmentDoc.definitions]} as unknown as DocumentNode<AllWornApparelQuery, AllWornApparelQueryVariables>;
export const NewestApparelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"newestApparels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"apparel"}},{"kind":"Field","name":{"kind":"Name","value":"_createdAt"}}]}}]}},...ApparelFragmentDoc.definitions]} as unknown as DocumentNode<NewestApparelsQuery, NewestApparelsQueryVariables>;
export const FeaturedApparelsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featuredApparels"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"price"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"3"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"apparel"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}},...ApparelFragmentDoc.definitions]} as unknown as DocumentNode<FeaturedApparelsQuery, FeaturedApparelsQueryVariables>;
export const AllApparelCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allApparelCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparelCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllApparelCategoriesQuery, AllApparelCategoriesQueryVariables>;
export const AllApparelBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allApparelBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparelBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllApparelBrandsQuery, AllApparelBrandsQueryVariables>;
export const AllApparelSizesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allApparelSizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allApparel"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"apparelSize"}}]}}]}}]}}]} as unknown as DocumentNode<AllApparelSizesQuery, AllApparelSizesQueryVariables>;
export const AllShoesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allShoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shoe"}}]}}]}},...ShoeFragmentDoc.definitions]} as unknown as DocumentNode<AllShoesQuery, AllShoesQueryVariables>;
export const ShoeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"shoe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"current"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shoe"}}]}}]}},...ShoeFragmentDoc.definitions]} as unknown as DocumentNode<ShoeQuery, ShoeQueryVariables>;
export const AllWornShoesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allWornShoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"condition"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"StringValue","value":"worn","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shoe"}}]}}]}},...ShoeFragmentDoc.definitions]} as unknown as DocumentNode<AllWornShoesQuery, AllWornShoesQueryVariables>;
export const NewestShoesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"newestShoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"_createdAt"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"4"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shoe"}},{"kind":"Field","name":{"kind":"Name","value":"_createdAt"}}]}}]}},...ShoeFragmentDoc.definitions]} as unknown as DocumentNode<NewestShoesQuery, NewestShoesQueryVariables>;
export const FeaturedShoesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"featuredShoes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sort"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"price"},"value":{"kind":"EnumValue","value":"DESC"}}]}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"IntValue","value":"7"}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"shoe"}},{"kind":"Field","name":{"kind":"Name","value":"price"}}]}}]}},...ShoeFragmentDoc.definitions]} as unknown as DocumentNode<FeaturedShoesQuery, FeaturedShoesQueryVariables>;
export const AllShoeBrandsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allShoeBrands"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoeBrand"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllShoeBrandsQuery, AllShoeBrandsQueryVariables>;
export const AllFootwearCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allFootwearCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allFootwearCategory"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"current"}}]}}]}}]}}]} as unknown as DocumentNode<AllFootwearCategoriesQuery, AllFootwearCategoriesQueryVariables>;
export const AllShoeSizesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"allShoeSizes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allShoe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"shoeSize"}}]}}]}}]}}]} as unknown as DocumentNode<AllShoeSizesQuery, AllShoeSizesQueryVariables>;