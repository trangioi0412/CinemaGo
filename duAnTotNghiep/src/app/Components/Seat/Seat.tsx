import s from "./seat.module.css";
function Seat({ disabled, name }: { disabled: boolean; name: string }) {
  return (
    <button
      className={`${s.seat} ${name === "" && s.removed}`}
      disabled={disabled}
    >
      {name}
    </button>
  );
}

export default Seat;
