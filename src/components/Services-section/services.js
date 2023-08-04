import iconPerson from "../../assets/Icons/icon-person.png";
import iconCalendar from "../../assets/Icons/icon-calendar.png";
import iconHome from "../../assets/Icons/icon-home.png";
import iconPencil from "../../assets/Icons/icon-pencil.png";
const ourServices = [
    {
        id: 1,
        bgColor: "bg-[#EBB4B6]",
        title: "Tenant Management",
        description: "Store and access your renters' personal information like name, address, and phone number with ease.",
        icon: iconPerson,
        alt: " iconPerson"
    },
    {
        id: 2,
        bgColor: "bg-[#D1F2EB]",
        title: "Track Payment Records",
        description: "Keep a record of all your renters' monthly rent payments and have a complete overview of your rental income.",
        icon: iconCalendar,
        alt: "iconCalendar"
    },
    {
        id: 3,
        bgColor: "bg-[#D1F2EB]",
        title: " Rent Calculation",
        description: "Automatically calculate the total rent received each month and see a breakdown of payments.",
        icon: iconPencil,
        alt: "iconPencil"
    },
    {
        id: 4,
        bgColor: "bg-[#EBB4B6]",
        title: "Property Listing",
        description: " Showcase your rental properties and attract potential tenants by listing them on Rentalog.",
        icon: iconHome,
        alt: "iconHome"
    }
]
export default ourServices;