import { useContext } from "react";
import { openPopupWidget } from "react-calendly";
import { MouseContext } from "@/context/mouseContext";

export function SchedulerButton({ className }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);
  const calendly_url =
    "https://calendly.com/huzaifasajjad/project-discussion-call";

  const handleClick = () => {
    openPopupWidget({ url: calendly_url });
  };

  return (
    <button
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
      onClick={handleClick}
      className={`xs:text-16 md:text-16 lg:text:20 xl:text-22 text-primary border border-primary w-max px-12 py-3 rounded-sm cursor-none hover:bg-primary hover:text-white transition-all duration-500 cursor-none ${className}`}
    >
      Schedule a Call
    </button>
  );
}

export function SchedulerLink({ className }) {
  const { setHoverCursor, setNormalCursor } = useContext(MouseContext);

  const calendly_url =
    "https://calendly.com/huzaifasajjad/project-discussion-call";

  const handleClick = () => {
    openPopupWidget({ url: calendly_url });
  };

  return (
    <span
      className={`xs:text-16 md:text-18 lg:text-20 xl:text-22 text-black font-regular cursor-none xs:mt-4 lg:mt-0 ${className}`}
      onClick={handleClick}
      onMouseEnter={setHoverCursor}
      onMouseLeave={setNormalCursor}
    >
      Schedule a Call
    </span>
  );
}
