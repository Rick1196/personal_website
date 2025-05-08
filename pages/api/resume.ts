import { NextRequest } from "next/server";
import { Experience, Fact } from "../../types";
import { client } from "../../utils/sanityClient";

export default async function handler(req: NextRequest) {
  try {
    const experiences: Experience[] = await client.fetch(
      `*[_type == "experiences"]| order(_createdAt desc)`
    );
    const facts: Fact[] = await client.fetch(
      `*[_type == "facts"]| order(_createdAt desc)`
    );
    const resume = {
      experiences,
      facts,
    };
    return Response.json(resume, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      { message: "Unable to fetch resume data.", error: error },
      { status: 500 }
    );
  }
}
