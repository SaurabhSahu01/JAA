export const userInfoField = [
    { label: "firstName", type: "text", id: 'firstName', placeholder: "FirstName" },
    { label: "lastName", type: "text", id: 'lastName', placeholder: "lastName" },
    {
        label: "Gender", id: 'gender', option: [
            { value: "", text: "Select Gender" },
            { value: "male", text: "Male" },
            { value: "female", text: "Female" },
        ]
    },
    { label: "Date of Birth", type: "date", id: 'dob' },
    { label: "Phone No.", type: "number", id: 'number', placeholder: "Phone Number" },
    // { label: "Email", type: "email", id: 'email', placeholder: "E-mail" },
]