import React from 'react'

interface SidebarProps {
    isOpen:boolean
    toggleMenu: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`bg-gray-900 text-white fixed top-0 left-0 h-full w-64 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
            <button onClick={toggleMenu} className="p-2 m-2 bg-gray-700 rounded">Закрыть</button>
            <ul className="mt-10 flex flex-col gap-4 pl-4">
                <li>Главная</li>
                <li>О нас</li>
                <li>Магазин</li>
                <li>Отзывы</li>
            </ul>
        </div>
    );
};


export default Sidebar