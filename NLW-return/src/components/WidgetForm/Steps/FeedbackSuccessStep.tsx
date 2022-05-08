import { CheckCircle } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

interface FeedbackSuccesProps {
  onReset: () => void;
}

export function FeedbackSucess({ onReset }: FeedbackSuccesProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className="flex flex-col items-center py-10 w-[304px]">
        <CheckCircle weight="bold" className="w-8 h-8" />
        <span className="text-xl mt-2">Agradecemos seu Feedback</span>
        <button
          onClick={onReset}
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors duration-500 disabled:opacity-50 disabled:hpver:bg-brand-500"
        >
          Quero enviar outro feedback
        </button>
      </div>
    </>
  );
}
