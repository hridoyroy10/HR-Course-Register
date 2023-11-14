import { useEffect, useState } from 'react';
import Crouse from '../Crouse/Crouse';


const Crouses = () => {
    const [crouses, setCrouses] = useState([]);
    const [selectToTheBtn, setSelectToTheBtn] = useState([]);
    const [totalCreditHours, setTotalCreditHours] = useState(0);
    const [totalCrouseAmount, setTotalCrouseAmount] = useState(0);
    const [remaining, setRemaining ] = useState(20);

    const handleCrouses = (crouse) => {
        const selectBtn = selectToTheBtn.find(item => item.id == crouse.id)
        if (selectBtn) {
            return alert('Oops... already in existence');
        }

        const creditNumber = crouse.credit;
        const creditResult = totalCreditHours + creditNumber;
        if (creditResult > 20) {
            return alert("Oops...NO");
        }
        setTotalCreditHours(creditResult);

        const newSelectBtn = [...selectToTheBtn, crouse];
        setSelectToTheBtn(newSelectBtn);

        const newCrousesPrice = crouse.coursePrice;
        setTotalCrouseAmount(newCrousesPrice + totalCrouseAmount);

        const remainingValue = 20 - creditResult;
        setRemaining(remainingValue);
        
    }

    useEffect(() => {
        fetch("crouses.json")
            .then(res => res.json())
            .then(data => setCrouses(data))
    }, [])


    return (
        <div className='container px-3 mx-auto pt-8'>
            <div className='flex my-12 flex-col xl:flex-row justify-between'>
                <div className='w-full xl:w-[73%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        crouses.map(crouse => <Crouse key={crouse.id} crouse={crouse} handleCrouses={handleCrouses} />)
                    }
                </div>
                <div className=" mt-20 xl:mt-0 w-full xl:w-[25%]">
                    <div className="bg-white rounded-md py-7 px-4">
                        <h2 className="text-[#2F80ED] font-semibold text-xl pb-3 border-b">Credit Hour Remaining {remaining} hr</h2>
                        <h2 className="text-lg text-[#1C1B1B] font-bold py-4">Course Name </h2>
                        <ul className="list-decimal ps-5 border-b pb-3">
                            {
                                selectToTheBtn.map(selectBtn => <li key={selectBtn.id}> {selectBtn.courseName}</li>)
                            }
                        </ul>
                        <h2 className="text-[#1C1B1B99] py-3 border-b">Total Credit Hour : {totalCreditHours} hr</h2>
                        <h2 className="text-[#1C1B1B99] pt-3">Total Price :{totalCrouseAmount} USD</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

Crouses.propTypes = {

};

export default Crouses;