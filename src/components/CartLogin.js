const CartLogin = () => {
  return (
    <>
      <div className="flex bg-white mt-44 mx-10 p-10">
        <div className="">
          <h1 className="font-bold text-xl">Account</h1>
          <h1 className="text-gray-500 text-sm">
            To place your order now, log in to your existing account or sign up.
          </h1>

          <div className="flex my-5 py-5">
            <button className="mx-5 bg-sky-500 px-4 rounded-md text-white font-bold hover:text-sky-500 hover:bg-white">
              Login
            </button>
            <button className="mx-5 bg-sky-500 px-4 rounded-md text-white font-bold hover:text-sky-500 hover:bg-white">
              SIGN UP
            </button>
          </div>
        </div>
        <div className="">
          <img
            className="p-4"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
          />
        </div>
      </div>

   
        <div className="bg-white mt-4 mx-10 p-10">
          <h1 className="font-bold text-xl text-gray-600">Delivery address</h1>
        </div>

  
        <div className="bg-white mt-4 mx-10 p-10">
          <h1 className="font-bold text-xl text-gray-600">Payment</h1>
        </div>

    </>
  );
};

export default CartLogin;
