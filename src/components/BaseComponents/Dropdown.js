import React, { useState } from 'react';
import '../../styles/BaseComponents/Dropdown.scss';

export default function Dropdown(props) {
    const [toggle, setToggle] = useState(false);
    const [search, setSearch] = useState('');
    const [value, setValue] = useState('-- choose --');

    const handleSelect = element => {
        setValue(element.name);
        setToggle(false);
        setSearch('');
        props.onChange(element.id);
    }

    const elements = [];
    props.elements.forEach((element, index) => {
        element.name.toLowerCase().includes(search.toLowerCase()) && 
        elements.push(<div key={index} className='element' onClick={() => handleSelect(element)}>{element.name}</div>);
    })

    
    return (
        <div className='dropdown-wrapper'>
            <div className='dropdown-selection'>
                <div>{value}</div>
                <div className='dropdown-toggle' onClick={() => setToggle(!toggle)} />
            </div>
            {
                toggle &&
                <div className='dropdown-open'>
                    <input type='text' className='dropdown-input-decoration' placeholder='Search...' onChange={e => setSearch(e.target.value)} />
                    <div className='elements-wrapper'>
                        {elements.length === 0 ? <div className='no-results'>No Results</div> : elements}
                    </div>
                </div>
            }
        </div>
    )
}