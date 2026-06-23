// make this use real db data later

export default function ProfilePin() {
    return (
        <div className="p-2 m-2 h-56 rounded-lg border-2 border-mocha-800/5 bg-mocha-100">
            <div className="w-full h-36 bg-mocha-200 rounded-lg" id="workPreview"></div>

            <div className="flex flex-row mt-4 gap-2" id="workInformation">
                <div className="flex flex-col justify-center flex-1" id="left">
                    <div className="text-xs font-outfit font-medium">
                        Fanart of Something
                    </div>
                </div>
                <div className="flex items-end flex-col flex-1" id="right">
                    <div className="rounded bg-mocha-800/10 px-2 py-1" id="medium">
                        <div className="text-[9px] font-outfit text-black/50">
                            traditional drawing
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-[10px] font-outfit text-black/50 mt-1">
                i made this because i thought it looked nice
            </div>
        </div>
    )
}