import Admin from "./(admin)/admin";
import Main_Dashboard from "./main";

function Dashboard() {
  return (
    <>
      <Main_Dashboard>
        <Admin />
      </Main_Dashboard>
    </>
  );
}

export default Dashboard;
