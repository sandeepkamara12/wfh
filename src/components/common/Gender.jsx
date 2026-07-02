import RadioCard from '../ui/RadioCard'
import { Mars, Venus } from 'lucide-react'

const Gender = ({ formik, alignment = "justify-start", label }) => {
    return (
        <>
            {
                label &&
                <label className="block text-sm font-medium text-navy mb-1">{label}</label>
            }
            <div className={`grid grid-cols-2 ${alignment} gap-2`}>
                <RadioCard icon={<Mars className="size-5" />} text="Male" group="gender" formik={formik} id="male" error={formik.touched.gender && formik.errors.gender} />
                <RadioCard icon={<Venus className="size-5" />} text="Female" group="gender" formik={formik} id="female" error={formik.touched.gender && formik.errors.gender} />
            </div>
        </>
    )
}

export default Gender
