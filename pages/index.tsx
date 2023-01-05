import React, { useContext } from "react";
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
import Carousel from "../components/carousel";
import { ThemeModeContext } from "../utils/contexts";

const AboutMeSection: React.FC<{ facts: Fact[]; darkModeEnabled: boolean }> = ({
  facts,
  darkModeEnabled,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-full h-full w-full p-2 gap-8 dark:text-white">
        <div className="flex flex-col justify-center items-center gap-2">
          <p className="font-medium text-4xl text-center">{`Hi, I'm Ricardo`}</p>
          <p className="font-medium text-2xl text-center">{`Welcome to my personal portfolio`}</p>
        </div>
        <div className="flex flex-col justify-start items-center gap-2">
          <p className="font-normal text-2xl">Find me on:</p>
          <div className="flex flex-row gap-2 justify-start w-full">
            <Image
              src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico"
              alt="gmail"
              width={18}
              height={12}
            />
            <Link href="mailto:ricardompp11@gmail.com" target="_blank">
              ricardompp11@gmail.com
            </Link>
          </div>
          <div className="flex flex-row gap-2 justify-start w-full">
            <Image
              src="https://static.licdn.com/sc/h/8s162nmbcnfkg7a0k8nq9wwqo"
              alt="linkedin"
              width={18}
              height={12}
            />
            <Link
              target="_blank`"
              className="text-blue"
              href="https://www.linkedin.com/in/ricardo-manuel-p%C3%A9rez-plata-533037176/"
            >
              <span>Ricardo Perez at LinkedIn</span>
            </Link>
          </div>
          <div className="flex flex-row gap-2 justify-start w-full">
            <Image
              src="https://github.githubassets.com/favicons/favicon.png"
              alt="github"
              width={18}
              height={12}
            />
            <Link
              target="_blank"
              className="text-blue"
              href="https://github.com/Rick1196"
            >
              <span>Ricardo Perez at GIthub</span>
            </Link>
          </div>
          <div className="flex flex-row gap-2 justify-start w-full">
            <Image
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="dev.to"
              width={18}
              height={12}
            />
            <Link
              target="_blank"
              className="text-blue"
              href="https://dev.to/rick1196"
            >
              <span>Ricardo Perez at Dev.to</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center min-h-full h-full w-full p-2 gap-6">
        <p className="font-normal text-2xl text-center dark:text-white">
          Know me a little bit more
        </p>
        <Carousel isDarkModeEnabled={darkModeEnabled}>
          {facts.map((fact, index) => (
            <div
              key={`fact_index`}
              className="mb-4 text-base font-normal dark:text-white"
            >
              {parse(
                toHTML(fact.description, {
                  components: {
                    marks: {
                      link: ({ children, value, ...rest }) => {
                        const href = value.href || "";
                        return `<a
                            target="_blank"
                            href=${href}
                          >
                            ${children}
                          </a>`;
                      },
                    },
                  },
                })
              )}
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

const ExperienceSection: React.FC<{
  experiences: Experience[];
  darkModeEnabled: boolean;
}> = ({ experiences, darkModeEnabled }) => {
  return (
    <>
      <div className="flex justify-end items-center gap-2 dark:text-white">
        <span>
          <ClockIcon color={darkModeEnabled ? "white" : "black"} />
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
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
              {`${getStringDate(experience.from)} ${
                experience.to ? `-${getStringDate(experience.to)}` : "..."
              }`}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {experience.title} <span>{`(${experience.company})`}</span>
            </h3>
            <div className="mb-4 text-base font-normal text-gray-500 dark:text-white">
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
                className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-white dark:text-grey-800"
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
  const themeMode = useContext(ThemeModeContext);

  return (
    <div className="flex flex-col divide-y span-2">
      <section className="min-h-[600px] grid md:grid-cols-2 grid-cols-1 md:divide-x pt-2 pb-2">
        <AboutMeSection
          {...{ facts, darkModeEnabled: themeMode.darkModeEnabled }}
        />
      </section>
      <section className="min-h-[600px]   p-4 flex flex-col gap-6">
        <ExperienceSection
          {...{ experiences, darkModeEnabled: themeMode.darkModeEnabled }}
        />
      </section>
    </div>
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
