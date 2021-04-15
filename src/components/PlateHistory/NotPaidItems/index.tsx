import { useHistory } from "../../../hooks/useHistory";

import NotPaidIcon from "../../../images/icons/notpaid.svg";

interface IProps {
  showRegisterDetail: () => void;
}

function NotPaidItems({ showRegisterDetail }: IProps) {
  const { plate } = useHistory();

  return (
    <>
      {plate
        .filter((paid) => paid.paid !== true)
        .map((item) => (
          <div className="box" onClick={showRegisterDetail}>
            <div className="time">
              <span>TEMPO ATUAL</span>
              <span>{item.time}</span>
            </div>
            <div className="payment">
              <span>PAGAMENTO</span>
              <img src={NotPaidIcon} alt="not paid" />
            </div>
          </div>
        ))}
    </>
  );
}

export default NotPaidItems;
