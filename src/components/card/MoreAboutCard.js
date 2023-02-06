import Image from "next/image";

const MoreAboutCard = ({ about }) => {
    return (
    <div className="moreAboutCard">
        <div className="row">
        {
            about.pos==="left"?
            <>
                <div className="col-sm-7">
                    <div className="contentDiv">
                        <h3>{about.title}</h3>
                        <p>{about.subtitle}</p>
                    </div>
                </div>
                <div className="col-sm-5">
                    <div className="imageDiv">
                        <Image
                            src={about.img}
                            alt={about.title}
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                </div>
            </>:
            <>
                <div className="col-sm-5" id="middleAboutCol">
                    <div className="imageDiv">
                        <Image
                            src={about.img}
                            alt={about.title}
                            width={200}
                            height={200}
                            priority
                        />
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="contentDiv">
                        <h3>{about.title}</h3>
                        <p>{about.subtitle}</p>
                    </div>
                </div>
            </>
        }
        </div>
    </div>
    )
}

export default MoreAboutCard;