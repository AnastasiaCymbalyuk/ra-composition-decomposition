/** отображает категории поиска (название и ссылку на категорию) **/
export default function SearchItem({name, link}) {
    return (
        <div className="search_item">
            <a href={link}>{name}</a>
        </div>
    )
}