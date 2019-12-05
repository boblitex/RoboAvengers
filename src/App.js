import React, { useState } from 'react';
import CardList from './CardList';
import {robots} from './robot';
import Searchbox from './Searchbox';
import Scroll from './Scroll';


function App()  {
    
    const [searchfield, setSearchfield] = useState("");

function onSearchChange(event) {
        setSearchfield(event.target.value);
    }
   
const filtered = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
return (
        <div className='tc'>
            <h1 className='courier f1 light-green'>RoboAvengers</h1>
            <Searchbox searchchange={onSearchChange} />
            <Scroll>
                <CardList robots={filtered} />
            </Scroll>
        </div>

        );
    }



export default App;
