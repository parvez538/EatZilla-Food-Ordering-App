import { Link } from "react-router-dom";

const EatZillaForm = () => {
  return (
    <>

<h1 className="form_head">EATZILLA FORM</h1>
   <div className="form">
   <div className="eatzilla_form">
          <form>
            <div className="label" id="label">
              <label htmlFor="name">Name</label>
             
            </div>
            <div className="name_input">
           
              <input type="text" name="name" id="name" />
            </div>

            <div className="label">
              <label htmlFor="email">Email</label>
            </div>
            <div className="email_input">
            
              <input type="email" name="email" id="emial" />
            </div>

            <div className="label">
              <label htmlFor="password">Password</label>
            
            </div>

            <div className="password_input">
        
              <input type="password" name="password" id="password" />{" "}
            </div>

            <Link to="/" ><button className="form_btn">Submit
            </button></Link>
          </form>
      </div>
   </div>
       
    </>
  );
};

export default EatZillaForm;
