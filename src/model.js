import React from 'react';
import Toggle from './toggle';
import './App.css';
const model = () => {
    return (
        <div className='container'>

            <div className='header'>
                <div className='title'>ROI Calculator</div>
                <div className='close'>×</div>
            </div>
            <div className='row'>
                <div className='btn-section'>
                    <label className="radio">
                        <input type="radio" checked="checked" />CAKE
                        <span className="checkmark"></span>
                    </label>
                    <label className="radio">
                        <Toggle />USD
                    </label>
                </div>
            </div>

            <div className='price'>
                0.000 USD
            </div>
            <div className='cake'>
                - CAKE 0.000
            </div>

            <div className='price-sel'>
                <span className='price-box'>$ 1000</span>
                <span className='price-box'>$ 100</span>
            </div>

            <div className='time-frame'>
                <div className='time-title'>Timeframe</div>
                <div className='button-list'>
                    <button className='time-button'>1 Day</button>
                    <button className='time-button'>7 Day</button>
                    <button className='time-button'>30 Day</button>
                    <button className='time-button'>1 Year</button>
                    <button className='time-button'>5 Day</button>
                </div>
            </div>

            <div className='apy-wrap'>
                <div className='acc-apy'>
                    Enable Accelerated APY <Toggle />
                </div>

            </div>

            <div className='time-frame'>
                <div className='time-title'>Select Tier</div>
                <div className='button-list'>
                    <button className='time-button'>Tier 1</button>
                    <button className='time-button'>Tier 2</button>
                    <button className='time-button'>Tier 3</button>
                    <button className='time-button'>Tier 4</button>
                    <button className='time-button'>Tier 5</button>
                </div>
            </div>

            <div className='cake Rate'>
                ROI at Current Rate
            </div>
            <div className='price current'>
                0.000 USD
            </div>
            <div className='cake'>
                - 0.000 CAKE + 0.0000000 DON
            </div>
            <div className='Hide'>
                Hide Details <i className="fa fa-angle-up" aria-hidden="true"></i>
            </div>
            <div className='apy'>
                APY <span className='number'>9.0%</span>
            </div>
            <ul className='litext'>
                <li>Calculate based on current rates</li>
                <li>All figures are estimates provided for your convenience only, and by no means represent guaranteed returns</li>
            </ul>

        </div>
    );
};

export default model;