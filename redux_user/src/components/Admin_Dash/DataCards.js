import React from 'react'

function DataCards() {
  return (
    <div>
    <div className="col-lg-12">
    <div className="row">
     

    <div className="col-xxl-4 col-md-4">
        <div className="card info-card customers-card">
        
          <div className="card-body">
            <h5 className="card-title">
              Deals in Pipeline <span> </span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-people" />
              </div>
              <div className="ps-3">
                <h6>8</h6>
                {/* <span className="text-danger small pt-1 fw-bold">
                  12%
                </span>{" "} */}
                
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-xxl-4 col-md-4">
        <div className="card info-card customers-card">
         
          <div className="card-body">
            <h5 className="card-title">
              Won Deals <span> </span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-people" />
              </div>
              <div className="ps-3">
                <h6>5</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="col-xxl-4 col-md-4">
        <div className="card info-card customers-card">
          
          <div className="card-body">
            <h5 className="card-title">
              Total Revenue <span></span>
            </h5>
            <div className="d-flex align-items-center">
              <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                <i className="bi bi-people" />
              </div>
              <div className="ps-3">
                <h6>20.2$</h6>
                {/* <span className="text-danger small pt-1 fw-bold">
                  12%
                </span>{" "} */}
                {/* <span className="text-muted small pt-2 ps-1">
                  Fuel Machine Users
                </span> */}
              </div>
            </div>
          </div>
        </div>
      </div>


     
    </div>
  </div>

  

  </div>
  
  )
}

export default DataCards