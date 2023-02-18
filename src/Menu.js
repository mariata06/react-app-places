import React from 'react';

const Menu = ({items}) => {

    return (
        <section className='section menu center'>
            {items.map((menuItem) => {
                const {id, name, image, info} = menuItem;
                return (
                    <article key={id} className='menu-item'>
                        <img src={image} alt={name} className='photo' />
                        <div className='item-info'>
                            <header>
                                <h4>{name}</h4>
                                <p className='item-text'>{info}</p>
                            </header>
                        </div>
                    </article>
                );
            })}
        </section>
    )
}

export default Menu;