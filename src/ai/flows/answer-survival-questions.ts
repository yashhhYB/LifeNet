'use server';
/**
 * @fileOverview An AI agent that answers questions about survival techniques.
 *
 * - answerSurvivalQuestion - A function that answers a user's question about survival techniques.
 * - AnswerSurvivalQuestionInput - The input type for the answerSurvivalQuestion function.
 * - AnswerSurvivalQuestionOutput - The return type for the answerSurvivalQuestion function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerSurvivalQuestionInputSchema = z.object({
  question: z.string().describe('The user question about survival techniques.'),
});
export type AnswerSurvivalQuestionInput = z.infer<typeof AnswerSurvivalQuestionInputSchema>;

const AnswerSurvivalQuestionOutputSchema = z.object({
  answer: z.string().describe('The answer to the user question.'),
});
export type AnswerSurvivalQuestionOutput = z.infer<typeof AnswerSurvivalQuestionOutputSchema>;

export async function answerSurvivalQuestion(input: AnswerSurvivalQuestionInput): Promise<AnswerSurvivalQuestionOutput> {
  return answerSurvivalQuestionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerSurvivalQuestionPrompt',
  input: {schema: AnswerSurvivalQuestionInputSchema},
  output: {schema: AnswerSurvivalQuestionOutputSchema},
  prompt: `You are a survival expert. Answer the following question about survival techniques:

Question: {{{question}}} `,
});

const answerSurvivalQuestionFlow = ai.defineFlow(
  {
    name: 'answerSurvivalQuestionFlow',
    inputSchema: AnswerSurvivalQuestionInputSchema,
    outputSchema: AnswerSurvivalQuestionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
