import React from 'react';
import api from '../../../utils/api';
import { preload } from '../../../views/github-projects';

export default async function GithubProjects() {
    preload()
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