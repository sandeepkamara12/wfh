import { CalendarDays, Mail, Phone, UserRound, UserRoundPen } from 'lucide-react';

const Profile = () => {
    return (
        <div className="grid grid-cols-2 gap-4">
            <div className="col-span-2 flex gap-x-4 bg-white p-4 rounded">
                <div className="shrink-0">
                    <img className="shrink-0 size-20 rounded-full" src="https://images.unsplash.com/photo-1510706019500-d23a509eecd4?q=80&w=2667&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Avatar" />
                </div>

                <div className="text-sm text-navy grow flex flex-wrap justify-between items-center gap-2">
                    <div>
                        <span className="font-semibold tracking-wide pt-0.5 pb-1 px-2 rounded-full text-xs bg-navy/10">#2154879633</span>
                        <h2 className="font-bold text-lg mt-2 mb-1">
                            Mrs. Garima
                            <span className="ml-2 inline-flex flex-wrap items-center gap-1 text-xs font-semibold lowercase first-letter:uppercase">
                                <CalendarDays className="size-4" />
                                30 Years
                            </span>
                        </h2>
                        <div className="flex flex-wrap flex-col gap-1">
                            <span className="flex flex-wrap items-center gap-1">
                                <UserRoundPen className="size-4" /> 12th
                                <span className="text-orange">A</span>
                                <span className="text-xs font-medium">Non Medical</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="flex flex-wrap items-center gap-1">
                            <UserRound className="size-4" />
                            Mr. John Doe
                        </span>
                        <span className="flex flex-wrap items-center gap-1">
                            <Phone className="size-4" />
                            7986584210
                        </span>
                        <span className="flex flex-wrap items-center gap-1">
                            <Mail className="size-4" />
                            sandeep.d4d@gmail.com
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
