import React from "react";

function ContactCard() {
  return (
    <form action="" className="form-contact shadow p-5 rounded-2  m-0">
      <h4>Fillup The Form</h4>
      <div className="row mt-4">
        <div className="col-12 col-sm-6 mt-4">
          <input type="text" className="form-control" placeholder="Name" />
        </div>
        <div className="col-12 col-sm-6 mt-4">
          <input type="email" className="form-control" placeholder="Email" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 ">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">
          <textarea  className="w-100 form-control"></textarea>
        </div>
      </div>
      <button className="btn btn-success mt-4">Submit Request</button>
    </form>
  );
}

export default ContactCard;
