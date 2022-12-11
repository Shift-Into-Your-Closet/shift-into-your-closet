import Breadcrumbs from "../components/ui/Breadcrumbs";

import { Fragment, SetStateAction, useState } from "react";

import Head from "next/head";
import Link from "next/link";
import { GetStaticProps, NextPage } from "next";

import client from "../apollo-client";
import { AllAccessoryDocument, AllAccessoryQuery } from "../graphql-operations";

import { useForm } from "react-hook-form";
import { useForm as useFormSpree } from "@formspree/react";

import { Transition } from "@headlessui/react";

type FormValues = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
};

type AccessoryInquiryProps = {
  accessories: AllAccessoryQuery["allAccessory"];
};

export const getStaticProps: GetStaticProps<
  AccessoryInquiryProps
> = async () => {
  let accessoryData;
  ({ data: accessoryData } = await client.query<AllAccessoryQuery>({
    query: AllAccessoryDocument,
  }));
  return {
    props: {
      accessories: accessoryData?.allAccessory ?? [],
    },
    revalidate: 200,
  };
};

const ApparelInquiry: NextPage<AccessoryInquiryProps> = ({
  accessories,
}: AccessoryInquiryProps) => {
  const [formSpreeState, sendToFormSpree] = useFormSpree("xvoywvlv");
  const [userChoice, setUserChoice] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    sendToFormSpree(data);

    formSpreeState.submitting;

    setTimeout(() => {
      formSpreeState.succeeded;
    }, 2000);
  };

  const handleUserChoice = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setUserChoice(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Accessory Inquiry | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta
          name="description"
          content="accessory inquiry at Shift Into Your Closet"
        />
        <meta
          name="keywords"
          content="accessory inquiry, hands on physio therapy and rehab centre"
        />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <div className="max-w-screen-xl m-auto w-11/12">
        <h1 className="text-3xl sm:text-5xl text-center py-6 font-bold font-roboto text-white capitalize">
          Accessory Inquiry
        </h1>
      </div>

      <section
        id="accessory-inquiry"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <Breadcrumbs />

        <div className="my-10">
          <p className="font-roboto text-left text-white text-base mb-4">
            Feel free to fill in the form below or contact us directly with any
            questions you may have or with any product inquiries. We keep your
            information private and will not share it with third parties.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white py-8 px-2 rounded-xl shadow-md lg:p-8 sm:px-4"
        >
          <h2 className="text-2xl font-roboto font-bold">
            Let's get to know you
          </h2>
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 space-y-3">
              <div className="flex flex-col justify-evenly gap-4 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.firstName && (
                    <span className="absolute mt-24 ml-2 text-red-500 font-roboto">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="firstName"
                    className="block mb-2 mt-5 text-sm font-roboto font-regular text-gray-900"
                  >
                    Legal First Name
                  </label>
                  <input
                    placeholder="First Name"
                    className="rounded-md border bg-blue-150 border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0 font-opensans"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>

                <div className="flex flex-col w-full">
                  {errors.lastName && (
                    <span className="absolute mt-24 ml-2 text-red-500 font-roboto">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="lastName"
                    className="block mb-2 mt-5 text-sm font-roboto font-regular text-gray-900"
                  >
                    Legal Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    className="rounded-md border bg-blue-100 border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0 font-opensans"
                    {...register("lastName", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-evenly gap-2 sm:flex-row font-roboto">
              <div className="flex flex-col w-full">
                {errors.email && (
                  <span className="absolute mt-24 ml-2 text-red-500 font-roboto">
                    required
                  </span>
                )}
                <label
                  htmlFor="email"
                  className="block mb-2 mt-5 text-sm text-gray-900"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="rounded-md font-opensans bg-blue-100 border border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
            </div>

            <h3 className="text-2xl font-roboto font-bold">
              Which accessory would you like to purchase?
            </h3>
            <div className="flex-1 font-opensans">
              <div className="flex flex-col mb-2 items-start">
                <label
                  htmlFor="subject"
                  className="text-black font-bold font-roboto flex-shrink-0 text-md mb-2"
                >
                  Select Accessory
                </label>
                <select
                  placeholder="Subject"
                  className="cursor-pointer rounded-md border bg-blue-100 border-slate-200 px-4 py-2 w-full outline-none hover:border-green-300 focus:border-green-400"
                  {...register("subject", {
                    required: true,
                  })}
                  value={userChoice}
                  onChange={handleUserChoice}
                >
                  {accessories.map((accessory) => (
                    <option
                      key={accessory.name ?? "Accessory name"}
                      value={accessory.name ?? "Accessory name"}
                    >
                      {accessory.name}
                    </option>
                  ))}
                </select>
                {errors.subject && (
                  <span className="absolute mt-20 ml-2 text-red-500 font-roboto">
                    required
                  </span>
                )}
              </div>
            </div>

            <div className="flex flex-col font-roboto pt-5 gap-5">
              <h3 className="text-2xl before:font-bold">
                Have any questions for us?
              </h3>
              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="rounded-md font-opensans bg-blue-100 border border-gray-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 md:col-span-2 resize-none"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 500,
                })}
              />
              {errors.message && (
                <span className="absolute mt-10 ml-2 text-red-500 font-roboto">
                  required
                </span>
              )}
            </div>

            <div className="flex ">
              <button
                type="submit"
                value="Send"
                className="w-full rounded-md bg-blue-500 px-14 py-4 mt-4 text-sm font-roboto bold text-white hover:bg-blue-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Send
              </button>
            </div>
          </div>
        </form>
        {formSpreeState.submitting && (
          <Transition
            as={Fragment}
            show={formSpreeState.submitting}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
              <p className="mt-10 text-xl font-roboto text-accent font-bold">
                sending...
              </p>
            </div>
          </Transition>
        )}
        {formSpreeState.succeeded && (
          <Transition
            as={Fragment}
            show={formSpreeState.succeeded}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white">
              <div className="flex flex-col md:flex-row"></div>

              <p className="mt-10 text-xl text-blue-500 font-roboto text-accent font-bold">
                message sent!
              </p>
              <p className="text-sm font-roboto text-blue-300 my-5 sm:text-lg">
                We will get back to you as soon as possible!
              </p>
              <Link href="/">
                <button className="rounded-lg bg-blue-500 px-6 py-2 font-bold uppercase text-white hover:bg-blue-700">
                  Return Home
                </button>
              </Link>
            </div>
          </Transition>
        )}
        {formSpreeState.errors && (
          <Transition
            as={Fragment}
            show={formSpreeState.errors.length > 0}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <div className="flex flex-col justify-center items-center absolute top-0 left-0 h-full w-full bg-white bg-opacity-90">
              <p className="mt-10 text-xl text-accent font-bold">
                We apologize for the inconvenience, something went wrong.
              </p>
              <p className="text-lg">Please try again in a few minutes.</p>
            </div>
          </Transition>
        )}
      </section>
    </>
  );
};

export default ApparelInquiry;
