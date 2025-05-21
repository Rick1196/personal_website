import { XMLParser } from "fast-xml-parser";
import type { DevFeed } from "../../../../types/feed";

export async function GET() {
    try {
        const xmlData = await (await fetch("https://dev.to/feed/rick1196")).text();
        const parser = new XMLParser();
        const articles: DevFeed = parser.parse(xmlData);
        const articlesItems = articles?.rss.channel.item || [];
        const categories: Map<string, { tag: string; count: number }> = new Map();
        for (const article of articlesItems) {
            for (const tag of article.category || []) {
                if (!categories.has(tag)) {
                    categories.set(tag, { tag, count: 1 });
                } else {
                    const currentValue = categories.get(tag);
                    categories.set(tag, { tag, count: (currentValue?.count || 0) + 1 });
                }
            }
        }
        return Response.json({
            articles,
            categories: Object.fromEntries(categories),
        }, { status: 200 })

    } catch (error) {
        return Response.json({ message: "Error trying to fetch articles data", error: error }, { status: 500 })
    }
}