/* eslint-disable jsx-a11y/anchor-is-valid */
import NewsItem from "./NewsItem";
import Currency from "./Currency";

/** виджет для отображения списка новостей **/
export default function NewsList() {
    return (
        <div className="news_section">
            <div className="news">
               <a href="#" ><h2>Сейчас в СМИ</h2></a>
               <a href="#" ><h2>В Германии</h2></a>
               <a href="#" ><h2>Рекомендуем</h2></a>
            </div>
            <div className="date"></div>
            <div className="news_list">
                <NewsItem title="Text"/>
                <NewsItem title="TextText"/>
                <NewsItem title="TextTextText"/>
                <Currency />
            </div>
        </div>
    )
}