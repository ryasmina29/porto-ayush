import { FC } from "react";
import "./style.css";
import Reviewer1Img from "../../assets/Rectangle 25.svg";
import Reviewer2Img from "../../assets/Rectangle 25q.svg";


const Testimonials: FC = () => {
    return(
        <div className="testi-row">
            <div className="testi-left">Testimonials</div>
            <div className="testi-right">
                <div className="testi-1">
                    <img src={Reviewer1Img} alt="reviewer1" />
                    <h4><span>Ayush Raj</span><span> VP of Marketing @ Webflow</span></h4>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                </div>
                <div className="testi-2">
                    <img src={Reviewer2Img} alt="reviewer1" />
                    <h4><span>Alex Cattoni</span><span> Founder @ CopyPossy</span></h4>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.”</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;