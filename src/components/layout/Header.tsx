import "../../styles/Header.css"
function Header() {
    return(
        <div id="Header">
            <img src="/public/images/ACM-Design-Logo.png" alt=""/>
            <ul className="Header-list">
                <li>home</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
    )
}
export default Header