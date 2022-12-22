import React from 'react';
import"./PricingCardStyle.css";
import { Link } from 'react-router-dom';

const PricingCard = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3 Days-</p>
                <p>-3 Days-</p>
                <p>-Features-</p>
                <p>-Responsive Desgin-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

            <div className='card'>
                <h3>-Premium-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 200</p>
                <p>-3 Days-</p>
                <p>-3 Days-</p>
                <p>-Features-</p>
                <p>-Responsive Desgin-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>
            <div className='card'>
                <h3>-Basic-</h3>
                <span className='bar'></span>
                <p className='btc'>$ 100</p>
                <p>-3 Days-</p>
                <p>-3 Days-</p>
                <p>-Features-</p>
                <p>-Responsive Desgin-</p>
                <Link to="/contact" className='btn'>
                    PURCHASE NOW
                </Link>
            </div>

        </div>
    </div>

    
  )
}

export default PricingCard