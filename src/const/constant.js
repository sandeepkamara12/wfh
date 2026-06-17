import {
  Brush,
  Divide,
  Heading,
  Laptop,
  Microscope,
  SpellCheck,
  Stethoscope,
  BookOpenText,
  GalleryThumbnails,
  GraduationCap,
  LayoutGrid,
  Network,
  SquareChartGantt,
  UserRoundPen,
  UserRoundPlus,
} from "lucide-react";

export const subAdminSidebarLinks = [
  { id: 1, path: "/sub-admin/assignments", label: "Assignments", icon: UserRoundPlus },
  { id: 2, path: "/sub-admin/teachers", label: "Teachers", icon: UserRoundPen },
  { id: 3, path: "/sub-admin/students", label: "Students", icon: GraduationCap },
  { id: 4, path: "/sub-admin/classrooms", label: "Classrooms", icon: GalleryThumbnails },
  { id: 5, path: "/sub-admin/streams", label: "Streams", icon: Network },
  { id: 6, path: "/sub-admin/sections", label: "Sections", icon: LayoutGrid },
  { id: 7, path: "/sub-admin/subjects", label: "Subjects", icon: BookOpenText },
  { id: 8, path: "/sub-admin/homework", label: "Homework", icon: SquareChartGantt}, // this one is fine
];

export const teacherSidebarLinks = [
  { id: 1, path: "/teacher/profile", label: "Profile", icon: UserRoundPlus },
  { id: 2, path: "/teacher/upload-document", label: "Upload Documemt", icon: UserRoundPen },
  { id: 3, path: "/teacher/students", label: "Students", icon: GraduationCap },
  { id: 8, path: "/teacher/homework", label: "Homework", icon: SquareChartGantt },
];

export const teacherOptions = [
  { value: "1235678941", label: "Mrs. Anita Rai", image: "/student.jpg" },
  { value: "2457896312", label: "Mrs. Sonam Kapoor", image: "/student.jpg" },
  { value: "0265314783", label: "Mr. Rohit Sharma", image: "/student.jpg" },
];

export const studentOptions = [
  { value: "1235678940", label: "Harmeet Singh", image: "/student.jpg" },
  { value: "2457896310", label: "Jaswant Singh", image: "/student.jpg" },
  { value: "0265314789", label: "Sandeep Singh", image: "/student.jpg" },
];

export const classOptions = [
  { value: "1235678940", label: "1st" },
  { value: "1235678940", label: "2nd" },
  { value: "1235678940", label: "3rd" },
  { value: "2457896310", label: "4th" },
  { value: "0265314789", label: "5th" },
  { value: "0265314789", label: "6th" },
  { value: "0265314789", label: "7th" },
  { value: "0265314789", label: "8th" },
  { value: "0265314789", label: "9th" },
  { value: "0265314789", label: "10th" },
  { value: "0265314789", label: "11th" },
  { value: "0265314789", label: "12th" },
];

export const streamOptions = [
  { value: "1235678941", label: "Medical", icon: Stethoscope },
  { value: "2457896312", label: "Non Medical", icon: Microscope },
  { value: "0265314783", label: "Arts", icon: Brush },
  { value: "0265314784", label: "Commerce", icon: Laptop },
];

export const sectionOptions = [
  { value: "1235678941", label: "A" },
  { value: "2457896312", label: "B" },
  { value: "0265314783", label: "C" },
  { value: "0265314784", label: "D" },
  { value: "0265314785", label: "E" },
  { value: "0265314786", label: "F" },
];

export const subjectOptions = [
  { value: "1235678941", label: "Maths", icon: Divide },
  { value: "2457896312", label: "English", icon: SpellCheck },
  { value: "0265314783", label: "Hindi", icon: Heading },
];

