function Info_Card({data}) {
  return (
    <>
      <div className="col-xl-3 col-md-6 mb-4">
        <div className={`card border-left-${data.color} shadow h-100 py-2`}>
          <div className="card-body">
            <div className='row g-0 align-items-center'>
              <div className="col me-2">
                <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                  Total {data.type}
                </div>
                <div className="h5 mb-0 fw-bold text-gray-800">{data.count}</div>
              </div>
              <div className="col-auto">
                <i className={`fas fa-${data.icon} fa-2x text-gray-300`}></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Info_Card;
