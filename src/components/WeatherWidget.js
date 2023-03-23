/** виджет для отображения погоды **/
export default function WeatherWidget({icon, content}) {
    return (
        <div className="weather">
            <img src={icon}  alt=""/>
            <div>{content}</div>
        </div>
    )
}