import Grid from "../components/Grid";
import CarouselHeader from "../components/CarouselHeader";
import Content from "../components/Content";
import Sidebar from "../components/SideBar";
import Header from "../components/Header";

function ScreenHome () {
    return (
        <div>
            <Grid title={<Header/>} header={<CarouselHeader/>} content={<Content/>} sidebar={<Sidebar/>}/>
        </div>
    );
};

export default ScreenHome;