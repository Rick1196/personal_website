import { toHTML } from "@portabletext/to-html";
import parse from "html-react-parser";
import { getStringDate } from "../../utils/common";
import TimeLine from "../time-line";
import "./index.css"

const Experiences: React.FC<{
    experiences: {
        from: string;
        to?: string;
        title: string;
        company: string;
        description: Parameters<typeof toHTML>[0];
        technologies: string[];
    }[]
}> = ({ experiences }) => {
    return <section>
        <h2>Professional Experience</h2>
        <TimeLine>
            {
                experiences.map((experience, index: number) => (
                    <TimeLine.TimeLineSection
                        key={`timeline_experience_${index}`}
                        date={
                            <TimeLine.Date>
                                {`${getStringDate(experience.from)} ${experience.to ? `-${getStringDate(experience.to)}` : "..."
                                    }`}
                            </TimeLine.Date>
                        }
                        content={
                            <TimeLine.Content
                                title={
                                    <>
                                        {experience.title} <span>{`(${experience.company})`}</span>
                                    </>
                                }
                                content={
                                    <div className="">
                                        {parse(
                                            toHTML(experience.description, {
                                                components: {
                                                    list: ({ children }) => {
                                                        return `<div className="taskList">
                            <ul>${children}</ul>
                          </div>`;
                                                    },

                                                },
                                            })
                                        )}
                                        <div className="techsContainer">
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
                                }
                            />
                        }
                    />
                ))
            }
        </TimeLine>
    </section>
}

export default Experiences;