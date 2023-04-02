import { Link } from "react-router-dom";



const Footer = () => {


  return (
    <>
      <div className="bg-black">
        <div className="flex justify-center m-4 p-4">
          <h1 className="text-2xl font-sans font-bold text-white">parvezmullani538@gmail.com</h1>
        </div>
        <div className=" flex w-[1350px] ml-52 justify-around m-4 p-5 border-b">
          <div className="">
            <h2 className="text-gray-600 font-bold font-sans mb-5 text-sm hover:text-white">COMPANY</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">About us</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Team</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">EatZilla Blog</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Bug Bounty</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">EatZilla One</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">EatZilla Corporate</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">EatZilla Instamart</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">EatZilla Genie</h2>
          </div>
          <div className="footer_2">
            <h2 className="text-gray-600 font-bold font-sans mb-5 text-sm hover:text-white">CONTACT</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Help & Support</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Partner with us</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Ride with us</h2>
          </div>
          <div className="footer_3">
            <h2 className="text-gray-600 font-bold font-sans mb-5 text-sm hover:text-white">LEGAL</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Terms & Conditions</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Refund & Cancellation</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Privacy Policy</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Cookie Policy</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Offer Terms</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">Phishing & Fraud</h2>
            <h2 className="text-sm text-white mb-3 font-sans hover:text-gray-400">
              Corporate - EatZilla Money Codes Terms and Conditions
            </h2>
            <h2 className="text-sm text-white mb-3 font-sans">
              Corporate - EatZilla Discount Voucher Terms and Conditions
            </h2>
          </div>
          <div className="">
            <div className="mt-10">
              <img
                className="footer_img"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              />
            </div>
            <div className="mt-10">
              <img
                className="footer_img"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              />
            </div>
          </div>
        </div>

        <div className="flex w-[1350px] ml-56 justify-between">
            <img
              className="w-[250px]"
              src="https://eatzilla.info/bchain/hyperledger/assets/img/logos/eatzilla-color.png"
            />
          <div ><h2 className="text-2xl text-gray-500 mb-3 font-sans">© 2023 EatZilla</h2></div>
          <div className="flex">
            <div className="text-white mr-9 text-2xl">
              <a href="#" className ="fa fa-facebook"></a>
            </div>
            <div className="text-white  mr-9 text-2xl">
              <a href="https://www.instagram.com/" className="fa fa-instagram"></a>
            </div>
            <div className="text-white  mr-9 text-2xl">
              <a href="https://www.linkedin.com/feed/" className="fa fa-linkedin"></a>
            </div>
            <div className="text-white  mr-9 text-2xl">
              <a href="https://www.youtube.com/" className="fa fa-youtube"></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
