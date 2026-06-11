import { Brush, Divide, Heading, Laptop, Microscope, SpellCheck, Stethoscope, BookOpenText, GalleryThumbnails, GraduationCap, LayoutGrid, Network, SquareChartGantt, UserRoundPen, UserRoundPlus } from 'lucide-react';
export const sidebarLinks = [
    { id: 1, path: '/assignments', label: "Assignments", icon: UserRoundPlus },
    { id: 2, path: '/teachers', label: "Teachers", icon: UserRoundPen },
    { id: 3, path: '/students', label: "Students", icon: GraduationCap },
    { id: 4, path: '/classrooms', label: "Classrooms", icon: GalleryThumbnails },
    { id: 5, path: '/streams', label: "Streams", icon: Network },
    { id: 6, path: '/sections', label: "Sections", icon: LayoutGrid },
    { id: 7, path: '/subjects', label: "Subjects", icon: BookOpenText },
    { id: 8, path: '/homework', label: "Homework", icon: SquareChartGantt },
];
export const teacherOptions = [
    { value: '1235678941', label: 'Mrs. Anita Rai', image: "/student.jpg" },
    { value: '2457896312', label: 'Mrs. Sonam Kapoor', image: "/student.jpg" },
    { value: '0265314783', label: 'Mr. Rohit Sharma', image: "/student.jpg" }
];

export const studentOptions = [
    { value: '1235678940', label: 'Harmeet Singh', image: "/student.jpg" },
    { value: '2457896310', label: 'Jaswant Singh', image: "/student.jpg" },
    { value: '0265314789', label: 'Sandeep Singh', image: "/student.jpg" }
];

export const classOptions = [
    { value: '1235678940', label: '1st' },
    { value: '1235678940', label: '2nd' },
    { value: '1235678940', label: '3rd' },
    { value: '2457896310', label: '4th' },
    { value: '0265314789', label: '5th' },
    { value: '0265314789', label: '6th' },
    { value: '0265314789', label: '7th' },
    { value: '0265314789', label: '8th' },
    { value: '0265314789', label: '9th' },
    { value: '0265314789', label: '10th' },
    { value: '0265314789', label: '11th' },
    { value: '0265314789', label: '12th' }
];

export const streamOptions = [
    { value: '1235678941', label: 'Medical', icon: Stethoscope },
    { value: '2457896312', label: 'Non Medical', icon: Microscope },
    { value: '0265314783', label: 'Arts', icon: Brush },
    { value: '0265314784', label: 'Computer', icon: Laptop }
];

export const sectionOptions = [
    { value: '1235678941', label: 'A'},
    { value: '2457896312', label: 'B'},
    { value: '0265314783', label: 'C'},
    { value: '0265314784', label: 'D'},
    { value: '0265314785', label: 'E'},
    { value: '0265314786', label: 'F'},
];

export const subjectOptions = [
    { value: '1235678941', label: 'Maths', icon: Divide },
    { value: '2457896312', label: 'English', icon: SpellCheck },
    { value: '0265314783', label: 'Hindi', icon: Heading }
];