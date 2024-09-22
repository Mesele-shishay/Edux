function Teacher() {
  return (
    <>
      <div className="row">
        {/* {{-- {# Messages Card 1 #} --}} */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row g-0 align-items-center">
                <div className="col me-2">
                  <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                    Messages
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">59</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-comment  fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {{-- {# Messages Card 2 #} --}} */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row g-0 align-items-center">
                <div className="col me-2">
                  <div className="text-xs fw-bold text-success text-uppercase mb-1">
                    Exams
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">99</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-book fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {{-- {# Tasks Card #} --}} */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row g-0 align-items-center">
                <div className="col me-2">
                  <div className="text-xs fw-bold text-info text-uppercase mb-1">
                    Tasks
                  </div>
                  <div className="row g-0 align-items-center">
                    <div className="col-auto">
                      <div className="h5 mb-0 me-3 fw-bold text-gray-800">
                        22
                      </div>
                    </div>
                    <div className="col">
                      <div className="progress progress-sm me-2">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-newspaper fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* {{-- {# Pending Requests Card #} --}} */}
        <div className="col-xl-3 col-md-6 mb-4">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row g-0 align-items-center">
                <div className="col me-2">
                  <div className="text-xs fw-bold text-warning text-uppercase mb-1">
                    Pending Requests
                  </div>
                  <div className="h5 mb-0 fw-bold text-gray-800">50</div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-share-alt fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teacher;
