/**виджет включающий в себя название ссылку и краткий контент **/
export default function WidgetItem({title, link, content}) {
    return (
        <div className="widget_item">
            <a href={link}><h2>{title}</h2></a>
            <div>
                <div>{content}</div>
            </div>
        </div>
    );
}