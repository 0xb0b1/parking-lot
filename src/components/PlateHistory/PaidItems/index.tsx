import { useHistory } from "../../../hooks/useHistory";

interface IProps {
  showRegisterDetail: () => void;
}

export function PaidItems({ showRegisterDetail }: IProps) {
  const { plate } = useHistory();

  return (
    <>
      {plate
        .filter((paid) => paid.paid === true)
        .map((item) => (
          <div className="box" onClick={showRegisterDetail}>
            <div className="time">
              <span>TEMPO TOTAL</span>
              <span>{item.time}</span>
            </div>
            <div className="payment">
              <span>PAGAMENTO</span>
              <span>Pago</span>
            </div>
          </div>
        ))}
    </>
  );
}

export default PaidItems;
