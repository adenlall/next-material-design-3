export default function Current() {
    return <div className="container m-auto">
        <div className="w-full rounded-box primary flex flex-col gap-2 p-4 my-4">
            <div className="w-3 h-3 absolute top-5 right-5 primary-container animate-ping"></div>
            <h2 className="m-0">Cuurently Working On</h2>
            <p className="m-0 pl-4 ">
                <a href="https://github.com/adenlall/travelo"><strong className="underline">Travelo</strong> - Ongoing developement</a>
            </p>
            <p className="m-0 pl-4">
            Travelo is a platform that connects travelers with potential trip companions and local guides. It allows users to find and connect with other like-minded individuals to share travel experiences, explore destinations together, and gain insider knowledge from local experts.
            </p>
        </div>
    </div>
}