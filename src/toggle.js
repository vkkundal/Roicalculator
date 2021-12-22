import React from 'react';
import './App.css';
const toggle = () => {
    return (
        <div className='togle'>
            <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
            </label>
        </div>
    );
};

export default toggle;