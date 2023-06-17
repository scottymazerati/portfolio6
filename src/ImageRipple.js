import { useState } from "react";

function Ripple(props) {
  const [ripple, setRipple] = useState(true);

  const handleRipple = () => {
    setRipple(true);
    setTimeout(() => setRipple(false), 1000);
  };

  return (
    <div className="relative">
      <img src={props.src} alt={props.alt} />

      {ripple && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-current rounded-full opacity-50 animate-ripple"
        ></div>
      )}
    </div>
  );
}

export default Ripple