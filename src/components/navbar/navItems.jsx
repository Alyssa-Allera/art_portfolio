import { FaAngleDown } from "react-icons/fa6"

export default function NavItems (props) {

    let flexxer = 'flex-col'

    function isDropdown(val) {
        if(val) {
            return (
                <span className="text-lg "><FaAngleDown /> </span>
            )
        }
    }
    return (
        <>
            <div className="flex flex justify-between items-center">
                <div className="flex gap-x-5 ">
                    <span className="text-2xl">{props.icon}</span>
                    <span className="text-xl">{props.title}</span>
                </div>
                {isDropdown(props.isDropdown)}
            </div>
        </>
    )
}