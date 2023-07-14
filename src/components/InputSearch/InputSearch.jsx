import { useState } from "react"
import Container from "../Container/Container"
import style from './InputSearch.module.css'

function InputSearch({ setData }) {
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const coordinates = () => {
        if (inputValue) {
            fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=67a762e7be38765a887247105167a8c4`, {
                method: 'GET'
            })
                .then(response => response.json())
                .then(data => {
                    if (data.length > 0) {
                        dataOfCity(data[0].lat, data[0].lon)
                    }
                })
        }
        setInputValue('')
    }

    const dataOfCity = (lat, lon) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=67a762e7be38765a887247105167a8c4`, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }

    return (
        <Container>
            <div className={style.search__block}>
                <input type="text" value={inputValue} onChange={inputChangeHandler} />
                <button onClick={coordinates}>click</button>
            </div>
        </Container>
    )
}

export default InputSearch