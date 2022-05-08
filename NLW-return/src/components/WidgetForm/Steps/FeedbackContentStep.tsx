import { ArrowArcLeft, Camera } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedBackTypes } from "..";
import { api } from "../../../api/api";
import { CloseButton } from "../../CloseButton";
import { Loading } from "../Loading";
import { ScreenshotButton } from "../ScreenshotButton";

interface FeedbackContentProps {
  feedbackType: FeedbackType;
  onReset: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({
  feedbackType,
  onReset,
  onFeedbackSent,
}: FeedbackContentProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [feedbackContent, setFeedbackContent] = useState("");
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedBackTypes[feedbackType];

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(feedbackContent, screenshot);
    setIsSendingFeedback(true);
    await api.post("/feedbacks", {
      type: feedbackType,
      comment: feedbackContent,
      screenshot,
    });
    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <CloseButton />
        <button type="button" className="buttonContent" onClick={onReset}>
          <ArrowArcLeft weight="bold" className="iconArrowBack" />
        </button>
        <span className="spanContent">
          {feedbackTypeInfo.icon.source}
          {feedbackTypeInfo.title}
        </span>
      </header>

      <form onSubmit={handleSubmit} className="form">
        <textarea
          className="textarea"
          placeholder="Conte pra nós com detalhes o que quiser..."
          onChange={e => setFeedbackContent(e.target.value)}
        />
        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshot={setScreenshot}
          />
          <button
            type="submit"
            disabled={feedbackContent.length === 0 || isSendingFeedback}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 disabled:opacity-50 disabled:hpver:bg-brand-500"
          >
            {isSendingFeedback ? <Loading /> : "Enviar Feedback"}
          </button>
        </footer>
      </form>
    </>
  );
}
