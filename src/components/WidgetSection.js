import WeatherWidget from "./WeatherWidget";
import WidgetItem from "./WidgetItem";

/** отображение всех виджетов вместе **/
export default function WidgetSection() {
    return (
        <div className="widget_section">
            <WeatherWidget content="Weather"/>
            <WidgetItem title="Посещаемое" link="#" content="Text" />
            <WidgetItem title="Карта Германии" link="#" content="Text" />
            <WidgetItem title="Телепрограмма" link="#" content="Text" />
            <WidgetItem title="Эфир" link="#" content="Text" />
        </div>
    )
    
}