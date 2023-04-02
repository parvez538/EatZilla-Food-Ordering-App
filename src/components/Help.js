import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { useState,useContext } from "react";
import userContext from "../Context/userContext";



const Section = ({ que, ans, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);
 
  return (
    <>
      <div className="">
        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className=" mx-2 my-2 px-2 py-2 text-md font-bold text-gray-600 hover:text-orange-500 "
          >
            {que}
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
            className=" mx-2 my-2 px-2 py-2 text-md font-bold text-gray-600 hover:text-orange-500 "
          >
            {que}
          </button>
        )}

        {isVisible ? (
          <button
            onClick={() => {
              setIsVisible(false);
            }}
            className=" mx-2 my-2 px-2 py-2 text-md font-bold text-end ml-8"
          >
            <AiOutlineMinus className="font-bold text-xl" />
          </button>
        ) : (
          <button
            onClick={() => {
              setIsVisible(true);
            }}
            className=" mx-2 my-2 px-2 py-2 text-md font-bold text-end ml-8"
          >
            <AiOutlinePlus className=" text-xl" />
          </button>
        )}

        {isVisible && (
          <p className="mx-2 my-2 px-2 py-2 text-sm border-b-2 border-gray-400 text-gray-700 ">
            {ans}
          </p>
        )}
      </div>
    </>
  );
};

const Help = () => {
  const [sectionConfig, setSectionConfig] = useState("section1");
  const user=useContext(userContext)
  console.log(user)


  return (
    <div className="bg-cyan-700 mw-[140px] h-[1200px] flex">
      <div className="">
        <h1 className="mt-16 text-3xl font-sans font-bold text-white ml-72">
          Help & Support
        </h1>
        <h1 className="mt-1 text-xl font-sans font-bold text-gray-300 ml-72">
          Let's take a step ahead and help you better.
        </h1>
     
        <div className="w-[1200px] h-[1000px]  bg-white ml-64 mt-8 flex">
          <div className="w-[250px] h-[900px] bg-slate-200 mx-10 my-10">
            <h1 className="bg-white w-64 px-3 py-3 mx-6 my-2 ml-5 text-xl font-bold">
              {" "}
              Partner Onboarding
            </h1>
          </div>
          <div className="bg-white w-[800px] h-[800px] mt-10">
            <h1 className="font-bold mx-3 px-2 my-3 text-2xl">
              Partner Onboarding
            </h1>
            <Section
              que="I want to partner my restaurant with EatZilla ?"
              ans="  Partner with us"
              isVisible={sectionConfig === "section1"}
              setIsVisible={()=> setSectionConfig("section1") }
             
            />
            <Section
              que="What are the mandatory documents needed to list my restaurant on EatZilla?"
              ans=" -Copies of the below documents are mandatory
                    -  FSSAI Licence OR FSSAI Acknowledgement
                    -  Pan Card
                    -  GSTIN Certificate
                    -  Cancelled Cheque OR bank Passbook
                    -  Menu"
              isVisible={sectionConfig === "section2"}
              setIsVisible={()=> setSectionConfig("section2")}
            />
            <Section
              que="After I submit all documents, how long will it take for my restaurant to go live on EatZilla?"
              ans="After all mandatory documents have been received and verified it takes upto 7-10 working days for the onboarding to be completed and make your restaurant live on the platform."
              isVisible={sectionConfig === "section3"}
              setIsVisible={()=> setSectionConfig("section3")}

            />
            <Section
              que="What is this one time Onboarding fees? Do I have to pay for it while registering?"
              ans="This is a one-time fee charged towards the system & admin costs incurred during the onboarding process. It is deducted from the weekly payouts after you start receiving orders from EatZilla."
            
              isVisible={sectionConfig === "section4"}
              setIsVisible={()=> setSectionConfig("section4")}
            />
            <Section
              que="Who should I contact if I need help & support in getting onboarded?"
              ans="You can connect with Partner Support on 080-67466777/68179777 or write to partnersuport@EatZilla.in."
            
              isVisible={sectionConfig === "section5"}
              setIsVisible={()=> setSectionConfig("section5")}
            />
            <Section
              que="How much commission will I be charged by EatZilla?"
              ans="The commission charges vary for different cities. You will be able to see the commission applicable for you once the preliminary onboarding details have been filled."
            
              isVisible={sectionConfig === "section6"}
              setIsVisible={()=> setSectionConfig("section6")}
            />
            <Section
              que="I don’t have an FSSAI licence for my restaurant. Can it still be onboarded?"
              ans="FSSAI licence is a mandatory requirement according to the government’s policies. However, if you are yet to receive the licence at the time of onboarding, you can proceed with the acknowledgement number which you will have received from FSSAI for your registration."
            
              isVisible={sectionConfig === "section7"}
              setIsVisible={()=> setSectionConfig("section7")}
            />

          </div>
     

        </div>
        <h1 onClick={()=>{
          user.setUser({
            name:"nadim",
            email:"nadimmk@gmail.com"
          })

        }} className="px-4 py-2 bg-yellow-700 font-bold text-xl">{user.user.email}</h1>
      </div>
    </div>
  );
};

export default Help;
