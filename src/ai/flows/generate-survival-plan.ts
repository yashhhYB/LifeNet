// use server'

/**
 * @fileOverview Survival plan generator flow.
 *
 * - generateSurvivalPlan - A function that generates a survival plan based on user input.
 * - GenerateSurvivalPlanInput - The input type for the generateSurvivalPlan function.
 * - GenerateSurvivalPlanOutput - The return type for the generateSurvivalPlan function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSurvivalPlanInputSchema = z.object({
  location: z.string().describe('The current location of the user.'),
  availableResources: z
    .string()
    .describe('A list of available resources the user has.'),
});
export type GenerateSurvivalPlanInput = z.infer<typeof GenerateSurvivalPlanInputSchema>;

const GenerateSurvivalPlanOutputSchema = z.object({
  survivalPlan: z.string().describe('A detailed survival plan for the user.'),
});
export type GenerateSurvivalPlanOutput = z.infer<typeof GenerateSurvivalPlanOutputSchema>;

export async function generateSurvivalPlan(
  input: GenerateSurvivalPlanInput
): Promise<GenerateSurvivalPlanOutput> {
  return generateSurvivalPlanFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSurvivalPlanPrompt',
  input: {schema: GenerateSurvivalPlanInputSchema},
  output: {schema: GenerateSurvivalPlanOutputSchema},
  prompt: `You are a survival expert. Generate a survival plan based on the user's current location and available resources.

Current Location: {{{location}}}
Available Resources: {{{availableResources}}}

Survival Plan:`,
});

const generateSurvivalPlanFlow = ai.defineFlow(
  {
    name: 'generateSurvivalPlanFlow',
    inputSchema: GenerateSurvivalPlanInputSchema,
    outputSchema: GenerateSurvivalPlanOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
