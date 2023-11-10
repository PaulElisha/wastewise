import { Link } from "react-router-dom";
import logo from "../assets/wastewise_logo.png";

type Props = {
  hideText?: boolean;
};

const Logo = (props: Props) => {
  return (
    <Link
      to="/"
      className="btn btn-ghost btn-neutral normal-case text-xl font-bold px-1 hover:bg-transparent"
    >
      <img src={logo} alt="" className="h-7" />
      {!props.hideText && (
        <span className="font-extrabold pl-1">WasteWise</span>
      )}
    </Link>
  );
};

export default Logo;