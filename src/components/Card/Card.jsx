import Container from '../Container/Container'
import style from './Card.module.css'

function Card({ data }) {
    return (
        <Container>
            <div className={style.card}>
                {data.name}
                {Math.ceil((data.main.temp) - 273.15)}
            </div>  
        </Container>
    )
}

export default Card