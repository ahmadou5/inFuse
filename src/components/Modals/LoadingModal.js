export const Loading = () => {
    return(
    <div className="inset-0 fixed bg-black/95 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="flex items-center px- justify-center">
            <p className="text-center ml-auto mr-auto">Loading...</p>
        </div>
    </div>
    )
}