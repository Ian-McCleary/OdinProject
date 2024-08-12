function HeaderBar() {
    return (
        <div className="header-bar">
            {TitleText()}
        </div>
    )
}


function TitleText() {
    return (
        <div className="title-text">
            Resume Generator
        </div>
    )
}


export default HeaderBar