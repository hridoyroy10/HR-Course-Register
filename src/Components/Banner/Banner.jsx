import Lottie from "lottie-react";
import Animation from "../../assets/Animation - 1699987514966.json"

const Banner = () => {
    return (
        <div className="hero min-h-full bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <Lottie animationData={Animation}></Lottie>
                <div>
                    <h1 className="text-5xl font-bold">Develop a Successful HR Communication Strategy</h1>
                    <p className="py-6">Computer programming or coding is the composition of sequences of instructions, called programs, that computers can follow to perform tasks. It involves designing and implementing algorithms, step-by-step specifications of procedures, by writing code in one or more programming languages.</p>
                    <button className="btn btn-primary">Get Registration</button>
                </div>
            </div>
        </div>
    );
};



export default Banner;