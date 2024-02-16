import PropTypes from "prop-types";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds = moment()
    ?.startOf("day")
    ?.seconds(time)
    ?.format("H:mm:ss");
  return (
    <span className="absolute bottom-2 right-2 bg-black py-1 px-2 text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </span>
  );
};

VideoLength.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
};

export default VideoLength;
