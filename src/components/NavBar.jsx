
import '../css/Nav.css'
export default function NavBar() {
    return <>
        <div className="nav">
            <div className="nav-left">
                <h3>MEDIA-RECORDER</h3>
            </div>
            <div className="nav-right">
                <div className="social">
                    <ul id='media'>
                        <li> <a href='https://www.instagram.com/adarsh__172/'>instagram</a></li>
                        <li><a href='https://www.linkedin.com/in/mithlesh-kumar-0b91bb254/'>likedin</a></li>
                        <li> <a href='https://github.com/AdarshSingh172'>github</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>
}