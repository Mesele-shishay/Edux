function My_Course() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.course') ? 'active' : '' }}">
        <a
          className="nav-link"
          href="{{ route('dashboard.course.teacher.list.show') }}"
        >
          <i className="fas fa-chalkboard-teacher"></i>
          <span>My Courses</span>
        </a>
      </li>
    </>
  );
}

export default My_Course;
