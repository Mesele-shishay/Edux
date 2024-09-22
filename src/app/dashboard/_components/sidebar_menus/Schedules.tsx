import menu from "./Menu_interface";

function Schedules() {
  return (
    <>
      <li className="nav-item {{ Request::is('dashboard.routine') ? 'active' : '' }}">
        {/* @if (session()->has('browse_session_id'))
    @php
        $class_info = App\Models\Promotion::where('session_id', session('browse_session_id'))
                    ->where('student_id', auth()->user()->id )
                    ->first();
    @endphp

    @else
        @php
            $latest_session = App\Models\SchoolSession::latest()->first();
        @endphp

        @if ($latest_session)
            @php
                $class_info = \App\Models\Promotion::where('session_id', $latest_session->id)
                            ->where('student_id', auth()->user()->id)
                            ->first();
            @endphp
        @else
            @php
                $class_info = [];
            @endphp
        @endif
    @endif */}

        <a
          className="nav-link"
          href="{{route('dashboard.routine.show', [
                'class_id'   -> $class_info->class_id ?? '',
                'section_id' -> $class_info->section_id ?? ''
                ])}}"
        >
          <i className="far fa-calendar-alt"></i>
          <span>Routine</span>
        </a>
      </li>
    </>
  );
}

const provider: menu = {
  name: "Clasess",
  role: "admin",
  component: Schedules,
};
export default provider;
