import { BookOpen, Phone, Mail, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import authorImg from "@/assets/author.png";

const Index = () => {
  return (
    <div className="min-h-screen green-gradient">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <h1 className="font-display text-lg font-bold text-foreground">
              Digital Wallet <span className="text-primary">Ebookstore</span>
            </h1>
          </div>
          <Link to="/read">
            <Button className="gold-gradient font-body text-sm font-semibold text-primary-foreground shadow-gold hover:opacity-90">
              Read Now
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            {/* Book cover */}
            <div className="w-full max-w-sm shrink-0">
              <div className="overflow-hidden rounded-xl shadow-card">
                <img
                  src="/book/page_1.jpg"
                  alt="Digital Wallet Book Cover by Emmanuel Ndunda"
                  className="w-full"
                />
              </div>
            </div>

            {/* Info */}
            <div className="text-center lg:text-left">
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
                Now Available Online
              </p>
              <h2 className="font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Digital Wallet
              </h2>
              <p className="mt-2 font-display text-xl text-muted-foreground sm:text-2xl">
                Learn Digital Skills. Master. Monetize. Earn.
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
                A comprehensive guide by Emmanuel Ndunda for anyone ready to build a sustainable
                future through digital skills — regardless of age, background, or education. Learn
                freelancing, graphic design, web development, data entry, and much more.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
                <Link to="/read">
                  <Button
                    size="lg"
                    className="gold-gradient px-8 text-base font-semibold text-primary-foreground shadow-gold hover:opacity-90"
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Start Reading
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                ISBN: 979-8277-92-690-1 · Copyright © 2025 Emmanuel Ndunda
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author section */}
      <section className="border-t border-border py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-16">
            <div className="shrink-0">
              <div className="h-56 w-56 overflow-hidden rounded-2xl border-2 border-primary/30 shadow-gold">
                <img
                  src={authorImg}
                  alt="Emmanuel Ndunda — Author of Digital Wallet"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
                About the Author
              </p>
              <h3 className="font-display text-3xl font-bold text-foreground">Emmanuel Ndunda</h3>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Emmanuel Ndunda is a digital skills trainer, mentor, freelancer, and digital
                entrepreneur based in Kajiado County, Kenya. He has worked with the Kajiado County
                Government, Ajira Digital Program, and various community organizations to equip
                youth with essential digital skills. His mission is to empower anyone to thrive in
                the digital economy.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a
                  href="tel:0769722940"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  0769722940
                </a>
                <a
                  href="mailto:ndundae823@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  ndundae823@gmail.com
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-4 w-4 text-primary" />
                  @Emmanuel Ndunda
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2025 Emmanuel Ndunda. All Rights Reserved. No part of this book may be reproduced
            without prior written consent.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
