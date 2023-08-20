import { BuildingOfficeIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon } from "@heroicons/react/24/outline";
import { PhoneIcon, CalendarDaysIcon, BookOpenIcon } from "@heroicons/react/24/outline";

export const fields = [
    {
        icon: BuildingOffice2Icon, label: "school", field: "Select School", id: "school", option: [""
            , "Atal Bihari Vajapayee School Of Management And Entrepreneurship", "Centre For The Study Of Law And Governance"
            , "Centre For Sanskrit Studies"
            , "School of International studies"
            , "School Of Arts & Aesthetics"
            , "School Of Biotechnology"
            , "School Of Computational And Integrative Sciences"
            , "Special Centre For Molecular Medicine"
            , "Special Centre For Nanoscience"
            , "School Of Computer And Systems Sciences"
            , "School Of Environmental Sciences"
            , "School Of Physical Sciences"
            , "School Of International Studies-Centre For European Studies"
            , "School Of Life Sciences"
            , "School of Engineering"
            , "School of languages"
        ]
    },
    {
        icon: BookOpenIcon, label: "Program", field: "Select Program", id: "program", option: ["", "B.Tech", "M.Tech", "M.Sc", "B.A", "M.A", "PHD"],
    },
    { icon: PhoneIcon, leble: "Mobile", id: "number", tag: "input", type: "number" },
    {
        icon: BuildingOfficeIcon, label: "Hostel", field: "Select Hostel", id: "hostel", option: ["",
            "Brahmaputra (boys)",
            "Chandrabhaga (boys & girls)",
            "Ganga (girls)",
            "Godavari (girls)",
            "Jhelum (boys)",
            "Kaveri (boys)",
            "Koyna (girls)",
            "Lohit (boys & girls)",
            "Mahi/Mandavi (boys)",
            "Mahanadi (MRSH) (married students)",
            "Narmada (boys)",
            "Periyar (boys)",
            "Sabarmati (boys & girls)",
            "Shipra (girls)",
            "Sutlej (boys)",
            "Tapti (boys & girls)",
            "Yamuna (Working Women)",
            "Damodar"
        ]
    },
    {
        icon: CalendarDaysIcon, label: "Joining Year", type: "number", id: 'joiningYear', placeholder: "Year of Joining",
    },
    {
        icon: CalendarDaysIcon, type: "number", id: 'graduationYear', placeholder: "Year of Graduation", label: "Graduation Year",
    },
];