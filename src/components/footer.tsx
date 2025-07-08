export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} TGF Build. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
