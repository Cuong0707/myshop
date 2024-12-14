import React,{useState} from "react";
import './DropdownMenu.css'


const DropdownMenu = ({categories,title}) => {
    const [isOpen, setIsOpen] = useState(false);
    const item = categories;
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="dropmenu">
            <div onClick={toggleMenu} className='dropmenu-title'>
                <div>
                    {title}
                    <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "transform 0.3s ease", }}>▼</span>
                </div>
                <hr/>
            </div>
            {
                isOpen && (
                    <div className={"dropmenu open"}>
                        <ul>
                        {item.map((category, index) => (
                            <li key={index}>
                                {category}
                            </li>
                        ))}
                    </ul>
                    </div>
                )
            }
        </div>
    )
}
export default DropdownMenu;