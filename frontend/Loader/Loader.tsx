export default function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        background: "#404430",
        textAlign: "center",
        justifyContent: "center",
        fontSize: "25px",
        fontFamily: "Advent Pro UltraExpanded",
        width: "100vw",
        height: "100vh",
        color: "#fff",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Loading...
      </div>
    </div>
  );
}
