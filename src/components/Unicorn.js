import React, {Component} from 'react';
import './Unicorn.css';
import shortid from 'shortid';

class Unicorn extends Component{
    state = {
        unicorns: [
          { id: shortid.generate(), name: 'Sparkles', magic: 'fire' },
          { id: shortid.generate(), name: 'Rainbowfarts', magic: 'poison' },
          { id: shortid.generate(), name: 'Dingle Berries', magic: 'cold' }
        ],
        oldState: {},
        showUnicorns: false
      }
    
    switchNameHandler = (newName) => {
        // const changed = [{ name: 'Derp', magic: 'fire' }];
        this.setState( {
            unicorns: [
                { name: newName, magic: 'fire' },
                { name: 'Rainbowfarts', magic: 'poison' },
                { name: 'Dingle Berries', magic: 'cold' }
            ]
        });
    }

    toggleUnicornHandler = () => {
        const doesShow = this.state.showUnicorns;
        this.setState({showUnicorns: !doesShow});
    }

    deleteUnicornHandler = (index) => {
        // Immutable Copy state so not manipulating directrly
        // const u = this.state.unicorns.slice();
        // ES6 Copy array
        const u = [...this.state.unicorns]
        u.splice(index,1);
        this.setState({unicorns: u})
    }


    //Event handler for input box
    nameChangeHandler = (event, unicronIndex) => {
        // If using generatedShortId findIndex
        // const unicronIndex = this.state.unicorns.find(u => {
        //     return u.id === id;
        // });
        const u = { ...this.state.unicorns[unicronIndex], name: event.target.value};

        const newUnicorns = [...this.state.unicorns];
        newUnicorns[unicronIndex] = u;

        this.setState({unicorns: newUnicorns})

    }

    buildUnicorns = () => {
        const unicron = this.state.unicorns;
        return unicron.map((u, index)=> (
          <div key={u.id} className="Unicorn">
              <p onClick={() => this.deleteUnicornHandler(index)}>I'm a unicorn and my name is {u.name} and i am {u.magic}</p>
              <input type='text' onChange={(event) => this.nameChangeHandler(event, index)}/>
          </div>
        ));
    }

    getStyle = () => {
        const bg = !this.state.showUnicorns ? 'green' : 'red';
        const style = {
            backgroundColor: bg,
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            marginTop: '5px'
        }
        return style;
    }

    render(){
        return (
            <div>
                {/* <button className="UnicronButton" onClick={this.switchNameHandler.bind(this, 'BlueBerry')}> Switch Name </button> */}
                <button style={this.getStyle()} onClick={this.toggleUnicornHandler}> Show Unicorns </button>
                { this.state.showUnicorns  ? this.buildUnicorns() : null }
            </div>
        )
    }
}

export default Unicorn;