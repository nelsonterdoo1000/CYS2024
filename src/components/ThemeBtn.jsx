export default function ThemeBtn(props) {
    function change() { }
    return (
        <li className="ThemeBtn nav-item" onClick={props.handleClick}>
            <span>Dark</span>
            <input id="toggleEmulator" type="range" onChange={change} value={props.value} />
            <span>Light</span>
        </li>
    )
}