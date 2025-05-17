// Summarize key information from offline resources using an AI chatbot.

'use server';

/**
 * @fileOverview Summarizes key information from offline resources using an AI chatbot.
 *
 * - summarizeOfflineData - A function that handles the summarization process.
 * - SummarizeOfflineDataInput - The input type for the summarizeOfflineData function.
 * - SummarizeOfflineDataOutput - The return type for the summarizeOfflineData function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeOfflineDataInputSchema = z.object({
  query: z.string().describe('The user query to summarize offline data.'),
  offlineData: z.string().describe('The offline data to summarize.'),
});
export type SummarizeOfflineDataInput = z.infer<typeof SummarizeOfflineDataInputSchema>;

const SummarizeOfflineDataOutputSchema = z.object({
  summary: z.string().describe('The summary of the offline data.'),
});
export type SummarizeOfflineDataOutput = z.infer<typeof SummarizeOfflineDataOutputSchema>;

export async function summarizeOfflineData(input: SummarizeOfflineDataInput): Promise<SummarizeOfflineDataOutput> {
  return summarizeOfflineDataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeOfflineDataPrompt',
  input: {schema: SummarizeOfflineDataInputSchema},
  output: {schema: SummarizeOfflineDataOutputSchema},
  prompt: `You are a survival expert. Summarize the following offline data based on the user's query.\n\nUser Query: {{{query}}}\n\nOffline Data: {{{offlineData}}}`,
});

const summarizeOfflineDataFlow = ai.defineFlow(
  {
    name: 'summarizeOfflineDataFlow',
    inputSchema: SummarizeOfflineDataInputSchema,
    outputSchema: SummarizeOfflineDataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
