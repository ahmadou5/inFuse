export const Loading = () => {
    return(
    <div className="inset-0 fixed bg-black/95 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex flex-col items-center px-6 justify-center">
            <p className="">Loading...</p>
        </div>
    </div>
    )
}