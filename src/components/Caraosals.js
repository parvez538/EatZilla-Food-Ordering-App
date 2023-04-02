import useOnline from "../utils/useOnline";

const Carousals=()=>{

  const isOnline=useOnline()

  if(!isOnline)
  {
    return <>offline,please check your internet connection</>
  }
    return(
      <div className="flex bg-gray-900 justify-center">
        <img className="w-72 h-72 m-4 p-4"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/pneknawbadtvceqzwiep" />
        <img className="w-72 h-72 m-4 p-4"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qsgjyrelvjr3atzl0ypm" />
        <img className="w-72 h-72 m-4 p-4"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/s5ug2key6e2sptaxku5v" />
        <img className="w-72 h-72 m-4 p-4"  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/oxe97jexxbnxqtbhg2zo" />
      </div>
    )
  }

  export default Carousals;