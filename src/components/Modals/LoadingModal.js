import { SpinningCircles } from 'react-loading-icons'
export const Loading = () => {
    return(
        <div className="inset-0 fixed bg-black bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] h-[auto] flex flex-col items-center justify-center">
           <div className="w-auto h-auto mt-1 mb-4">
            <img src='https://earn-fuse.vercel.app/assets/show.png' className="w-[210px] h-[210px]" />
           </div>
           <div class="loader"></div> 
        </div>
    </div>
    )
}