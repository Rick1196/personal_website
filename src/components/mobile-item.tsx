"use client"
import Link from "next/link";
import { useMemo } from "react";

export const inIframe = () => {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};


export default function MobileLink() {
    const isInFrame = useMemo(inIframe, [])

    return !isInFrame ? (
        <Link
            href="/mobile"
        >
            Check a mobile device preview
        </Link>
    ) : null
}