import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import {BuildingOffice2Icon} from "@heroicons/react/24/outline";
import {PhoneIcon, CalendarDaysIcon, BookOpenIcon} from "@heroicons/react/24/outline";

export const fields = [
    {
        icon: BuildingOffice2Icon, leble: "School", field: "school", tag: "select", option: [
            { value: "", text: "Select School" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
            { value: "soe", text: "School of Engineering" },
        ]
    },
    {
        icon: BookOpenIcon, leble: "Program", field: "program", tag: "select", option: [
            { value: "", text: "Select Program" },
            { value: "btech", text: "B.Tech" },
            { value: "bsc", text: "B.Sc" },
            { value: "ba", text: "B.Art" },
        ]
    },
    { icon: PhoneIcon, leble: "Mobile", field: "number", tag: "input", type:"number" },
    {
        icon: BuildingOfficeIcon, leble: "Hostel", field: "hostel", tag: "select", option: [
            { value: "", text: "Select Hostel" },
            { value: "mahimandvi", text: "Mahi-Mandvi" },
            { value: "lohit", text: "Lohit" },
            { value: "periyar", text: "Periyar" },
            { value: "satulaj", text: "Satulaj" },
            { value: "ganga", text: "Ganga" },
        ]
    },
    {
        icon: CalendarDaysIcon, leble: "Joining Year", field: "joiningYear", tag: "select", option: [
            { value: "", text: "Year of Joining" },
            { value: "2018", text: "2018" },
            { value: "2019", text: "2019" },
            { value: "2020", text: "2020" },
            { value: "2021", text: "2021" },
            { value: "2022", text: "2022" },
            { value: "2023", text: "2023" },
            { value: "2024", text: "2024" },
        ]
    },
    {
        icon: CalendarDaysIcon, leble: "Graduation Year", field: "graduationYear", tag: "select", option: [
            { value: "", text: "Year of Graduation" },
            { value: "2023", text: "2023" },
            { value: "2024", text: "2024" },
            { value: "2025", text: "2025" },
            { value: "2026", text: "2026" },
            { value: "2027", text: "2027" },
        ]
    },
];