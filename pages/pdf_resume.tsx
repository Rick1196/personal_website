import { InferGetStaticPropsType } from "next";
import { Experience, Fact } from "../types";
import { client } from "../utils/sanityClient";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";


export default function PDFResume({ experiences, facts }: InferGetStaticPropsType<typeof getStaticProps>) {
    const contentRef = useRef<HTMLDivElement>(null);
    const handlePrint = useReactToPrint({ contentRef });
    return (
        <div className="main-container space-l">
            <button onClick={() => handlePrint()}>Print</button>
            <div className="padding-m" ref={contentRef}>
                <section>
                    <h1>Ricardo Manuel Perez Plata</h1>
                    <h2>Software Engineer</h2>
                    <div className="left">
                        <a href="https://github.com/Rick1196">Github</a>
                    </div>
                    <div className="right">
                        <a href="ricardompp11@gmail.com">
                            ricardompp11@gmail.com
                        </a>
                        <a href="https://personal-website-rick1196.vercel.app/">My website</a>
                    </div>
                </section>
                <section>
                    <p>Employment</p>
                </section>
                <section>
                    <p>Software prjects</p>
                </section>
                <section>
                    <p>Education</p>
                </section>
            </div>
        </div>)
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
