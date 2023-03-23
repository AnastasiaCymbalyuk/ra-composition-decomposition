import NewsList from "./NewsList";
import Promo from "./Promo";
import PromoBanner from "./PromoBanner";
import Search from "./Search";
import WidgetSection from "./WidgetSection";

/** основной компонент для связки **/
export default function Main() {
    return (
        <div className="main">
            <div className="container">
                <NewsList />
                <Promo />
            </div>
           <Search />
           <PromoBanner />
           <WidgetSection /> 
       </div> 
    );
}