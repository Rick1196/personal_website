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
import staticData from "../utils/static-data";
import { SocialMediaContent } from "../types/social-media-content";
import ViewIcon from "../icons/view";

const SocialMediaItem: React.FC<{ content: SocialMediaContent }> = ({ content }) =>
(<div className="flex-row flex-justify-start-elements flex-align-center-elements">
  <Image
    src={content.imageSrc}
    alt={content.alt}
    width={content.width}
    height={content.height}
  />
  <Link href={content.externalRef} target="_blank">
    {content.copy}
  </Link>
</div>)


const AboutMeSection: React.FC<{ facts: Fact[]; darkModeEnabled: boolean }> = ({
  facts,
  darkModeEnabled,
}) => {
  return (
    <>
      <div className="with-right only-on-desktop flex-columns flex-center-elements space-m" >
        <div className="flex-columns flex-center-elements space-s">
          <p className="center-text">{`Hi, I'm Ricardo`}</p>
          <p className="center-text">{`Welcome to my personal portfolio`}</p>
        </div>
        <div className="flex-columns flex-align-center-elements space-s">
          <p className="center-text">Find me on:</p>
          <div className="flex-columns flex-justify-start-elements space-s">{staticData.personalInformation.socialMedia.map((socialMediaItem, index) => (<SocialMediaItem key={index} content={socialMediaItem} />))}</div>
        </div>
      </div>
      <div className="padding-m">
        <p className="center-text">
          Know me a little bit more
        </p>
        <Carousel isDarkModeEnabled={darkModeEnabled}>
          {facts.map((fact, index) => (
            <div
              key={`fact_index`}
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
      <div className="flex-row flex-justify-end-elements flex-align-center-elements space-m">
        <span>
          <ClockIcon color={darkModeEnabled ? "white" : "black"} />
        </span>
        <p>
          {differenceInYears(new Date(), new Date("01/01/2018"))} years of
          experience
        </p>
      </div>
      <div className="timeline">
        <ul>
          {experiences.map((experience, index) => (
            <li>
              <div className="card flex flex-columns space-s">
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-white">
                  {`${getStringDate(experience.from)} ${experience.to ? `-${getStringDate(experience.to)}` : "..."
                    }`}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {experience.title} <span>{`(${experience.company})`}</span>
                </h3>
                <div className="">
                  {parse(
                    toHTML(experience.description, {
                      components: {
                        list: ({ children, value, ...rest }) => {
                          return `<div className="padding-m">
                            <ul>${children}</ul>
                          </div>`;
                        },
                      },
                    })
                  )}
                </div>
                <div className="flex flex-row flex-wrap">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={`technology_${techIndex}_from_experience_${index}`}
                      className="bubble"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default function Home({
  experiences,
  facts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const themeMode = useContext(ThemeModeContext);

  return (
    <div className="main-container space-l">
      <div className="to-the-right "><Link className="ghost horizontal-shaking padding-m font-lg flex flex-row flex-align-center-elements" href="/pdf_resume">Check a PDF preview <ViewIcon /></Link></div>
      <section className="section horizontal with-bottom">
        <AboutMeSection
          {...{ facts, darkModeEnabled: themeMode.darkModeEnabled }}
        />
      </section>
      <section className="section vertical">
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
