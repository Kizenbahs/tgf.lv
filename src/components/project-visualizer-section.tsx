'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { projectVisualizer } from '@/ai/flows/project-visualizer';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Lightbulb } from 'lucide-react';

const formSchema = z.object({
  projectDetails: z
    .string()
    .min(20, { message: 'Please describe your project in at least 20 characters.' })
    .max(500, { message: 'Please keep your description under 500 characters.' }),
});

export function ProjectVisualizerSection() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectDetails: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setImageUrl(null);
    try {
      const result = await projectVisualizer(values);
      setImageUrl(result.image);
    } catch (error) {
      console.error('Error generating visualization:', error);
      toast({
        variant: 'destructive',
        title: 'Oh no! Something went wrong.',
        description: 'There was a problem with the AI visualizer. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="visualizer" className="w-full bg-muted py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:gap-16 md:px-6">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
             <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm flex items-center gap-2">
                <Bot className="h-4 w-4 text-primary" /> Powered by AI
             </div>
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              AI Project Visualizer
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have an idea? Describe your project, and our AI will generate a concept visualization for you in seconds.
            </p>
            <div className="flex items-start gap-2 rounded-md border border-primary/20 bg-primary/10 p-3 text-sm">
                <Lightbulb className="mt-1 h-4 w-4 shrink-0 text-primary"/>
                <p><span className="font-semibold">Example prompt:</span> "A modern two-story family home with a minimalist design, large glass windows, a flat roof, and a wooden exterior finish."</p>
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Project Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your project here..."
                        className="resize-none bg-background"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full sm:w-auto">
                {isLoading ? 'Generating...' : 'Visualize Project'}
              </Button>
            </form>
          </Form>
        </div>
        <div className="flex items-center justify-center">
            <Card className="w-full max-w-lg aspect-square">
                <CardHeader>
                    <CardTitle className="text-center">Your Concept</CardTitle>
                </CardHeader>
                <CardContent className="flex items-center justify-center h-full pb-6">
                {isLoading && (
                    <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Bot className="h-10 w-10 animate-pulse" />
                        <p>Our AI is bringing your idea to life...</p>
                    </div>
                )}
                {imageUrl && (
                    <Image
                    src={imageUrl}
                    alt="AI generated project visualization"
                    width={512}
                    height={512}
                    className="rounded-lg object-cover"
                    />
                )}
                {!isLoading && !imageUrl && (
                    <div className="flex flex-col items-center gap-2 text-center text-muted-foreground">
                        <Image
                            src="https://placehold.co/512x512/f0f0f0/333333.png?text=Preview"
                            alt="Visualization placeholder"
                            width={512}
                            height={512}
                            className="rounded-lg object-cover"
                            data-ai-hint="blueprint sketch"
                        />
                        <p className="text-sm mt-2">Your generated image will appear here.</p>
                    </div>
                )}
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
