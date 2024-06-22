export const Welcome = () => {
    return(
    <div className="inset-0 fixed bg-black/95 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="flex items-center px- justify-center">
            <div className="h-28 w-[80%] bg-white rounded-xl">
            <div>
                <div onClick={() => setIsReceive(false)} className="w-20 rounded-xl text-xl font-light flex items-center justify-center h-9 bg-white/5">
                    <p>esc</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}