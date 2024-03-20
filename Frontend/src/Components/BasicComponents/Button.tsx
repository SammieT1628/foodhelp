interface Props {
    style?: 'light' | 'dark';
    Label: string; 
    onClick: () => void;
}
function Button({style, Label, onClick}: Props) {
    var className: string
    if (style == 'dark') {
        className = 'hover:bg-sky-600 drop-shadow-lg bg-sky-700 px-5 py-2 rounded-xl'
    } else if(style == 'light'){
        className = 'hover:bg-sky-300 drop-shadow-lg bg-sky-400 px-5 py-2 rounded-xl'
    } else {
        className = 'border-solid border-2 drop-shadow-lg bg-navy-blue'
    }

    return (
        <>
            <button className={className}>{Label}</button>
        </>
    )
}

export default Button

/* Example to use in parent Component
<Button 
const handleSelectItem onClick={youMethodNameHere}/>
*/