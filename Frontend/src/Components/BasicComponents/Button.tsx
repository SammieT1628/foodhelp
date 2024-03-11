interface Props {
    Style?: string;
    Label: string; 
    onClick: () => void;
}
function Button({Style, Label, onClick}: Props) {
    var className: string
    if (Style == 'dark') {
        className = 'hover:bg-sky-600 drop-shadow-lg bg-sky-700 px-5 py-2 rounded-xl'
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