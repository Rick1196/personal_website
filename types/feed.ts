export type DevFeed = {
  "?xml": string;
  rss: Rss;
};

export type Rss = {
  channel: Channel;
};

export type Channel = {
  title: string;
  description: string;
  link: string;
  image: Image;
  "atom:link": string;
  language: string;
  item: Item[];
};

export type Item = {
  title: string;
  "dc:creator": string;
  pubDate: string;
  link: string;
  guid: string;
  description: string;
  category?: string[];
};

export type Image = {
  url: string;
  title: string;
  link: string;
};
