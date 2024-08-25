import { Route, Routes } from "react-router-dom";
import AdminHome from "./components/adminHome/adminHome";
import UserHome from "./components/userHome/userHome";
import Transaction from "./components/transaction/transaction";
import Report from "./components/report/report";
import Maintanence from "./components/maintenance/maintenance";
import AdminLogin from "./components/adminLogin/adminLogin";
import AddMember from "./components/addMember/addMember";
import UpdateMember from "./components/updateMember/updateMember";
import AddBook from "./components/addBook/addBook";
import UpdateBook from "./components/updateBook/updateBook";
import AddUser from "./components/addUser/addUser";
import UpdateUser from "./components/updateUser/updateUser";
import BookMaster from "./components/bookMaster/bookMaster";
import MembershipMaster from "./components/membershipMaster/membershipMaster";
import MovieMaster from "./components/movieMaster/movieMaster";
import ActiveIssues from "./components/activeIssues/activeIssues";
import OverdueReturn from "./components/overdueReturn/overdueReturn";
import IssueRequest from "./components/issueRequest/issueRequest";
import IsBookAvailable from "./components/isBookAvailable/isBookAvailable";
import IssueBook from "./components/issueBook/issueBook";
import ReturnBook from "./components/returnBook/returnBook";
import PayFine from "./components/payFine/payFine";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLogin></AdminLogin>}></Route>
      <Route path="/admin-home" element={<AdminHome></AdminHome>}></Route>
      <Route path="/user-home" element={<UserHome></UserHome>}></Route>
      <Route path="/transaction" element={<Transaction></Transaction>}></Route>
      <Route path="/report" element={<Report></Report>}></Route>
      <Route path="/maintain" element={<Maintanence></Maintanence>}></Route>
      <Route path="/addMember" element={<AddMember></AddMember>}></Route>
      <Route
        path="/updateMember"
        element={<UpdateMember></UpdateMember>}
      ></Route>
      <Route path="/addBook" element={<AddBook></AddBook>}></Route>
      <Route path="/updateBook" element={<UpdateBook></UpdateBook>}></Route>
      <Route path="/addUser" element={<AddUser></AddUser>}></Route>
      <Route path="/updateUser" element={<UpdateUser></UpdateUser>}></Route>
      <Route path="/bookMaster" element={<BookMaster></BookMaster>}></Route>
      <Route path="/movieMaster" element={<MovieMaster></MovieMaster>}></Route>
      <Route
        path="/membershipMaster"
        element={<MembershipMaster></MembershipMaster>}
      ></Route>
      <Route
        path="/activeIssues"
        element={<ActiveIssues></ActiveIssues>}
      ></Route>
      <Route
        path="/overdueReturn"
        element={<OverdueReturn></OverdueReturn>}
      ></Route>
      <Route
        path="/issueRequest"
        element={<IssueRequest></IssueRequest>}
      ></Route>
      <Route
        path="/isBookAvailable"
        element={<IsBookAvailable></IsBookAvailable>}
      ></Route>
      <Route path="/issueBook" element={<IssueBook></IssueBook>}></Route>
      <Route path="/returnBook" element={<ReturnBook></ReturnBook>}></Route>
      <Route path="/payFine" element={<PayFine></PayFine>}></Route>
      {/* <Route path="" element={}></Route> */}
    </Routes>
  );
}

export default App;
