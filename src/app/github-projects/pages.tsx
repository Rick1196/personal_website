import React from 'react';
import { InferGetStaticPropsType } from "next";
import api from '../../../utils/api';

export const preload = () => {
    void api.getGithubProjects();
}

export default async function GithubProjects() {

    const projects = await api.getGithubProjects();

    return <div>
        <textarea disabled style={{
            width: "100%",
            minHeight: "30rem",
            fontFamily: `"Lucida Console", Monaco, monospace`,
            fontSize: "0.8rem",
            lineHeight: 1.2,
        }}>
            {JSON.stringify(projects, undefined, 2)}
        </textarea>
    </div >
}