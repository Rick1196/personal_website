import { useQueries } from "@tanstack/react-query";
import api from "../../utils/api";
import { useEffect, useState } from "react";
import "./index.css";
import Loading from "../../assets/loading";
import Carousel from "../../common/carousel";
import Experiences from "../../common/experinces";

const Name = () => {
    const [isIntro, setIsIntro] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsIntro(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    return <section className={`title-container ${isIntro ? 'intro' : 'normal'}`}>
        <h1 className="main-title">Ricardo Pérez, Software Engineer.</h1>
    </section>
}

const Main = () => {
    const query = useQueries({
        queries: [
            { queryKey: ['resume', 'facts'], queryFn: api.getFacts, refetchOnMount: true, refetchOnWindowFocus: false },
            { queryKey: ['resume', 'experiences'], queryFn: api.getExperiences, refetchOnMount: true, refetchOnWindowFocus: false },
        ]
    });
    const isLoading = query.some(q => q.isLoading);
    const isError = query.some(q => q.isError);

    if (isLoading) {
        return <div>
            <Loading />
            <p>Loading...</p>
        </div>;
    }

    if (isError) {
        return <p>Error loading data.</p>;
    }
    return <>
        <Name />
        <section> <p className="description">Welcome to my personal website where I share a little bit more about my experience as a Software Engineer.</p></section>
        <section>
            <h2>Facts About me</h2>
            <Carousel items={query[0].data?.data || []} />
        </section>
        <Experiences experiences={query[1].data?.data} />
    </>;
}

export default Main;