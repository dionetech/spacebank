import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";
import Link from "next/link";

const Footer = ({ darkmode }) => {
    return (
        <footer className={`customFooter ${darkmode?'darkmode':''}`}>
            <div className="footerCard">
                <div className="row">
                    <div className="col-md-4 col-sm-8 col-12">
                        <h3 className="footerTitle">Space Bank</h3>
                        <p className="footerSubtitle">Space Bank is a Web3 wallet and a payment platform that allows you pay for services with your Digital Collectibles.</p>
                        <ul className="footerIconList">
                            <li>
                                <a
                                    href="https://www.instagram.com/urbandev__"
                                    className="social-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Instagram"
                                >
                                    <FiInstagram />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com/urbandev__"
                                    className="social-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Twitter"
                                >
                                    <FiTwitter />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com/urban.devv"
                                    className="social-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Facebook"
                                >
                                    <FiFacebook />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/david-nelson-298412189/"
                                    className="social-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    title="LinkedIn"
                                >
                                    <FiLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-1"></div>
                    <div className="col-md-7 col-12">
                        <div className="secondFooterCard">
                            <div className="row">
                                <div className="col-4">
                                    <h4>Useful Links</h4>
                                    <ul>
                                        <li><Link href="/home">Home</Link></li>
                                        <li><Link href="/auth">Login</Link></li>
                                        <li><Link href="/auth/register">Sign Up</Link></li>
                                        <li><Link href="/about">About Us</Link></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4>Our Vision</h4>
                                    <ul>
                                        <li><Link href="/assets">Assets</Link></li>
                                        <li><Link href="/overview">Overview</Link></li>
                                        <li><Link href="/swap">Swap</Link></li>
                                        <li><Link href="/coint3">CoinT3</Link></li>
                                    </ul>
                                </div>
                                <div className="col-4">
                                    <h4>Legal</h4>
                                    <ul>
                                        <li><Link href="/home">Terms of Service</Link></li>
                                        <li><Link href="/home">Privacy Policy</Link></li>
                                        <li><Link href="/home">Blog</Link></li>
                                        <li><Link href="/home">FAQs</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;