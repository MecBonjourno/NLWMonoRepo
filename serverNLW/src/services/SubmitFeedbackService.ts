import { MailAdapter } from "../adapters/mailAdapters";
import { FeedbacksRepository } from "../repositories/feedbacksRepository";

interface SubmitFeedbackServiceRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackServiceUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailAdapter: MailAdapter
  ) {}

  async execute(request: SubmitFeedbackServiceRequest) {
    const { type, comment, screenshot } = request;

    await this.feedbacksRepository.create({ type, comment, screenshot });

    await this.mailAdapter.sendMail({
      subject: "Feedback",
      body: [
        `<div>`,
        `<p> Tipo de Feedback: ${type}</p>`,
        `<p> comentario: ${comment}</p>`,
        screenshot ? `<img src="${screenshot}/>` : ``,
        `</div>`,
      ].join("\n"),
    });
  }
}
