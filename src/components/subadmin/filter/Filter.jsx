import { useEffect } from 'react';
import CustomSelect from '../../ui/CustomSelect'
import { getClassroomThunk } from '../../../features/subAdmin/classroomSlice';
import { useDispatch, useSelector } from 'react-redux';
import { classOptions, subjectOptions } from '../../../const/constant';
import CustomDatePicker from '../../ui/CustomDatePicker';

const Filter = () => {
    const dispatch = useDispatch();
    let classrooms = useSelector((state) => state.classroom.classrooms);
    console.log(classrooms, 'classrooms');
    useEffect(() => {
        const fetchClassrooms = async () => {
            try {
                const result = await dispatch(getClassroomThunk()).unwrap();
                if (result?.success) {
                    console.log('classrooms loaded!')
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchClassrooms();
    }, []);
    return (
        <div>
            <h2>Global Search</h2>
            {/* <TextField label="Search Teacher via Teacher Id." /> */}
            <CustomSelect
                options={classOptions}
                selectType="classroom"
                label="Classroom Incharge"
                placeholder="Search Classroom"
            />
            <CustomSelect
                options={classOptions}
                selectType="classroom"
                label="Other Classes"
                placeholder="Search Other Classes"
            />
            <CustomSelect
                options={subjectOptions}
                selectType="subject"
                label="Subject"
                placeholder="Search Subject"
            />
            <CustomDatePicker name="joining_date" label="Joining Date" />
        </div>
    )
}

export default Filter
