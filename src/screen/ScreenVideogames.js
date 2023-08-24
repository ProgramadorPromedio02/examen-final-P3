import ContentTwo from "../components/ContentTwo";
import Grid from "../components/Grid";
import HeaderTwo from "../components/HeaderTwo";

function ScreenVideogames() {
  return (
    <div>
      <Grid header={<HeaderTwo/>} content={<ContentTwo/>} />
    </div>
  );
};

export default ScreenVideogames;
