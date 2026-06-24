import { Eye } from "lucide-react"

const Note = () => {
    return (
        <div className="relative flex flex-wrap items-center justify-center w-20 h-20 group">
            <div className="absolute top-1 -right-1 bg-red-400 rounded-full w-6 h-6 flex flex-wrap items-center justify-center z-50">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trash2-icon lucide-trash-2 text-white">
                    <path d="M10 11v6" /><path d="M14 11v6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /><path d="M3 6h18" /><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                </svg>
            </div>
            <img className="inline-block w-full h-full rounded-full" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80" alt="Avatar" />
            <div className="absolute w-full h-full flex flex-wrap items-center justify-center bg-navy/60 rounded-full z-40 group-hover:bg-navy/90 cursor-pointer transition-all duration-300 ease-in-out text-white">
                <Eye className="lucide lucide-arrow-down-to-line-icon lucide-arrow-down-to-line absolute left-0 right-0 mx-auto" />
            </div>
        </div>
    )
}

export default Note
