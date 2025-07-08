import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
  return (
    <section className="w-full py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <Badge variant="default">Contact Us</Badge>
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Get in Touch
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Have a project in mind or just want to say hello? We&apos;d love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-6 text-muted-foreground">
            <div>
              <h3 className="text-xl font-bold text-foreground">Address</h3>
              <p>Riga, Krišjāņa Barona ielā 136e, LV-1012</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">General Inquiries</h3>
              <p>E-pasts: info@tgf.lv</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Our Team</h3>
              <div className="mt-2 space-y-4">
                <div>
                  <p className="font-semibold text-foreground">Filips Pērkons</p>
                  <p>T: 29328337</p>
                  <p>E: filips@tgf.lv</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Eduards Antipovs</p>
                  <p>T: 29992269</p>
                  <p>E: eduards@tgf.lv</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Ruslans</p>
                  <p>T: 22176883</p>
                  <p>E: ruslans@tgf.lv</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Company Details</h3>
              <p>Reģistrācijas Nr. – LV40103906156</p>
              <p>Faktiskā adrese – Krišjāņa Barona 136E, LV-1012, Rīga</p>
              <p>Juridiskā adrese – Biķernieku iela 29-19, LV-1039, Rīga</p>
              <p>Banka: Luminor Bank AS Latvijas filiāle, RIKOLV2X</p>
              <p>Konts: LV37RIKO0002930203957</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground">Working Hours</h3>
              <p>Pr. – Pt. 9:00 – 18:00</p>
              <p>Avārijas seku novēršana – serviss 24/7</p>
            </div>
          </div>
          <div>
            <form className="grid gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this about?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" className="min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}