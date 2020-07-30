import React, {useState} from 'react';

const UnicronFunc = props => {
    const [ unicornsState, setUnicornsState ] = useState({
        unicorns: [
            { name: 'Sparkles', magic: 'fire' },
            { name: 'Rainbowfarts', magic: 'poison' },
            { name: 'Dingle Berries', magic: 'cold' }
          ]
    });

    const switchNameHandler = () => {
        //  DONT DO THIS this.state.unicorns[0] = "DERP";
        setUnicornsState( {
            unicorns: [
                { name: 'Derp', magic: 'fire' },
                { name: 'Rainbowfarts', magic: 'poison' },
                { name: 'Dingle Berries', magic: 'cold' }
            ]
        });
    };

    return (
        <div>
            <button onClick={switchNameHandler}> Switch Name </button>
            <p>I'm a unicorn and my name is {unicornsState.unicorns[0].name} and i am {unicornsState.unicorns[0].magic}</p>
            <p>I'm a unicorn and my name is {unicornsState.unicorns[1].name} and i am {unicornsState.unicorns[1].magic}</p>
        </div>
    );
};

export default UnicronFunc;