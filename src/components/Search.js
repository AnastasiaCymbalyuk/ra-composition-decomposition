import SearchItem from "./SearchItem";

/** виджет для блока поиска(логотип, категория поиска, строка поиска и подпись ) **/
export default function Search() {
    return (
        <div className="search_widget">
            <div className="search_logo"></div>
            <div>
               <div className="search_options">
                <SearchItem name="Видео" link="#" />
                <SearchItem name="Картинки" link="#" />
                <SearchItem name="Новости" link="#" />
                <SearchItem name="Карты" link="#" />
                <SearchItem name="Маркет" link="#" />
                <SearchItem name="Переводчик" link="#" />
                <SearchItem name="Эфир" link="#" />
                <SearchItem name="еще" link="#" />
              </div>
            <div className="search_input"></div> 
            <div>Найдется все...</div>
            </div>
        </div>
    );
}