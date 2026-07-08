import RadioCard from '../ui/RadioCard'
import { GraduationCap, UserRoundPen } from 'lucide-react'

const Role = ({formik, label}) => {
    return (
        <>
            {
                label &&
                <label className="block text-sm font-medium text-navy mb-1">{label}</label>
            }
            <div className="grid grid-cols-2 gap-2">
                <RadioCard className="col-span-1" icon={<UserRoundPen className="shrink-0 size-5" />} text="Teacher" group="role" formik={formik} id="teacher" error={formik.touched.role && formik.errors.role} />
                <RadioCard className="col-span-1" icon={<GraduationCap className="shrink-0 size-5" />} text="Student" group="role" formik={formik} id="student" error={formik.touched.role && formik.errors.role} />
            </div>
        </>
    )
}

export default Role
