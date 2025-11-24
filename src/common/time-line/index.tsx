import HoverContainer from '../hover-container';
import styles from './time-line.module.css';

type ContentProps = { title: React.ReactNode, content: React.ReactNode };
type DateProps = React.PropsWithChildren
type TimeLineSectionProps = { date: React.ReactNode, content: React.ReactNode };

const Date: React.FC<DateProps> = ({ children }) => {
    return <div className={styles.sectionTime}>{children}</div>
}

const Content: React.FC<ContentProps> = ({ title, content }) => {
    return <HoverContainer>
        <h3>{title}</h3>
        {content}
    </HoverContainer>
}

const TimeLineSection: React.FC<TimeLineSectionProps> = ({ date, content }) => {
    return (
        <section className={styles.container}>
            <div className={styles.sectionContent}>{date}</div>
            <article>
                <aside>
                    <div className={styles.dot}></div>
                    <div className={styles.line}></div>
                </aside>
                {content}
            </article>
        </section>
    );
}

const TimeLine: React.FC<{ children: React.ReactNode[] }> & {
    Date: React.FC<DateProps>;
    Content: React.FC<ContentProps>;
    TimeLineSection: React.FC<TimeLineSectionProps>
} = ({ children }) => {
    return (
        <div>
            {children.map((child) => (child))}
        </div>
    );
};


TimeLine.Date = Date;
TimeLine.Content = Content;
TimeLine.TimeLineSection = TimeLineSection;
export default TimeLine;
