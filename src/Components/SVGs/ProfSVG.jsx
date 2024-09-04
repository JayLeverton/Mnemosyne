function ProfSVG({ color = "black" }) {
  return (
    <svg
      className=""
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <polyline points="2.75 8.75,6.25 12.25,13.25 4.75"></polyline>{" "}
      </g>
    </svg>
  );
}

export default ProfSVG;
