import MouseCoordFetcher from "./MouseCoordFetcher";
const MouseLogger = () => {
  return (
    <MouseCoordFetcher
      render={({ mouseCoord }) => (
        <>
          <h2>X Logged: {mouseCoord.x}</h2>
          <h2>Y Logged: {mouseCoord.y}</h2>
        </>
      )}
    />
  );
};

export default MouseLogger;
