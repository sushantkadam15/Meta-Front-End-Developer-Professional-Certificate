import MouseCoordFetcher from "./MouseCoordFetcher";
const MousePanel = () => {
  return (
    <MouseCoordFetcher
      render={({ mouseCoord }) => (
        <>
          <h1>Mouse Panel</h1>
          <p>X = {mouseCoord.x}</p>
          <p>Y = {mouseCoord.y}</p>
        </>
      )}
    />
  );
};

export default MousePanel;
