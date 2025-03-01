import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Cpu, Sparkles, Calendar } from "lucide-react"
import React from "react";
import ContactForm from "@/components/ui/contactform";


export default function Home() {
  const projects = [
    {
      id: 1,
      title: "LeadCast",
      description: `LeadCast is an AI-powered podcast recommendation tool inspired by the work of Ronak Sardari, 
                    a PharmD student at the University of British Columbia, who created a curated database of leadership podcasts 
                    for her LEAP (Leadership Experience Applied to Pharmacy) coursework.  
                    This tool leverages semantic search and NLP to understand user interests and goals, 
                    analyzing the curated database beyond simple keyword matching to recommend the best-fitting leadership podcasts. 
                    By capturing deeper contextual meanings, LeadCast ensures users discover content that truly aligns with their learning journey.`,
      tags: ["React", "Next.js", "Semantic Search", "Conversational AI"],
      url: "https://leadcast.romiworks.com",
      image: "/LeadCast.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="absolute inset-0 bg-slate-900 [background:radial-gradient(circle_500px_at_50%_200px,rgba(120,119,198,0.3),transparent)]"></div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 backdrop-blur-sm bg-slate-900/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold tracking-tight">RomiWorks</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#projects" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#about" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ramirsar96" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-300 hover:text-white transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rominasardari/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-slate-300 hover:text-white transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Button variant="default" size="sm" asChild>
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 md:py-16 border-b border-slate-800">
        <div className="container px-4 md:px-8">
          <div className="flex flex-col items-center space-y-8 py-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Hi, I'm Romi
            </h1>
            <div className="space-y-6 text-left max-w-[800px] mx-auto">
              <p className="max-w-[600px] text-center  text-slate-400 md:text-xl">
              This is where I share the tools, ideas, and experiments that keep me curious and creative. Welcome to my world, <br /> 
              welcome to <strong>Romi Works</strong>.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="mailto:dr.rominaamirsardari@gmail.com"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Mail className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Email</span>
              </Link>
              <Link
                href="https://calendly.com/dr-rominaamirsardari/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Calendar className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Calendly</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/rominasardari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Linkedin className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/ramirsar96"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Github className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">GitHub</span>
              </Link>
            </div>
            <div className="pt-4">
              <Button size="lg" className="mt-2" asChild>
                <Link href="#projects">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Explore My Apps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start space-y-4 text-left mb-8">
              <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-2">
                <span>Web Apps</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Romi's Lab
              </h2>
              <p className="max-w-[800px] text-slate-400 md:text-xl/relaxed">
                A collection of web apps, creative experiments, and problem-solving tools—built to explore ideas, push boundaries, and make life a little more interesting. 
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                key={project.id}
                className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex flex-col h-full"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <CardHeader className="flex-1">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400 min-h-[100px]"> {/* Adjust height as needed */}
                    {project.description}
                  </CardDescription>
                </CardHeader>
          
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-2.5 py-0.5 text-xs text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
          
                <CardFooter className="mt-auto"> {/* Push button to the bottom */}
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Try It Now
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-12 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-start space-y-4 text-left mb-12">
              <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-2">
                <span>About Me</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Welcome to My Creative Lab
              </h2>
            </div>

            <div className="grid gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-slate-400 leading-relaxed">
                  Hi, I'm Romi, <br /> 
                  <br />
                  A PharmD graduate, Industrial Pharmacy Resident at University of Toronto, and AI researcher at the intersection of regulatory intelligence, digital health, and emerging technologies.
                  I specialize in transforming complex challenges into innovative, user-friendly solutions—whether it's building AI-powered regulatory tools, optimizing clinical workflows, or creating intelligent automation systems that push industries forward.
                  My passion lies in merging science, technology, and creativity to drive meaningful impact. <br />
                  <br />
                  Here, I'm sharing the web apps I've built—each one designed to solve real-world problems with a mix of creativity, strategy, and cutting-edge tech. 
                  These aren't just projects; they're proof that with the right mindset, you can turn ideas into tools that make a difference. 
                  Whether it's AI-powered regulatory intelligence, digital health solutions, or automation that saves hours of work, my goal is to build things that matter. <br />
                  <br />

                  Take a look around—maybe you'll find something that sparks inspiration, solves a problem you didn't know you had, or makes your life just a little bit easier. 

                  </p>
                  
                </div>
                <div className="mt-8 p-6 rounded-lg border border-indigo-500/30 bg-indigo-500/5">
                  <p className="text-slate-300 text-center">
                    Can't find what you're looking for? Let's connect—I'm always up for building something new.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-8 md:py-12 border-t border-slate-800">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-6">
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have an Idea or Feedback?</h2>
                  <p className="mt-4 text-slate-400 md:text-lg">
                  I’d love to hear from you! 
                  Whether you have feedback on the existing apps, an idea for a new tool, or just want to connect and chat, your insights and conversations inspire me to create more impactful solutions. 
                  Let's connect and share ideas!
                  </p>
                </div>

                <div className="space-y-8 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Mail className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-slate-400">dr.rominaamirsardari@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Linkedin className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">LinkedIn</h3>
                      <p className="text-slate-400">https://www.linkedin.com/in/rominasardari/</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Github className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">GitHub</h3>
                      <p className="text-slate-400">github.com/ramirsar96@</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <section id="contact" className="py-16 md:py-24">
                <div className="container px-4 md:px-6">
                  <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8 items-start">

                      <div className="space-y-4 p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                        <h2 className="text-2xl font-bold tracking-tighter">Send a Message</h2>
                        <ContactForm />
                      </div>

                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Cpu className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold">RomiWorks</span>
          </div>
          <p className="text-center text-sm text-slate-400 md:text-left">
            &copy; {new Date().getFullYear()} RomiWorks. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/ramirsar96" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://www.linkedin.com/in/rominasardari/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:dr.rominaamirsardari@gmail.com">
              <Mail className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

