import {useState} from "react";
import {QRCodeCanvas} from 'qrcode.react';

import './QRCodeGenerator.css'

export const QRCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const onClickHandler = (event) => {
        setResult(value);
        setValue('');   //Очищаю поле ввода
        console.log(event.nativeEvent);
    }
    const onChangeHandler = (event) => {
        setValue(event.target.value);
        setResult('');
    }

    console.log('result:' + result)

    return (
        <div className='qr-code-container'>
            <label
                htmlFor="input_text"
                className='qr-code-label'>Текст для QR кода</label>
            <input
                id="input_text"
                type="text"
                value={value}
                onChange={onChangeHandler}
                placeholder='Введите текст...'
                className='result-input'
            />
            <button
                type="button"
                onClick={onClickHandler}
                className='qr-code-button'>Сгенерировать QR-code</button>
            {result && <QRCodeCanvas value={result} size={200} className='qr-code'/>}
        </div>
    )
}