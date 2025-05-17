import { config } from 'dotenv';
config();

import '@/ai/flows/summarize-offline-data.ts';
import '@/ai/flows/generate-survival-plan.ts';
import '@/ai/flows/answer-survival-questions.ts';