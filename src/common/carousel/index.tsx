import parse from "html-react-parser";
import { toHTML } from "@portabletext/to-html";
import { useState } from "react";
import { replaceTokens } from "../../utils/common";
import "./index.css";

const getItem = (items: Parameters<typeof toHTML>[0], index: number) => {
    if (Array.isArray(items) && items.length > 0) {
        //@ts-expect-error - we know it's not array
        return items[index].description;
    }
    return {} as Parameters<typeof toHTML>[0];
}

const Carousel: React.FC<{ items: Parameters<typeof toHTML>[0] }> = ({ items }) => {
    const [index, setIndex] = useState(0);
    const itemsLength = (Array.isArray(items) ? items.length : 0)
    const next = () => setIndex((index + 1) % itemsLength);
    const prev = () => setIndex((index - 1 + itemsLength) % itemsLength);
    return (
        <div>
            <div
                key={`carousel_item_${index}`}
                className="fade-in"
            >
                {parse(
                    toHTML(getItem(items, index), {
                        components: {
                            marks: {
                                link: ({ children, value }) => {
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
                                return replaceTokens(children || '')
                            }
                        },
                    })
                )}
            </div>
            <div className="control-container">
                <button onClick={prev}>{"<"}</button>
                <button onClick={next}>{">"}</button>
            </div>
        </div>
    );
}

export default Carousel;