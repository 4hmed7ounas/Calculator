import React, {useState} from 'react'

function Calculator() {
    const [Input, setInput] = useState('');
    const [CurrOperator, setCurrOperator] = useState('');
    const HandleClearClick = () => {
        setInput('');
        setCurrOperator('');
    }
    const HandleNumberClick = (number) => {
        setInput(Input + number);
    };
    const HandleOperatorClick = (operator) => {

        setInput(Input + ' ' + operator + ' ');
        setCurrOperator(operator);
    }
    const HandleDotClick = () => {
        setInput(Input + '.');
    };
    const HandleEqualClick = () => {
        if (Input !== '' && CurrOperator !== '') {
            const parts = Input.split(' ');
            const num1 = parseFloat(parts[0]);
            const num2 = parseFloat(parts[2]);
            let result = 0;

            switch (CurrOperator) {
                case '\u002B':
                    result = num1 + num2;
                    break;
                case '\u2212':
                    result = num1 - num2;
                    break;
                case '\u00d7':
                    result = num1 * num2;
                    break;
                case '\u00f7':
                    result = num1 / num2;
                    break;
                case '%':
                    result = num1 % num2;
                    break;
                case '\u00b2':
                    result = num1 * num1;
                    break;
                default:
                    return;
            }

            setInput(result.toString());
            setCurrOperator('');
        }
    }
    return (
        <div>
            <section className='container1'>
                <div className="margin-y-5 container1 bg-black rounded shadow">
                    <div className="container">
                        <input type="text" className="margin-y-2 text container bg-black rounded" value={Input} readOnly />
                    </div>
                    <div className="container bg-black">
                        <button type="button" onClick={() => HandleClearClick()} className="btn btn-secondary btnC margin-y-2 margin-x-2">C</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u00b2')} className="btn btn-secondary btnS margin-y-2 margin-x-2">x&#178;</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u0025')} className="btn btn-secondary btnC margin-y-2 margin-x-2">&#37;</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u00f7')} className="btn btn-warning margin-y-2 margin-x-2"><b>&#247;</b></button>
                    </div>
                    <div className="container bg-black">
                        <button type="button" onClick={() => HandleNumberClick(7)} className="btn btn-dark margin-y-2 margin-x-2">7</button>
                        <button type="button" onClick={() => HandleNumberClick(8)} className="btn btn-dark margin-y-2 margin-x-2">8</button>
                        <button type="button" onClick={() => HandleNumberClick(9)} className="btn btn-dark margin-y-2 margin-x-2">9</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u00d7')} className="btn btn-warning margin-y-2 margin-x-2"><b>&#215;</b></button>
                    </div>
                    <div className="container bg-black">
                        <button type="button" onClick={() => HandleNumberClick(4)} className="btn btn-dark margin-y-2 margin-x-2">4</button>
                        <button type="button" onClick={() => HandleNumberClick(5)} className="btn btn-dark margin-y-2 margin-x-2">5</button>
                        <button type="button" onClick={() => HandleNumberClick(6)} className="btn btn-dark margin-y-2 margin-x-2">6</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u2212')} className="btn btn-warning margin-y-2 margin-x-2"><b>&#8722;</b></button>
                    </div>
                    <div className="container bg-black">
                        <button type="button" onClick={() => HandleNumberClick(1)} className="btn btn-dark margin-y-2 margin-x-2">1</button>
                        <button type="button" onClick={() => HandleNumberClick(2)} className="btn btn-dark margin-y-2 margin-x-2">2</button>
                        <button type="button" onClick={() => HandleNumberClick(3)} className="btn btn-dark margin-y-2 margin-x-2">3</button>
                        <button type="button" onClick={() => HandleOperatorClick('\u002b')} className="btn btn-warning margin-y-2 margin-x-2"><b>&#43;</b></button>
                    </div>
                    <div className="container bg-black">
                        <button type="button" onClick={() => HandleNumberClick(0)} className="btn btn-dark btn0 margin-y-2 margin-x-2">0</button>
                        <button type="button" onClick={() => HandleDotClick()} className="btn btn-dark margin-y-2 margin-x-2"><b>&#8901;</b></button>
                        <button type="button" onClick={() => HandleEqualClick()} className="btn btn-warning margin-y-2 margin-x-2"><b>&#61;</b></button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Calculator