export const teachersData = [
  {
    id: "#2154879633",
    name: "Aria Chen",
    photo: "/public/student.jpg",
    email: "christina@site.com",
    phone: 7986602514,
    inchargeOf: "3rd",
    section: "A",
    classesTeach: [
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
    ],
    spouseName: "Mr. Charanjeet Singh",
    createdAt: "28 Dec, 12:12",
  },
  {
    id: "#2154879630",
    name: "Aria Chen",
    photo: "/public/student.jpg",
    email: "christina@site.com",
    phone: 7986602514,
    inchargeOf: "3rd",
    section: "A",
    classesTeach: [
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
    ],
    spouseName: "Mr. Charanjeet Singh",
    createdAt: "28 Dec, 12:12",
  },
  {
    id: "#2154879631",
    name: "Marcus Webb",
    photo: "/public/student.jpg",
    email: "christina@site.com",
    phone: 7986602514,
    inchargeOf: "3rd",
    section: "B",
    classesTeach: [
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
      { class: "3rd", section: "A", stream: "", subject: "Maths" },
      { class: "4th", section: "C", stream: "", subject: "Hindi" },
      { class: "5th", section: "C", stream: "", subject: "English" },
      {
        class: "12th",
        section: "C",
        stream: "Non Medical",
        subject: "Physics",
      },
    ],
    spouseName: "Mr. Charanjeet Singh",
    createdAt: "28 Dec, 12:12",
  },
];

export const streamData = [
  { id: "#2154879630", stream: "Medical", createdAt: "28 Dec, 12:12" },
  { id: "#2154879631", stream: "Non Medical", createdAt: "28 Dec, 12:12" },
  { id: "#2154879632", stream: "Commerce", createdAt: "28 Dec, 12:12" },
  { id: "#2154879633", stream: "Arts", createdAt: "28 Dec, 12:12" },
];

export const classroomData = [
  { id: "#2154879630", classroom: "3rd", createdAt: "28 Dec, 12:12" },
  { id: "#2154879631", classroom: "4th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879632", classroom: "5th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879633", classroom: "6th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879634", classroom: "7th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879635", classroom: "8th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879636", classroom: "9th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879637", classroom: "10th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879638", classroom: "11th", createdAt: "28 Dec, 12:12" },
  { id: "#2154879639", classroom: "12th", createdAt: "28 Dec, 12:12" },
];

export const sectionData = [
  { id: "#2154879630", section: "A", createdAt: "28 Dec, 12:12" },
  { id: "#2154879631", section: "B", createdAt: "28 Dec, 12:12" },
  { id: "#2154879632", section: "C", createdAt: "28 Dec, 12:12" },
  { id: "#2154879633", section: "D", createdAt: "28 Dec, 12:12" },
  { id: "#2154879634", section: "E", createdAt: "28 Dec, 12:12" },
  { id: "#2154879635", section: "F", createdAt: "28 Dec, 12:12" },
];

export const subjectData = [
  { id: "#2154879630", subject: "Mathematics", createdAt: "28 Dec, 12:12" },
  { id: "#2154879631", subject: "English", createdAt: "28 Dec, 12:12" },
  { id: "#2154879632", subject: "Science", createdAt: "28 Dec, 12:12" },
  { id: "#2154879633", subject: "Hindi", createdAt: "28 Dec, 12:12" },
  { id: "#2154879634", subject: "Physics", createdAt: "28 Dec, 12:12" },
  { id: "#2154879635", subject: "Chemistry", createdAt: "28 Dec, 12:12" },
  { id: "#2154879636", subject: "Computer Science", createdAt: "28 Dec, 12:12"},
  { id: "#2154879637", subject: "Physical Education", createdAt: "28 Dec, 12:12"},
  { id: "#2154879638", subject: "Accountancy", createdAt: "28 Dec, 12:12" },
  { id: "#2154879639", subject: "Business Studies", createdAt: "28 Dec, 12:12"},
  { id: "#2154879610", subject: "Economics", createdAt: "28 Dec, 12:12" },
  { id: "#2154879611", subject: "History", createdAt: "28 Dec, 12:12" },
  { id: "#2154879612", subject: "Political Science", createdAt: "28 Dec, 12:12"},
  { id: "#2154879613", subject: "Sociology", createdAt: "28 Dec, 12:12" },
  { id: "#2154879614", subject: "Geography", createdAt: "28 Dec, 12:12" },
  { id: "#2154879615", subject: "Psychology", createdAt: "28 Dec, 12:12" },
];

export const homeworkData = [
  { id: "#2154879630", name: "Aria Chen", photo: "/public/student.jpg", phone: 7986602514, inchargeOf: "3rd", stream: "Arts", section: "A", subject: "Maths", note: "", createdAt: "28 Dec, 12:12"},
  { id: "#2154879631", name: "Marcus Webb", photo: "/public/student.jpg", phone: 7986602514, inchargeOf: "3rd", stream: "Medical", section: "B", subject: "English", note: "", createdAt: "28 Dec, 12:12"},
];
