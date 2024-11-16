import LeftSideComponent from "@/app/(private)/components/left-side/Left-Side-Component";
import MainContainer from "@/app/(private)/components/main-container/Main-Container";


export default function Home() {
  return (
    <div className="main-page">
        <LeftSideComponent/>
        <MainContainer/>
    </div>
  );
}
