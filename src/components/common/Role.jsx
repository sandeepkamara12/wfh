import RadioCard from '../ui/RadioCard'
import { GraduationCap, UserRoundPen } from 'lucide-react'

const Role = ({formik, label}) => {
    return (
        <div>
            {
                label &&
                <label className="block text-sm font-medium text-navy mb-1">{label}</label>
            }
            <div className="grid grid-cols-2 gap-2">
                <RadioCard icon={<UserRoundPen className="size-5" />} text="Teacher" group="role" formik={formik} id="teacher" error={formik.touched.role && formik.errors.role} />
                <RadioCard icon={<GraduationCap className="size-5" />} text="Student" group="role" formik={formik} id="student" error={formik.touched.role && formik.errors.role} />
            </div>
        </div>
    )
}

export default Role
