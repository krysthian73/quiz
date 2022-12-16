import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "../styles/Timer.module.css";

// ** Interfaces
interface TimerProps {
  duration: number;
  timerOut: () => void;
}

export default function Timer(props: TimerProps) {
  const { duration, timerOut } = props;
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={duration}
        size={120}
        isPlaying
        onComplete={timerOut}
        colors={["#BCE596", "#F7B801", "#ED827A"]}
        colorsTime={[10, 6.5, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
