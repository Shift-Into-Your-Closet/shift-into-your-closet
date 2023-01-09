import { Fragment } from "react";

import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

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

const Contact: NextPage = () => {
  const [formSpreeState, sendToFormSpree] = useFormSpree("mqkjvrpd");

  const {
    register,
    handleSubmit,
    formState: { errors },
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

  return (
    <>
      <Head>
        <title>Contact | Shift Into Your Closet</title>
        <link rel="apple-touch-icon" href="/path/to/apple-touch-icon.png" />
        <meta name="theme-color" content="#60A5FA" />
        <meta name="description" content="contact at Shift Into Your Closet" />
        <meta name="keywords" content="contact, shift into your closet" />
        <meta name="viewport" content="width=device-width" />
      </Head>

      <section
        id="contact"
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-24 animate-fade-in-up min-h-screen"
      >
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3 text-white">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="inline-flex items-center text-lg font-medium md:ml-2  cursor-pointer  hover:text-blue-400"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-lg font-medium md:ml-2">
                  Contact
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="my-10">
          <p className="font-roboto text-left text-white text-base mb-4">
            Feel free to fill in the form below or contact us directly with any
            questions you may have.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white py-8 px-2 rounded-xl shadow-md lg:p-8 sm:px-4"
        >
          <h2 className="text-2xl font-semibold">Let's get to know you</h2>
          <div className="flex flex-col space-y-6">
            <div className="grid grid-cols-1 space-y-3">
              <div className="flex flex-col justify-evenly md:gap-4 sm:flex-row">
                <div className="flex flex-col w-full">
                  {errors.firstName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="firstName"
                    className="block mb-2 mt-5 text-sm text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    placeholder="First Name"
                    className="rounded-md border bg-blue-100 border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0 font-opensans"
                    {...register("firstName", {
                      required: true,
                      maxLength: 30,
                    })}
                  />
                </div>
                <div className="flex flex-col w-full">
                  {errors.lastName && (
                    <span className="absolute mt-10 ml-2 text-red-500">
                      required
                    </span>
                  )}
                  <label
                    htmlFor="lastName"
                    className="block mb-2 mt-5 text-sm text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    className="rounded-md border bg-blue-100 border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0"
                    {...register("lastName", { required: true, maxLength: 30 })}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-8">
              <h3 className="text-2xl font-semibold">How can we help?</h3>
              <label htmlFor="subject" className="block text-sm text-gray-900">
                Subject
              </label>
              <input
                type="text"
                placeholder="Subject"
                className="rounded-md bg-blue-100 border border-slate-200 px-4 py-2 w-full outline-none hover:border-green-300 focus:border-green-400"
                {...register("subject", {
                  required: true,
                  minLength: 5,
                  maxLength: 30,
                })}
              />
              {errors.subject && (
                <span className="absolute mt-10 ml-2 text-red-500">
                  required
                </span>
              )}
            </div>
            <div className="flex flex-col justify-evenly md:gap-4 sm:flex-row font-opensans">
              <div className="flex flex-col w-full">
                {errors.email && (
                  <span className="absolute mt-10 ml-2 text-red-500">
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
                  className="rounded-md bg-blue-100 border border-slate-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 w-full mb-2 sm:mb-0"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^([a-zA-Z0-9_\.-]+)@([\da-zA-Z\.-]+)\.([a-zA-Z\.]{2,63})$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
              </div>
            </div>

            <div className="flex flex-col font-opensans pt-5 gap-5">
              <h3 className="text-2xl font-monsterrat font-semibold">
                Have any questions for us?
              </h3>
              <label htmlFor="message">Message</label>
              <textarea
                rows={5}
                placeholder="Message"
                className="rounded-md bg-blue-100 border border-gray-200 px-4 py-2 outline-none hover:border-green-300 focus:border-green-400 md:col-span-2 resize-none"
                {...register("message", {
                  required: true,
                  minLength: 5,
                  maxLength: 500,
                })}
              />
              {errors.message && (
                <span className="absolute mt-10 ml-2 text-red-500">
                  required
                </span>
              )}
            </div>

            <div className="flex ">
              <button
                type="submit"
                value="Send"
                className="w-full rounded-md bg-blue-500 px-14 py-4 mt-4 text-sm font-roboto bold  text-white hover:bg-blue-700 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
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
              <p className="mt-10 text-xl font-roboto uppercase text-accent font-bold">
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

              <p className="mt-10 text-xl text-blue-500 font-roboto text-accent font-bold uppercase">
                Message sent!
              </p>
              <p className="text-sm font-roboto text-blue-300 my-5 sm:text-lg">
                We'll be in touch soon!
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

export default Contact;
