import ToggleButton from "./ToggleButton"

const Header = ( {handleDisplay} ) => {
    return (
        <div>
            <ToggleButton
                toggleContentType = 'Users'
                handleDisplay = {handleDisplay}
            />

            <ToggleButton
                toggleContentType = 'Posts'
                handleDisplay = {handleDisplay}
            />

            <ToggleButton
                toggleContentType = 'Comments'
                handleDisplay = {handleDisplay}
            />
        </div>
    )
}

export default Header
