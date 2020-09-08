import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma3 grow bw2 tc shadow-5'>
            <img src={`https://robohash.org/${props.id}?200x200`} alt='' />
            <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card 