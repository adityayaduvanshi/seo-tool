import { TaskItem } from '@/types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ProgressProvider from './providers/progress-provider';

interface ResultProgresProps {
  data: TaskItem;
}

const ResultProgress = ({ data }: ResultProgresProps) => {
  return (
    <div className="flex  justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-2">
        <ProgressProvider valueEnd={data.onpage_score} valueStart={0}>
          {(value) => <CircularProgressbar value={value} text={`${value}%`} />}
        </ProgressProvider>
        <h2>Overall Score</h2>
      </div>
    </div>
  );
};

export default ResultProgress;
