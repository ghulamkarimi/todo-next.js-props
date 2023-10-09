import { IItem } from '@/interface';
import React from 'react'
import Item from './Item';

interface ITopForm {
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>;
    items: IItem[];
    setItems: React.Dispatch<React.SetStateAction<IItem[]>>;
}
const TopForm = ({ filter, setFilter, items, setItems }: ITopForm) => {


    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter(e.target.value)
    }
    const add = () => {
        if (filter.trim() !== "") {
            setItems([...items, { id: new Date().toISOString(), title: filter, done: false }]);

            return setFilter("");

        } else
            return;
    };

    return (
        <div>
            <div className='flex bg-slate-700  rounded-xl gap-4 '>
                <input className='bg-transparent outline-0 px-2 text-white' type="text" value={filter} onChange={inputChange} />
                <button className='border-l h-full flex py-2 px-4 gap-4 text-white' onClick={add}>Add</button>
            </div>
            <div>
                <Item items={items} setItems={setItems} filter={filter} setFilter={setFilter} />
            </div>
        </div>
    )
}

export default TopForm
