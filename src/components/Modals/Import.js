import { GlobalContext } from "@/Context/AppContext"

export const ImportModal = () => {
    const { isImport,setIsImport ,one,
        two,
        three,
        four,
        five,
        six,
        seven,
        eight,
        nine,
        ten,
        eleven,
        twelve,
        setTwelve,
        setEleven,
        setTen,
        setNine,
        setEight,
        setSeven,
        setSix,
        setFive,
        setFour,
        setThree,
        setTwo,
        setOne,} = GlobalContext()

        console.log(`${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}`)
    return(
    <div className="inset-0 fixed bg-black/75 bg-opacity-100 w-[100%] z-[99999999] min-h-screen h-auto backdrop-blur-sm flex ">
        <div className="w-[100%] flex items-center px- justify-center">
            <div className="h-[490px] ml-auto mr-auto py-2.5 px-2 w-[95%] mb-[30px] bg-white/95 rounded-xl">
            <div>
                <div onClick={() => setIsImport(false)} className="w-20 rounded-xl text-xl text-white font-light flex items-center justify-center h-9 bg-black/85">
                    <p>esc</p>
                </div>
            </div>
            <div className="mt-3 ml-auto mr-auto flex flex-col items-center justify-center text-center">
                <p className="text-center text-black/85 font-light text-[18px] mb-2">{`Enter Your 12 Word seed Phrase`} </p>
                <div className="h-[330px] py-2 px-1 rounded-2xl bg-black/10 w-[98%]">
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">1.</p>
                       <input onChange={(e) => setOne(e.target.value)} value={one} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">2.</p>
                       <input onChange={(e) => setTwo(e.target.value)} value={two} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">3.</p>
                       <input onChange={(e) => setThree(e.target.value)} value={three} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">4.</p>
                       <input onChange={(e) => setFour(e.target.value)} value={four} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">5.</p>
                       <input onChange={(e) => setFive(e.target.value)} value={five} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">6.</p>
                       <input onChange={(e) => setSix(e.target.value)} value={six} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">7.</p>
                       <input onChange={(e) => setSeven(e.target.value)} value={seven} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">8.</p>
                       <input onChange={(e) => setEight(e.target.value)} value={eight} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">9.</p>
                       <input onChange={(e) => setNine(e.target.value)} value={nine} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">10.</p>
                       <input onChange={(e) => setTen(e.target.value)} value={ten} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                 <div className="bg-red-600/0 flex items-center justify-center h-[50px] w-full">
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">11.</p>
                       <input onChange={(e) => setEleven(e.target.value)} value={eleven} type="text" className="w-[78%] text-[18px] outline-none h-[90%] bg-transparent " />
                     </div>
                    </div>
                    <div className="w-[45%] mt-2 h-[85%]">
                     <div className="w-[95%] flex items-center justify-center py-1 rounded-2xl h-[98%] bg-black/25">
                       <p className="ml-1 text-[18px] mr-2">12.</p>
                       <input onChange={(e) => setTwelve(e.target.value)} value={twelve} type="text" className="w-[78%] outline-none text-[18px] h-[90%] bg-transparent " />
                     </div>
                    </div>
                 </div>
                
                </div>
                <div onClick={() => {
                    console.log(`${one} ${two} ${three} ${four} ${five} ${six} ${seven} ${eight} ${nine} ${ten} ${eleven} ${twelve}`)
                    //setIsImport(false)
                    }} className="w-[175px] mt-4 ml-auto mr-auto py-1 px-3 flex  items-center justify-center bg-black/95 rounded-full h-9">
                  <p className="text-white font-light ml-auto mr-auto ">{'Import'}</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    )
}