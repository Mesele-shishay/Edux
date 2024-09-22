import Info_Card from "./_components/Info_Card";

function Admin() {
  return (
    <>
      <div className="row">
        {/* Total students */}
        <Info_Card
          data={{
            type: "Students",
            count: 147,
            color: "primary",
            icon: "user-graduate",
          }}
        />

        {/* Total teachers */}
        <Info_Card
          data={{
            type: "Teachers",
            count: 147,
            color: "success",
            icon: "chalkboard-teacher",
          }}
        />

        {/* Total sections */}
        <Info_Card
          data={{ type: "Sections", count: 147, color: "info", icon: "school" }}
        />

        {/* Total Classes */}
        <Info_Card
          data={{
            type: "Classes",
            count: 147,
            color: "warning",
            icon: "dollar-sign",
          }}
        />
      </div>

      <div className="row">
        {/* <!-- Area Chart --> */}
        <div className="col-xl-8 col-lg-7">
          <div className="card mb-3">
            <div className="card-header">
              <h6 className="card-title">Users Chart</h6>
            </div>
            <div className="card-body">
              <div className="d-flex mx-auto text-center justify-content-center mb-4">
                <div className="d-flex text-center justify-content-center me-3">
                  <span className="dot-label bg-primary my-auto"></span>Total
                  Students -
                </div>
                <div className="d-flex text-center justify-content-center">
                  <span className="dot-label bg-secondary my-auto"></span> -
                  Total Teachers
                </div>
              </div>
              <div className="chartjs-wrapper-demo">
                <canvas
                  id="transactions"
                  className="chart-dropshadow"
                  height="660"
                  width="1521"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: "330px",
                    width: "760.5px",
                  }}
                ></canvas>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Pie Chart --> */}
        <div className="col-xl-4 col-lg-5">
          {/* <input type="hidden" name="chardDataStudents" value={{  $chartData['students'] }} id="chardDataStudents"> */}
          {/* <input type="hidden" name="chardDataTeachers" value={{ $chartData['teachers'] }} id="chardDataTeachers"> */}

          <div className="card">
            <div className="card-header">
              <h6 className="card-title">Students Statistic Chart</h6>
            </div>
            <div className="card-body">
              <div className="chart-container">
                <canvas
                  id="chartPie"
                  className="h-275"
                  style={{
                    display: "block",
                    boxSizing: "border-box",
                    height: "275px",
                    width: "618px",
                  }}
                ></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
