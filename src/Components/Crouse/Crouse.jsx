import PropTypes from 'prop-types';
import { FiDollarSign } from "react-icons/fi";
import { IoBookOutline } from "react-icons/io5";

const Crouse = ({ crouse, handleCrouses }) => {
    const { courseImg, courseName, description, coursePrice, credit } = crouse;
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl ">
                <figure className="px-10 pt-10">
                    <img src={courseImg} alt="crouseImg" className="rounded-xl" />
                </figure>
                <div className="card-body pt-0 pb-3 px-3">
                    <h2 className="card-title text-lg">{courseName}</h2>
                    <p className='text-[#1C1B1B99]'>{description}</p>

                    <div className='flex items-center'>
                        <p className='flex items-center gap-1 text-lg text-[#1C1B1B99]'><FiDollarSign /> <span>Price: {coursePrice}</span></p>
                        <p className='flex items-center gap-1 text-lg text-[#1C1B1B99]'><IoBookOutline /> <span>Credit : {credit}</span> </p>
                    </div>
                    <button onClick={()=>handleCrouses(crouse)} className="btn btn-primary btn-sm text-white">Select</button>
                </div>
            </div>
        </div>
    );
};

Crouse.propTypes = {
    crouse: PropTypes.object.isRequired,
    handleCrouses: PropTypes.func.isRequired
};

export default Crouse;