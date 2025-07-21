const IntroTable = ({title, description}) => {
    return (
        <p className='text_md'>
            <span className="profile-small-title">{title}</span>
            <span>{description}</span>
        </p>
    )
}

export default IntroTable;