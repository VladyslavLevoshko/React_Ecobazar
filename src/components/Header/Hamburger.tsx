import React from 'react'
import Heart from './Heart.tsx'

interface HamburgerProps {
    isOpen:boolean;
    SetIsOpen : () => void;
}

const Hamburger : React.FC<HamburgerProps> = ({isOpen, SetIsOpen}) => {
    return(
        <button onClick={SetIsOpen}>
            {isOpen ? (<Heart/>) : (
                <div className='flex flex-col gap-2' >
                    <span className="block h-[3px] w-[30px] rounded bg-gray-800"></span>
                    <span className="block h-[3px] w-[30px] rounded bg-gray-800"></span>
                    <span className="block h-[3px] w-[30px] rounded bg-gray-800"></span>
                </div>        
              )}
        </button>
    )
}

export default Hamburger