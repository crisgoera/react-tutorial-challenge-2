const ToggleButton = ( {toggleContentType, handleDisplay} ) => {
    return (
        <button onClick = { ()=> handleDisplay(toggleContentType.toLowerCase())}>
            {toggleContentType}
        </button>
    )
}

export default ToggleButton
