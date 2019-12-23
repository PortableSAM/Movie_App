import moment from "moment";

const TargetDt = moment()
  .subtract(1, "d")
  .format("YYYYMMDD");

export default TargetDt;
