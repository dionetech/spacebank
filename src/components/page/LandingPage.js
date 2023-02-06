import Link from "next/link";
import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";
import { moreAboutUs } from "@/data/moreAboutUs";
import MoreAboutCard from "../card/MoreAboutCard";
import { useState } from "react";
// import { motion } from "framer-motion";
// import { BsFillCheckCircleFill } from "react-icons/bs";

const LandingPage = () => {

    const [email, setEmail] = useState("");
    const [processing, setProcessing] = useState(false);

    const subscribeTo = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <div
                className="container-fluid"
                id="scrollContainer"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                style={{padding: "0px"}}
                transition={{ delay: 0.3, type: "spring", stiffness: 600 }}
            >
                <section className="headerSection">
                    <div className="row justify-content-center headerSectionRow">
                        <div className="col-md-7 col-sm-10 col-12">
                            <div className="leftHeaderSection">
                                <span>Mobile and <i>online banking</i></span>
                                <h1 className="headerTitle">Elevate Banking with Space Bank and Harness the power of Blockchain</h1>
                                <p className="headerSubtitle">Enjoy lightning-fast transactions, unparalleled security, and full control of your assets - all in the blockchain space. Join us now and experience the future of Banking.</p>
                                <div className="buttonDiv">
                                    <Link href="/app">Download Mobile App</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5" id="rightHeaderSectionCol">
                            <div
                                className="rightHeaderSection"
                            >
                                <Image
                                    src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619926/spacebank/y4bhzdaumuybix8rgrqx.png"
                                    alt="Header Image"
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="moreAboutSection">
                    <h3 className="sectionTitle text-center">
                        More About Space Bank
                    </h3>
                    <p className="sectionSubTitle text-center">Wanna know more about what Space Bank can do?</p>
                    <div className="scrollButtonDiv">
                        <button><BsChevronDoubleDown /></button>
                    </div>

                    <div className="moreAboutContent">
                    {
                        moreAboutUs.map((about, index) => {
                            return (
                                <MoreAboutCard
                                    key={index}
                                    about={about}
                                />
                            )
                        })
                    }
                    </div>
                </section>

                <section className="callToAction">
                    <div className="row">
                        <div className="col-12">
                            <div className="ctoDiv">
                                <div className="row">
                                    <div className="col-md-7">
                                        <div className="contentDiv">
                                            <h3>Start your journey to great banking experience today</h3>
                                            <p>Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                                            <div className="buttonDiv">
                                                <Link href="/app">Download Mobile App</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="imageDiv">
                                            <Image
                                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619922/spacebank/ue0vchucyvvl4abk3qfg.png"
                                                alt="Call To Action Image"
                                                width={200}
                                                height={200}
                                                priority
                                            />
                                            <Image
                                                src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619922/spacebank/ue0vchucyvvl4abk3qfg.png"
                                                alt="Call To Action Image"
                                                width={200}
                                                height={200}
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="newsLetterSection">
                    <h3 className="sectionTitle text-center">Subscribe to Our Newsletter</h3>
                    <p className="sectionSubTitle text-center">Enter your email to receive new and updates in the cryptosphere</p>
                    <div className="newsLetterContent">
                        <form onSubmit={subscribeTo}>
                            <div className="inputDiv">
                                <input
                                    type="email"
                                    id="spaceAppEmail"
                                    name="spaceAppEmail"
                                    required={true}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter Your Email Address"
                                />
                                <button
                                    className="spin"
                                    disabled={processing}
                                >{processing?<ImSpinner8 />:"Subscribe"}</button>
                            </div>
                        </form>
                    </div>
                </section>

                <section className="shortTextSection">
                    <div className="shortTextDiv">
                        <h3>Space <span>Bank</span></h3>
                        <p>Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis. Ut commodo efficitur neque.</p>
                    </div>
                </section>

                <section className="poweredBySection">
                    <h4>Powered By: </h4>
                    <div className="poweredByContent">
                        <Image
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619921/spacebank/ngiilnlewiefg6kgzgmk.png"
                            alt="Scrow"
                            width={140}
                            height={50}
                            priority
                        />
                        <Image
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619920/spacebank/dxqmkgwhv2nlyvmt3rbe.png"
                            alt="Bingpay"
                            width={140}
                            height={50}
                            priority
                        />
                        <Image
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619920/spacebank/okawlzcpzex91tdyhln9.png"
                            alt="Compound"
                            width={140}
                            height={50}
                            priority
                        />
                        <Image
                            src="https://res.cloudinary.com/ruthless-labs/image/upload/v1675619921/spacebank/v9erzpmfjbb7uvqfhmqb.png"
                            alt="Uniswap"
                            width={140}
                            height={50}
                            priority
                        />
                    </div>
                </section>
            </div>
        </>
    )
}

export default LandingPage;