import { Metadata } from "next";
import UserHome from "./pages/Home/UserHome";


export const metadata: Metadata = {
  title: "Ebstac Global - Committed to certification",
  description: "All are dummy data",
};

const Home: React.FC = () => {
 return(
  <div>
    <UserHome></UserHome>
  </div>
 )
};

export default Home;