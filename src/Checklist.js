import React, {useState, useEffect} from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const getLocalStorage = () => {
    let list = localStorage.getItem('list');
    if(list) {
        return JSON.parse(localStorage.getItem('list'));
    } else {
        return [];
    }
}

const Checklist = () => {
    const [name, setName] = useState('');
    const [list, setList] = useState(getLocalStorage());
    const [isEditing, setIsediting] = useState(false);
    const [editID, setEditId] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('hello')
        // console.log("\""+name+"\"" + isEditing)
        if (name === '' || isEditing) {
            setList(list.map((item) => {
                if(item.id === editID) {
                    return {...item, title: name}
                }
                return item
            }))
            setName('');
            setEditId('null');
            setIsediting(false);
        } else {
            const newItem = {
                id: new Date().getTime().toString(),
                title: name
            };
            setList([...list, newItem]);
            setName('');
        }
    }

    const clearlist = () => {
        setList([]);
    }

    const removeItem = (id) => {
        setList(list.filter((item) => item.id !== id))
    }

    const editItem = (id) => {
        const specificItem = list.find((item) => item.id === id);
        setIsediting(true);
        setEditId(id);
        setName(specificItem.title);
    }

    useEffect(() => {
        localStorage.setItem('list', JSON.stringify(list))
    }, [list])

    return (
        <section className='section form center content'>
            <div className='checklist'>
                <form className='checklist-form' action="" onSubmit={handleSubmit}>
                    <h3>Checklist</h3>
                    <div className='form-control'>
                        <input 
                            type="text" 
                            className='checkitem' 
                            placeholder='e.g. book a hotel' 
                            value={name} 
                            onChange={(e) => {setName(e.target.value)}}
                        />   
                        <button type='submit' className='submit-btn btn btn--checklist'>
                            {isEditing ? 'edit' : 'submit'}
                        </button>
                    </div>
                </form>
                {list.length > 0 && (
                    <div className='checklist-container'>
                        <div className='checklist-list' list={list}>
                            {list.map((item) => {
                                const {id, title} = item;
                                return (
                                    <article key={id} className="checklist-item">
                                        <p className='title'>{title}</p>
                                        <div className='btn-container'>
                                            <button type='button' className='edit-btn' onClick={() => editItem(id)}>
                                                <FaEdit />
                                            </button>
                                            <button type='button' className='delete-btn' onClick={() => removeItem(id)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </article>
                                )
                            })}
                        </div>
                        <button className='clear-button btn btn--clear' onClick={clearlist}>
                            clear items
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Checklist;