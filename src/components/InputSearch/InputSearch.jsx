import { useState } from "react"
import Container from "../Container/Container"
import style from './InputSearch.module.css'

function InputSearch({ setData }) {
    const apiKey = process.env.REACT_APP_API_KEY
    const url = process.env.REACT_APP_API_URL
    
    const [inputValue, setInputValue] = useState('')

    const inputChangeHandler = e => {
        setInputValue(e.target.value)
    }

    const coordinates = async () => {
        if (inputValue) {
            await fetch(`${url}/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`, {
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

    const dataOfCity = async (lat, lon) => {
        await fetch(`${url}/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`, {
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