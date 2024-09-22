function Student() {
  return <>
  {/* {# Messages Card Row #} */}
    <div className="row  d-print-none">
        {/* {# Messages Card 1 #} */}
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                    <div className="row g-0 align-items-center">
                        <div className="col me-2">
                            <div className="text-xs fw-bold text-primary text-uppercase mb-1">
                                Messages
                            </div>
                            <div className="h5 mb-0 fw-bold text-gray-800">
                                59
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-comment  fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* {# Messages Card 2 #} */}
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                    <div className="row g-0 align-items-center">
                        <div className="col me-2">
                            <div className="text-xs fw-bold text-success text-uppercase mb-1">
                                Exams
                            </div>
                            <div className="h5 mb-0 fw-bold text-gray-800">
                                99
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-book fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* {# Tasks Card #} */}
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
                                        <div className="progress-bar bg-info" role="progressbar" >
                                        </div>
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
        {/* {# Pending Requests Card #} */}
        <div className="col-xl-3 col-md-6 mb-4">
            <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                    <div className="row g-0 align-items-center">
                        <div className="col me-2">
                            <div className="text-xs fw-bold text-warning text-uppercase mb-1">
                                Pending Requests
                            </div>
                            <div className="h5 mb-0 fw-bold text-gray-800">
                                50
                            </div>
                        </div>
                        <div className="col-auto">
                            <i className="fas fa-share-alt fa-2x text-gray-300"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* {# Content Row 1 #} */}
    <div className="row">
        {/* {# User Overview #} */}
        <div className="col-xl-8 col-lg-7">
            <div className="card shadow mb-4">
                {/* {# Card Header - Dropdown #} */}
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 fw-bold text-primary">Student Overview</h6>
                </div>
                {/* {# Card Body #} */}
                <div className="card-body">
                    <div className="mx-4">
                        <div className="row">
                            <div className="col-md-6 ">
                                <ul className="list-unstyled">
                                    {/* <li>

                                        <strong>Full Name :</strong> {{ $user['profile']->first_name }} {{ $user['profile']->last_name }}
                                    </li>

                                    <hr>

                                    <li>
                                        <strong>ID Number :</strong> {{ $user['profile']->id_number }}
                                    </li>

                                    <hr>

                                    <li>
                                        <strong>Admission Year :</strong> {{ $user['profile']->created_at }} G.C
                                    </li>

                                    <hr>

                                    <li>
                                        <strong>Program :</strong> {{ $user['profile']->field }} Science
                                    </li> */}
                                    <hr />

                                </ul>
                            </div>
                            <div className="col-md-6 ">
                                <ul className="list-unstyled">
                                    {/* <li>
                                        <strong>Class :</strong> {{ $user['schoolClass']->class_name}}
                                    </li>
                                    <hr>
                                    <li>
                                        <strong>Section :</strong> {{ $user['academic_info']->section->section_name }}
                                    </li>
                                    <hr>
                                    <li>
                                        <strong>Reg Status :</strong> {{ $user['profile']->status }}
                                    </li>
                                    <hr>
                                    <li>
                                        <strong>Admission :</strong> {{ $user['profile']->admission }}
                                    </li> */}
                                    <hr />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* {# Pie Chart #} */}
        <div className="col-xl-4 col-lg-5  d-print-none">
            <div className="card shadow mb-4">
                {/* {# Card Header - Dropdown #} */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 fw-bold text-primary">
                        User Profile
                    </h6>
                </div>
                {/* {# Card Body #} */}
                <div className="card-body text-center">
                    <img className="img-fluid rounded border-left-info"
                        style={{ width:"16rem"}}
                        src="{{ asset('storage/'.$user['profile']->image )}}"
                        alt="{{ $user['profile']->first_name }} {{ $user['profile']->last_name }}" />
                    <p className="my-0 mt-2">
                        I am Messele {/* I am {{ $user['profile']->first_name }} {{ $user['profile']->last_name }} {{ $user['schoolClass']->class_name }} */}
                    </p>
                </div>
            </div>
        </div>
    </div>
    {/* {# Content Row 2 #} */}
    <div className="row">
        {/* {# Content Column #} */}
        <div className="col-lg mb-4">
            {/* {# Project Card Example #} */}
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 fw-bold text-primary">Course Overview</h6>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered">
                            <thead className="thead-dark">
                                <tr>
                                    <th>Course</th>
                                    <th>Instructor</th>
                                    <th>Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* @foreach ($user['courses'] as $course)
                                    <tr>
                                        <td className="text-capitalize">
                                            {{ $course->course_name }}
                                        </td>
                                        <td className="text-capitalize">
                                            @if (!$course->teacher == NULL)

                                                @if (null !== $course->teacher->teacher->first_name )

                                                    {{ $course->teacher->teacher->first_name  . ' ' .  $course->teacher->teacher->last_name }}
                                                @else

                                                {{ 'Not available' }}

                                                @endif

                                        </td>
                                        <td>
                                            @if (null !== $course->teacher->user->email)
                                               {{ $course->teacher->user->email }}
                                            @else
                                                {{ 'Not available' }}
                                            @endif
                                        </td>
                                            @endif
                                    </tr>
                                @endforeach */}
                                <tr>
                                    <td colSpan={8}>
                                        <center>
                                            {/* {{ bar_code($user.profile.id_number) }} */}
                                        </center>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>;
}

export default Student;
