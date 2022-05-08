import { FeedbackType, feedBackTypes } from "..";
import { CloseButton } from "../../CloseButton";

interface FeedbackTypeStepProps {
  onChanged: (type: FeedbackType) => void;
  feedbackType?: FeedbackType;
}

export function FeedbackTypeStep({
  onChanged,
  feedbackType,
}: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">
          {feedbackType || "Deixe seu FeedBack"}
        </span>
        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedBackTypes).map(([key, value]) => {
          return (
            <div key={key} className="flex-1">
              <button
                className="widgetFormButton"
                onClick={() => onChanged(key as FeedbackType)}
              >
                {value.icon.source}
                <span>{value.title}</span>
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
