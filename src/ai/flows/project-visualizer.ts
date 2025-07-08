'use server';

/**
 * @fileOverview AI flow for generating a project visualization based on user input.
 *
 * - projectVisualizer - A function that generates a project visualization.
 * - ProjectVisualizerInput - The input type for the projectVisualizer function.
 * - ProjectVisualizerOutput - The return type for the projectVisualizer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import wav from 'wav';

const ProjectVisualizerInputSchema = z.object({
  projectDetails: z
    .string()
    .describe('Details of the project, including dimensions, materials, and style.'),
});
export type ProjectVisualizerInput = z.infer<typeof ProjectVisualizerInputSchema>;

const ProjectVisualizerOutputSchema = z.object({
  image: z
    .string()
    .describe(
      'A data URI containing a base64-encoded image of the project visualization.'
    ),
});
export type ProjectVisualizerOutput = z.infer<typeof ProjectVisualizerOutputSchema>;

export async function projectVisualizer(input: ProjectVisualizerInput): Promise<ProjectVisualizerOutput> {
  return projectVisualizerFlow(input);
}

const projectVisualizerFlow = ai.defineFlow(
  {
    name: 'projectVisualizerFlow',
    inputSchema: ProjectVisualizerInputSchema,
    outputSchema: ProjectVisualizerOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.0-flash-preview-image-generation',
      prompt: `Generate a concept visualization for a project with the following details: ${input.projectDetails}`,
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      throw new Error('No image was generated.');
    }

    return {image: media.url};
  }
);
