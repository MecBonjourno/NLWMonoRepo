import { CloseButton } from "../CloseButton";
import { Balloon, Bug, Lightbulb } from "phosphor-react";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSucess } from "./Steps/FeedbackSuccessStep";

export const feedBackTypes = {
  BUG: {
    title: "Problema",
    icon: {
      source: <Bug />,
      alt: "bug icon",
    },
  },
  IDEA: {
    title: "Ideia",
    icon: {
      source: <Lightbulb />,
      alt: "lightbulb icon",
    },
  },
  OTHER: {
    title: "Outro",
    icon: {
      source: <Balloon />,
      alt: "Ballon icon",
    },
  },
};

export type FeedbackType = keyof typeof feedBackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="widgetForm">
      {feedbackSent ? (
        <FeedbackSucess onReset={handleRestartFeedback} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onReset={handleRestartFeedback}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}

      <footer>
        <span className="text-xs text-neutral-400">
          Feito com Swag by{" "}
          <a href="https://theza.co" className="underline underline-offset-2">
            MecBonjourno
          </a>
        </span>
      </footer>
    </div>
  );
}
