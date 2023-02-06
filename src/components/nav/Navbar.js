import Link from "next/link";

const Navbar = ({ toggleDarkmode }) => {
    return (
        <>
            <div className="captionNotification">
                <p>Check out great features in our mobile app, <a href="/">Download App</a></p>
            </div>
            <nav className="customNav sticky-top">
                <ul>
                    <div className="navDiv">
                        <li>
                            <Link href="/" className="title">Space <span>Bank</span>
                            </Link>
                        </li>
                    </div>
                    <div className="navDiv second">
                        <li>
                            <Link href="/overview">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/assets">
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href="/swap">
                                Join Team
                            </Link>
                        </li>
                        <li>
                            <Link href="/swap">
                                Support
                            </Link>
                        </li>
                    </div>
                    <div className="navDiv">
                        <li id="download"><Link href="/darkmode">Darkmode</Link></li>
                        <li><Link href="/app" id="getStarted">Download App</Link></li>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;