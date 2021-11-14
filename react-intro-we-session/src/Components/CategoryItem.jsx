function CategoryItem({url,title}){
    return (
        <div>
            <img src = {url} alt = "title" className="Files"/>
            <p>{title}</p>
        </div>
    )
}

export default CategoryItem;