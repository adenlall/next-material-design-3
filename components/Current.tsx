import Link from "next/link";

export default function Current() {
    return <Link href={"/projects/travelos"} className="md:w-1/2 w-full h-auto rounded-box secondary-container flex flex-col gap-2 p-4">
        <div className="w-3 h-3 absolute top-5 right-5 secondary-container animate-ping"></div>
        <h2 className="m-0 w-fit text-start">Project In progress</h2>
        <p className="m-0 pl-4 ">
            <strong className="underline mx-1">Travelos</strong> - <span className="mx-1">open source</span>
            {" - Ongoing developement"}
        </p>
        <p className="m-0 pl-4">
            Travelos is a platform that connects travelers with potential trip companions and local guides. It allows users to find and connect with other like-minded individuals to share travel experiences, explore destinations together, and gain insider knowledge from local experts.
        </p>
    </Link>
}