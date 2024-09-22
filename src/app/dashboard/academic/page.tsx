import Form from "@/components/custom_ui/form/Form";
import Form_Input from "@/components/custom_ui/form/Form_Input";
import FormRange from "react-bootstrap/esm/FormRange";
import Main_Dashboard from "../main";

function Academic() {
  return (
    <>
      <Main_Dashboard>
        <div className="row">
          {/* @if ($latest_school_session_id == $current_school_session_id ) */}
          <div className="col-md-6 col-lg-4 px-0">
            <div className="container-fluid px-3">
              {/* @if ($latest_school_session_id == $current_school_session_id) */}
              <div className="mb-3">
                <div className="p-3 border bg-light shadow-sm">
                  <h6>Create Session</h6>
                  <p className="text-danger">
                    <small>
                      <i className="fas fa-exclamation-triangle me-2"></i>{" "}
                      Create one Session per academic year. Last created session
                      will be considered as the latest academic session.
                    </small>
                  </p>

                  <label>
                    Session Name:{" "}
                    <sup>
                      <i className="fas fa-asterisk text-primary"></i>
                    </sup>
                  </label>
                  {/* <Form action="{{route('dashboard.session.store')}}">
                    <div className="mb-3">
                      <Form_Input
                        size="sm"
                        placeholder="2021 - 2022"
                        aria-label="Current Session"
                        name="session_name"
                        required={true}
                      ></Form_Input>
                      <button
                        className="btn btn-sm btn-outline-primary"
                        type="submit"
                      >
                        <i className="fas fa-check fa-xs"></i> Create
                      </button>
                    </div>
                  </Form> */}
                </div>
                <FormRange
              </div>
              {/* @endif */}

              {/* <div className="mb-3">
			           <div className="p-3 border bg-light shadow-sm">
			               <h6>Attendance Type</h6>
			               <p className="text-danger">
			                   <small><i className="fas fa-exclamation-triangle me-2"></i> Do not change the type in the middle of a Semester.</small>
			               </p>

			               <x-form action="{{ route('dashboard.attendance.type.update') }}">
				               	<x-radio-button id="attendance_type_section"
				               				name="attendance_type"
				               				value="section"
				               				:check="$academic_setting->attendance_type == 'section'"
				               				label="Attendance by Section"/>


				               	<x-radio-button id="attendance_type_course"
				               				name="attendance_type"
				               				value="course"
				               				:check="$academic_setting->attendance_type == 'course'"
				               				label="Attendance by Course"/>

				               <button type="submit" className="mt-3 btn btn-sm btn-outline-primary"><i className="fas fa-check fa-xs"></i> Save</button>
				            </x-form>

			           </div>
			       </div> */}

              {/* <div className="mb-3">
			           <div className="p-3 border bg-light shadow-sm">
			               <h6>Assign Teacher</h6>
			               <x-form action="{{ route('dashboard.teacher.assign') }}">
			                   <input type="hidden" name="session_id" value="{{ $current_school_session_id }}">

			                   <x-form-select label="Select Teacher" name="teacher_id" required>
			                   		@if (isset($teachers))
			                   			@foreach ($teachers as $teacher)
			                   				<option value="{{$teacher->user_id}}">{{$teacher->full_name}}</option>
			                   			@endforeach
			                   		@endif
			                   </x-form-select >

			               		<x-form-select label="Assign to semester" name="semester_id">
			               			@if (isset($semesters))
			               				@foreach ($semesters as $semester)
			               					<option value="{{$semester->id}}">{{$semester->semester_name }}</option>
			               				@endforeach
			               			@endif
			               		</x-form-select>

			               		<x-form-select label="Assign to class" name="class_id" onchange="getSectionsAndCourses(this);">
			               			@if (isset($school_classes))
			               				<option selected disabled>Please select a class</option>
			               				@foreach ($school_classes as $school_class)
			               					<option value="{{$school_class->id}}">{{$school_class->class_name }}</option>
			               				@endforeach
			               			@endif
			               		</x-form-select>

			               		<x-form-select label="Assign to section" name="section_id"  id="section-select"/>

			               		<x-form-select label="Assign to course" name="course_id"  id="course-select"/>

			               		<button type="submit" className="mt-3 btn btn-sm btn-outline-primary"><i className="fas fa-check fa-xs"></i> Save</button>
			               </x-form>

			           </div>
			       </div> */}
            </div>
          </div>
          {/* @endif */}
        </div>
      </Main_Dashboard>
    </>
  );
}

export default Academic;
