import { InferGetStaticPropsType } from "next";
import { Experience, Fact } from "../types";
import { client } from "../utils/sanityClient";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { differenceInYears } from "date-fns";
import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";
import { getStringDate } from "../utils/date";


export default function PDFResume({ experiences, facts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const contentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({ contentRef });
    return (
        <div className="main-container space-l">
            <button onClick={() => handlePrint()}>Print</button>
            <div className="padding-m" ref={contentRef}>
                <section className="with-bottom">
                    <div className="center-text">
                        <h1>Ricardo Manuel Perez Plata</h1>
                        <h2>Software Engineer</h2>
                    </div>
                    <div className="flex flex-columns space-s padding-s">
                        <a href="https://github.com/Rick1196">Github</a>
                        <a href="ricardompp11@gmail.com">
                            ricardompp11@gmail.com
                        </a>
                        <a href="https://personal-website-rick1196.vercel.app/">My website</a>
                    </div>
                </section>
                <section className="with-bottom padding-s">
                    <p>Employment</p>
                    <p>
                        {differenceInYears(new Date(), new Date("01/01/2018"))} years of
                        experience
                    </p>
                    <div className="padding-m">
                        <ul>
                            {experiences.map((experience, index) => (
                                <li className="padding--top--m">
                                    <div className="page-break" />
                                    <div className="flex flex-columns space-s">
                                     
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {experience.title} <span>{`(${experience.company})`}</span>
                                        </h3>
                                        <p className="">
                                            {`${getStringDate(experience.from)} ${experience.to ? `-${getStringDate(experience.to)}` : "..."
                                                }`}
                                        </p>
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
                                        <p>Technologies I worked with</p>
                                        <ul className="">
                                            {experience.technologies.map((tech, techIndex) => (
                                                <li
                                                    key={`technology_${techIndex}_from_experience_${index}`}
                                                >
                                                    {tech}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
                <section className="padding-s">
                    <p>Education</p>
                    <ul>
                        <li>
                            Universidad Autonoma del Estado de Mexico, Software Engineer 2015 - 2020
                        </li>
                    </ul>
                </section>
            </div >
        </div >)
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
