import Acadamic from "./sidebar_menus/Academic";
import Attendances from "./sidebar_menus/Attendances";
import Clasess from "./sidebar_menus/Classes";
import Courses from "./sidebar_menus/Coureses";
import Dashboard from "./sidebar_menus/Dashboard";
import Exams from "./sidebar_menus/Exams";
import Feedback from "./sidebar_menus/Feedback";
import General_Info from "./sidebar_menus/General_Info";
import menu from "./sidebar_menus/Menu_interface";
import My_Course from "./sidebar_menus/My_Course";
import Notice from "./sidebar_menus/Notice";
import Promotion from "./sidebar_menus/Promotion";
import Routine from "./sidebar_menus/Promotion";
import Schedules from "./sidebar_menus/Schedules";
import Scores from "./sidebar_menus/Scores";
import Students from "./sidebar_menus/Students";
import System_Setting from "./sidebar_menus/System_Setting ";
import Teachers from "./sidebar_menus/Teachers";

const menus:Array<menu> = [
  Dashboard,
  Acadamic,
  Attendances,
  Clasess,
  Courses,

  // Exams,
  // Feedback,
  // General_Info,
  // My_Course,
  // Notice,
  // Promotion,
  // Routine,
  // Schedules,
  // Scores,
  // Students,
  System_Setting,
  // Teachers,
];

export default menus;
