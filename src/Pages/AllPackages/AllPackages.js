import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from '../../Assets/img/loading.gif';

const AllPackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
      fetch(`http://localhost:5000/packages`)
        .then((res) => res.json())
        .then((data) => setPackages(data));
    }, []);
    
    return (
      <div id="packages ">
      <h2 className=" my-5 packages-header p-3 m-3 mx-auto text-center">
        All Packages in Our Center 
      </h2>
    
        <div className="row row-cols-1 row-cols-md-3 m-2  ">
          {packages.map((singlePackage) => (
            <div className="col mb-4 " id="packages" key={singlePackage._id}>
              <div className="card h-100 ">
                <img
                  src={singlePackage.Img}
                  className="card-img-top p-3 rounded"
                  alt="..."
                  height="450"
                />
                <div className="card-body">
                  <h2 className="card-title text-danger">{singlePackage.name}</h2>
                  <p className="card-text">{singlePackage.Description}</p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">
                    <h4 className="text-primary mt-1 mb-5">
                      Price: {singlePackage.price}
                    </h4> 
                    <Link to={`/booking/${singlePackage._id}`}>
                      <button className="btn btn-danger mb-3">
                      <i className="fas fa-cart-plus"></i> Book Package 
                      </button>
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
    );
};

export default AllPackages;
