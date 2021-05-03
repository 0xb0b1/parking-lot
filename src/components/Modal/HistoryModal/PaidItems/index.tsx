import { useHistory } from "../../../../hooks/useHistory";

export function PaidItems() {
  // const { plate } = useHistory();
  const plate =
    // 20210503141828
    // https://parking-lot-to-pfz.herokuapp.com/parking/AAA-1234

    [
      {
        time: "1 days 1 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "5ffc64",
      },
      {
        time: "8 days 19 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "6004e2",
      },
      {
        time: "54 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "601086",
      },
      {
        time: "39 days 20 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "601088",
      },
      {
        time: "5 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "604517",
      },
      {
        time: "2 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "604519",
      },
      {
        time: "18 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451a",
      },
      {
        time: "2 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451a",
      },
      {
        time: "1 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451b",
      },
      {
        time: "54 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451b",
      },
      {
        time: "1 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451b",
      },
      {
        time: "3 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451c",
      },
      {
        time: "1 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451d",
      },
      {
        time: "2 days 3 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60451e",
      },
      {
        time: "37 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "6047ef",
      },
      {
        time: "1 days 16 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "605002",
      },
      {
        time: "33 days 21 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60525a",
      },
      {
        time: "1 days 3 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "607f4c",
      },
      {
        time: "19 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "6080d4",
      },
      {
        time: "35 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "6080d4",
      },
      {
        time: "2 hours 53 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "608126",
      },
      {
        time: "1 days 2 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "6086ec",
      },
      {
        time: "10 seconds",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "608862",
      },
      {
        time: "18 minutes",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "608862",
      },
      {
        time: "4 days 22 hours",
        paid: true,
        left: true,
        plate: "AAA-1234",
        reservation: "60886a",
      },
      {
        time: "19 hours 34 minutes",
        paid: false,
        left: false,
        plate: "AAA-1234",
        reservation: "608f1d",
      },
    ];

  return (
    <>
      {plate
        .filter((paid) => paid.paid === true)
        .map((item) => (
          <div className="box">
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
