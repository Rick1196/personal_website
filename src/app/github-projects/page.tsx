import React from 'react';
import { InferGetStaticPropsType } from "next";

export default function GithubProjects({ repos }: InferGetStaticPropsType<typeof getStaticProps>) {
    return <div>
        <textarea disabled style={{
            width: "100%",
            minHeight: "30rem",
            fontFamily: `"Lucida Console", Monaco, monospace`,
            fontSize: "0.8rem",
            lineHeight: 1.2,
        }}>
            {repos}
        </textarea>
    </div >
}


export async function getStaticProps() {
    const repos = await ((await fetch("https://api.github.com/users/Rick1196/repos")).json());
    return {
        props: {
            repos: JSON.stringify(repos, undefined, 2),
        },
        revalidate: 10,
    };
}