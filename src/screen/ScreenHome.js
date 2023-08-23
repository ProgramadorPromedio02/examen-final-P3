import Grid from "../components/Grid";
import Content from "../components/Content";
import SideBar from "../components/SideBar";
import CarouselHeader from "../components/CarouselHeader";

function ScreenHome () {
    return (
        <div>
            <Grid header={<CarouselHeader/>} content={<Content/>} lateral={<SideBar/>}  />
        </div>
    );
};

export default ScreenHome;