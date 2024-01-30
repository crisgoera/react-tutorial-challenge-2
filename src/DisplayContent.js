
const DisplayContent = ( {displayContent} ) => {
    return (
        <ul>
            {displayContent.map( (entry) =>
               <li> {JSON.stringify(entry)} </li>
            )}
        </ul>
    )
}

export default DisplayContent
