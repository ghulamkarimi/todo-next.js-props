import React from 'react'
import { IItem } from "../interface"
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillEdit, AiOutlineCheck } from 'react-icons/ai';

interface IItemProps {
    items: IItem[],
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
    filter: string,
    setFilter: React.Dispatch<React.SetStateAction<string>>,
}
const Item = ({ items, setItems, filter, setFilter }: IItemProps) => {

    const editVorItem = (id: string) => {
        const index = items.findIndex((item) => item.id === id);
        const newItems = [...items]
        setFilter(newItems[index].title)
        newItems[index].done = !newItems[index].done;
    };

    const deleteItem = (id: string) => {
        const newItem = items.filter((items) => items.id !== id);
        setItems(newItem)
    }

    const editItem = (id: string) => {
        const index = items.findIndex((item) => item.id === id);
        const newItems = [...items]
        newItems[index].title = filter;
        newItems[index].done = !newItems[index].done;
        setItems(newItems)
        setFilter("")
    }
    return (
        <ul className='bg-slate-600 flex rounded-xl flex-col  justify-center items-center mt-8 px-2'>
            {
                items.map((item) => (
                    <li className={`flex flex-wrap  px-1 w-full  bg-white my-2 py-2 rounded-lg justify-between items-center ${item.done ? "border-l-4 border-r-4 border-yellow-400 ":"border-l-4 border-r-4 border-green-500 "}`}
                        key={item.id}

                    >{item.title}
                        <span className='flex items-center gap-4'>
                            <FaTrashAlt className="text-xl text-red-400 cursor-pointer" onClick={() => { deleteItem(item.id) }} />
                            <AiFillEdit className={`text-2xl text-orange-500 cursor-pointer ${item.done ? "hidden" : "flex"}`} onClick={() => { editVorItem(item.id) }} />
                            < AiOutlineCheck className={`text-2xl text-green-500 cursor-pointer ${item.done ? "flex" : "hidden"}`} onClick={() => { editItem(item.id) }} />
                        </span>
                    </li>
                ))
            }
        </ul>
    )
}

export default Item
