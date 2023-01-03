import React from "react";
import ClockIcon from "../icons/clockIcon";
import { differenceInYears } from "date-fns";
import { client } from "../utils/sanityClient";
import { InferGetStaticPropsType } from "next";
import { Experience, Fact } from "../types";
import { getStringDate } from "../utils/date";
import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";
import Image from "next/image";
import Link from "next/link";

const AboutMeSection: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-full h-full w-full p-2 gap-8">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-medium text-4xl">{`Hi, I'm Ricardo`}</p>
          <p className="font-medium text-2xl">{`Welcome to my personal portfolio`}</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <p className="font-normal text-2xl">Find me on:</p>
          <div className="flex flex-row gap-2">
            <Image
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
              alt="gmail"
              width={18}
              height={12}
            />
            <Link href="mailto:ricardompp11@gmail.com">
              ricardompp11@gmail.com
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="https://static.licdn.com/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
              alt="linkedin"
              width={18}
              height={12}
            />
            <Link
              className="text-blue"
              href="https://www.linkedin.com/in/ricardo-manuel-p%C3%A9rez-plata-533037176/"
            >
              <span>Ricardo Perez at LinkedIn</span>
            </Link>
          </div>
          <div className="flex flex-row gap-2">
            <Image
              src="https://github.githubassets.com/favicons/favicon.png"
              alt="github"
              width={18}
              height={12}
            />
            <Link className="text-blue" href="https://github.com/Rick1196">
              <span>Ricardo Perez at GIthub</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="min-h-full h-full w-full p-2">
        <p className="font-normal text-2xl text-center">
          Know me a little bit more
        </p>
        <div id="controls-carousel" className="relative" data-carousel="static">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="duration-700 ease-in-out">
              <p>item</p>
            </div>
            <div className="hidden duration-700 ease-in-out">
              <p>item</p>
            </div>
            <div className="hidden duration-700 ease-in-out">
              <p>item</p>
            </div>
            <div className="hidden duration-700 ease-in-out">
              <p>item</p>
            </div>
            <div className="hidden duration-700 ease-in-out">
              <p>item</p>
            </div>
          </div>
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white dark:text-gray-800"
                fill="none"
                stroke="#000"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

const ExperienceSection: React.FC<{ experiences: Experience[] }> = ({
  experiences,
}) => {
  return (
    <>
      <div className="flex justify-end items-center gap-2">
        <span>
          <ClockIcon />
        </span>
        <p>
          {differenceInYears(new Date(), new Date("01/01/2018"))} years of
          experience
        </p>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 w-full">
        {experiences.map((experience, index) => (
          <li key={`experience_${index}`} className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {`${getStringDate(experience.from)} - ${getStringDate(
                experience.to
              )}`}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title} <span>{`(${experience.company})`}</span>
            </h3>
            <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {parse(
                toHTML(experience.description, {
                  components: {
                    list: ({ children, value, ...rest }) => {
                      return `<ul className="list-disc list-inside p-2">${children}</ul>`;
                    },
                  },
                })
              )}
            </div>
            {experience.technologies.map((tech, techIndex) => (
              <span
                key={`technology_${techIndex}_from_experience_${index}`}
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                {tech}
              </span>
            ))}
          </li>
        ))}
      </ol>
    </>
  );
};

export default function Home({
  experiences,
  facts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(experiences, facts);

  return (
    <>
      <section className="min-h-[600px] grid md:grid-cols-2 grid-cols-1 md:divide-x border pt-2 pb-2">
        <AboutMeSection />
      </section>
      <section className="min-h-[600px] border p-4 flex flex-col gap-6">
        <ExperienceSection {...{ experiences }} />
      </section>
    </>
  );
}

export async function getStaticProps() {
  const experiences: Experience[] = await client.fetch(
    `*[_type == "experiences"]| order(_createdAt desc)`
  );
  const facts: Fact[] = await client.fetch(
    `*[_type == "facts"]| order(_createdAt desc)`
  );

  return {
    props: {
      experiences,
      facts,
    },
    revalidate: 10,
  };
}
