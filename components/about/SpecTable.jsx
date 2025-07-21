const SpecTable = ({title, description}) => {
    return (
        <div className="col-lg-6 col-6 featured-border-bottom py-2">
            <strong className="featured-numbers">{description}</strong>
            <p className="featured-text text_md">{title}</p>
        </div>
    )
}

export default SpecTable;