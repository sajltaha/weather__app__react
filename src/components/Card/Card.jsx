import Container from '../Container/Container'
import style from './Card.module.css'
import { BsFillCloudDrizzleFill, BsFillCloudRainHeavyFill, BsFillCloudSnowFill, BsCloudSun } from 'react-icons/bs'
import { WiSmoke } from 'react-icons/wi'
import { MdThunderstorm } from 'react-icons/md'

function Card({ data }) {
        const weatherIdIcon = {
            2: <MdThunderstorm />,
            3: <BsFillCloudDrizzleFill />,
            5: <BsFillCloudRainHeavyFill />,
            6: <BsFillCloudSnowFill />,
            7: <WiSmoke />,
            8: <BsCloudSun />
        }
        if (typeof data == 'object') {
            const weatherId = data.weather[0].id.toString()[0]
            return (
                <Container>
                    <div className={style.card}>
                        <h1>{data.main.temp} temp</h1>
                        <h1>{data.main.feels_like} feels like</h1>
                        <h1>{data.wind.speed} wind speed</h1>
                        {weatherIdIcon[weatherId]}
                    </div>
                </Container>
            )
        }
    }

export default Card