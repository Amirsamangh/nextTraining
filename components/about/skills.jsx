const Skills = ({ className, image }) => {
    return (
        <div className={`col-12 col-sm-6 col-lg-2 mb-4 ms-auto clients-item-height cursor-pointer d-flex align-items-center`}>
            <img src={`/assets/images/logos/${image}`} className={`clients-image  ${className}`} alt="" />
        </div>
    )
}

export default Skills;