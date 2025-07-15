'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import { Progress } from '@/components/ui/progress';

export function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [invalid, setInvalid] = useState<{[key: string]: boolean}>({});
  const [sending, setSending] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (progress > 0 && progress < 100) {
      timer = setTimeout(() => setProgress(progress + 2), 60); // ~3s total
    }
    return () => clearTimeout(timer);
  }, [progress]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (invalid[e.target.name]) {
      setInvalid((prev) => ({ ...prev, [e.target.name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    const name = formData.get('name')?.toString().trim();
    const email = formData.get('email')?.toString().trim();
    const subject = formData.get('subject')?.toString().trim();
    const message = formData.get('message')?.toString().trim();
    const newInvalid: {[key: string]: boolean} = {};
    if (!name) newInvalid.name = true;
    if (!email) newInvalid.email = true;
    if (!subject) newInvalid.subject = true;
    if (!message) newInvalid.message = true;
    setInvalid(newInvalid);
    if (Object.keys(newInvalid).length > 0) {
      toast({
        title: 'Please fill in all fields.',
        className: 'border-red-500',
        duration: 3000,
      });
      return;
    }
    setSending(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setProgress(1);
      toast({
        title: 'Email sent!',
        description: (
          <div>
            <span>Your message was sent successfully.</span>
            <Progress value={progress} className="mt-2 h-1 bg-green-500 transition-all duration-3000" />
          </div>
        ),
        className: 'border-green-500',
        duration: 3000,
      });
      setTimeout(() => setProgress(0), 3000);
      formRef.current.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        className: 'border-red-500',
        duration: 3000,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Contact us</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Sazinies Ar Mums
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Ir ideja projektam vai jautājums? Sazinies ar mums – priecāsimies par Tavu ziņu!
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold text-foreground">Adrese</h3>
              <p>Krišjāņa Barona iela 136e, Riga, LV-1012</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Vispārējie jautājumi</h3>
              <p>E-pasts: info@tgf.lv</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Mūsu komanda</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Filips Pērkons</p>
                  <p>T: 29 328 337</p>
                  <p>E: filips@tgf.lv</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Eduards Antipovs</p>
                  <p>T: 29 992 269</p>
                  <p>E: eduards@tgf.lv</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ruslans Bikmetovs</p>
                  <p>T: 22 176 883</p>
                  <p>E: ruslans@tgf.lv</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Sergejs Kabanovs</p>
                  <p>T: 26 484 424</p>
                  <p>E: sergejs@tgf.lv</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Uzņēmuma dati</h3>
              <p>Reģistrācijas Nr. – LV40103906156</p>
              <p>Fiziskā adrese – Krišjāņa Barona iela 136E, LV-1012, Riga</p>
              <p>Juridiskā adrese – Biķernieku iela 29-19, LV-1039, Riga</p>
              <p>Bankas kods: Luminor Bank AS Latvian Branch, RIKOLV2X</p>
              <p>Konts: LV37RIKO0002930203957</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Darba laiks</h3>
              <p>Pirmdiena – Piektdiena 9:00 – 18:00</p>
            </div>
          </div>
          <div className="rounded-lg bg-secondary p-8 shadow-lg">
            <form ref={formRef} className="grid gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Vārds</Label>
                  <Input id="name" name="name" placeholder="Ievadiet savu vārdu" onChange={handleInput} className={invalid.name ? 'border-red-500' : ''} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-pasts</Label>
                  <Input id="email" name="email" type="email" placeholder="Ievadiet savu e-pastu" onChange={handleInput} className={invalid.email ? 'border-red-500' : ''} />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Temats</Label>
                <Input id="subject" name="subject" placeholder="Kāds jautājums?" onChange={handleInput} className={invalid.subject ? 'border-red-500' : ''} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Ziņa</Label>
                <Textarea id="message" name="message" placeholder="Ievadiet savu ziņu" className={`min-h-[150px]${invalid.message ? ' border-red-500' : ''}`} onChange={handleInput} />
              </div>
              <Button type="submit" size="lg" className="w-full flex items-center justify-center gap-2" disabled={sending}>
                {sending ? (
                  <span className="flex items-center gap-2">
                    Sūta
                    <span className="animate-pulse">...</span>
                  </span>
                ) : (
                  <>
                    SŪTĪT
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}