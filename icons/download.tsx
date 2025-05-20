const DownloadIcon: React.FC<{ color: string }> = ({ color }) => {
    return <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 12V4M8 4L4 8M8 4L12 8M2 14H14" stroke={color || "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>


}

export default DownloadIcon