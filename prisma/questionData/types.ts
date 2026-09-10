export interface QuestionOptionInput {
  label: "A" | "B" | "C" | "D";
  textEn: string;
  textMr: string;
  isCorrect: boolean;
}

export interface QuestionInput {
  textEn: string;
  textMr: string;
  explanationEn?: string;
  explanationMr?: string;
  options: QuestionOptionInput[];
}

export interface QuestionSetInput {
  standard: { code: string; nameEn: string; nameMr: string; sortOrder?: number };
  subject: { code: string; nameEn: string; nameMr: string; sortOrder?: number };
  questions: QuestionInput[];
}
