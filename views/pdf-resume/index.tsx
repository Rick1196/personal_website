"use client";
import { useContext, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { differenceInYears } from "date-fns";
import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";
import DownloadIcon from "../../icons/download";
import { getStringDate } from "../../utils/date";
import { replaceTokens } from "../../utils/common";
import { Experience, Fact } from "../../types";
import { ThemeModeContext } from "../../utils/contexts";
import api from "../../utils/api";

export const preload = () => {
  void api.getResumeData();
}

export default function PDFResumeView({
    experiences,
    facts,
}: {
    experiences: Experience[];
    facts: Fact[];
}) {
    const { darkModeEnabled } = useContext(ThemeModeContext)
    const contentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: "Ricardo_Perez.pdf",
    });
    return (
        <div className="main-container space-l font--m">
            <div className="to-the-right">
                <button
                    className="ghost horizontal-shaking padding-m font-lg flex flex-row flex-align-center-elements"
                    onClick={() => handlePrint()}
                >
                    Download <DownloadIcon color={darkModeEnabled ? "white" : "black"} />
                </button>
            </div>
            <div className="padding-m" ref={contentRef}>
                <section className="with-bottom">
                    <div className="center-text">
                        <h1>Ricardo Manuel Perez Plata</h1>
                        <h2>FE Software Engineer</h2>
                    </div>
                    <div className="flex flex-columns space-s padding-s">
                        <p>
                            {"Check my projects: "}
                            <a href="https://github.com/Rick1196">Github</a>
                        </p>
                        <p>
                            {"Send me an email: "}
                            <a href="ricardompp11@gmail.com">ricardompp11@gmail.com</a>
                        </p>
                        <p>
                            {"Check my personal website: "}
                            <a href="https://personal-website-rick1196.vercel.app/">
                                My website
                            </a>
                        </p>
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
                                <li key={`experience_${index}`} className="padding--top--m">
                                    <div className="page-break" />
                                    <div className="flex flex-columns space-s">
                                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                            {experience.title}{" "}
                                            <span>{`(${experience.company})`}</span>
                                        </h3>
                                        <p className="sub-title">
                                            {`${getStringDate(experience.from)} ${experience.to
                                                ? `-${getStringDate(experience.to)}`
                                                : "..."
                                                }`}
                                        </p>
                                        <div className="">
                                            {parse(
                                                toHTML(experience.description, {
                                                    components: {
                                                        list: ({ children, }) => {
                                                            return `<div className="padding-m">
                                                                    <ul>${children}</ul>
                                                            </div>`;
                                                        },
                                                    },
                                                })
                                            )}
                                        </div>
                                        <p className="sub-title">Tech stack:</p>
                                        <ul>
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
                <section className="padding-m with-bottom">
                    <p className="title">Education</p>
                    <ul className="margin--top--m">
                        <li>
                            Universidad Autonoma del Estado de Mexico, Software Engineer 2015
                            - 2020
                        </li>
                    </ul>
                </section>
                <section className="padding-m">
                    <p className="title">About me</p>
                    <ul className="margin--bottom--s ">
                        {facts.map((fact, index) => (
                            <li className="margin--bottom--s" key={`fact_${index}`}>
                                {parse(
                                    toHTML(fact.description, {
                                        components: {
                                            marks: {
                                                link: ({ children, value, }) => {
                                                    const href = value.href || "";
                                                    return `<a
                                                    target="_blank"
                                                    href=${href}
                                                  >
                                                    ${children}
                                                  </a>`;
                                                },
                                            },
                                            block: ({ children }) => {
                                                return replaceTokens(children || "");
                                            },
                                        },
                                    })
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </div>
    );
}
