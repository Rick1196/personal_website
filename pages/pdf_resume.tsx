import { InferGetStaticPropsType } from "next";
import { Experience, Fact } from "../types";
import { client } from "../utils/sanityClient";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { differenceInYears } from "date-fns";
import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";
import { getStringDate } from "../utils/date";
import DownloadIcon from "../icons/download";


export default function PDFResume({ experiences, facts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const contentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({ contentRef, documentTitle: 'Ricardo_Perez.pdf' });
    return (
        <div className="main-container space-l font--m">
            <div className="to-the-right"><button className="ghost horizontal-shaking padding-m font-lg flex flex-row flex-align-center-elements" onClick={() => handlePrint()}>Download <DownloadIcon /></button></div>
            <div className="padding-m" ref={contentRef}>
                <section className="with-bottom">
                    <div className="center-text">
                        <h1>Ricardo Manuel Perez Plata</h1>
                        <h2>FE Software Engineer</h2>
                    </div>
                    <div className="flex flex-columns space-s padding-s">
                        <p>{"Check my projects: "}<a href="https://github.com/Rick1196">Github</a></p>
                        <p>
                            {'Send me an email: '}
                            <a href="ricardompp11@gmail.com">
                                ricardompp11@gmail.com
                            </a>
                        </p>
                        <p>{'Check my personam website: '}<a href="https://personal-website-rick1196.vercel.app/">My website</a></p>
                    </div>
                </section>
                <section className="with-bottom padding-s">
                    <p className="title">Employment</p>
                    <p className="sub-title">
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
                                        <p className="sub-title">
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
                                        <p className="sub-title">Technologies I worked with</p>
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
                <section className="padding-m">
                    <p className="title">Education</p>
                    <ul className="margin--top--m">
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
