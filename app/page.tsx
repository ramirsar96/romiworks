import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, Cpu, Sparkles, Calendar } from "lucide-react"

export default function Home() {
  // Sample projects - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "LeadCast",
      description: "AI-powered design tool that transforms text prompts into stunning visual compositions.",
      tags: ["React", "TensorFlow.js", "WebGL"],
      url: "https://neuralcanvas.romiworks.com",
      image: "/placeholder.svg?height=200&width=400",
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
            <Link href="#contact" className="text-sm font-medium text-slate-200 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/romiworks" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-300 hover:text-white transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/romiworks" target="_blank" rel="noopener noreferrer">
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
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
              <Sparkles className="mr-1 h-3.5 w-3.5" />
              <span>Full-Stack Developer</span>
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
              Hi, I'm Romi
            </h1>
            <p className="max-w-[600px] text-slate-400 md:text-xl">
              I build web applications to solve real-world problems and make everyday tasks easier. Check out my latest
              tools below.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <Link
                href="mailto:hello@romiworks.com"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Mail className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Email</span>
              </Link>
              <Link
                href="https://calendly.com/romiworks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Calendar className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">Schedule</span>
              </Link>
              <Link
                href="https://linkedin.com/in/romiworks"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center w-[100px] h-[100px] rounded-lg border border-slate-800 bg-slate-900/50 backdrop-blur-sm hover:bg-slate-800/50 transition-colors group"
              >
                <Linkedin className="h-6 w-6 mb-2 text-slate-400 group-hover:text-white transition-colors" />
                <span className="text-sm text-slate-400 group-hover:text-white transition-colors">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/romiworks"
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
                Tools That Make Life Easier
              </h2>
              <p className="max-w-[800px] text-slate-400 md:text-xl/relaxed">
                A collection of web applications designed to solve real problems and improve your daily tasks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-slate-400">{project.description}</CardDescription>
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
                    <p className="mt-4 text-sm text-slate-400">
                      {/* Add a benefit statement for each project */}
                      {project.id === 1 && "Transform your creative process with AI-powered design assistance."}
                      {project.id === 2 && "Keep your data in sync across all your devices with zero effort."}
                      {project.id === 3 && "Make data-driven decisions with powerful analytics and insights."}
                      {project.id === 4 && "Collaborate with your team in real-time on coding projects."}
                    </p>
                  </CardContent>
                  <CardFooter>
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

            <div className="mt-12 text-center">
              <p className="text-slate-400 mb-4">Looking for something specific? I might be working on it already!</p>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Request a Custom App</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Message Form */}
              <div className="space-y-4 p-6 rounded-xl border border-slate-800 bg-slate-900/50 backdrop-blur-sm">
                <h2 className="text-2xl font-bold tracking-tighter">Send a Message</h2>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        id="name"
                        placeholder="Your name"
                        className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        placeholder="Your email"
                        className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <input
                      id="subject"
                      placeholder="Subject"
                      className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Your message"
                      rows={4}
                      className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300 mb-6">
                    <span>Get in Touch</span>
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Have an Idea or Feedback?</h2>
                  <p className="mt-4 text-slate-400 md:text-lg">
                    Share your thoughts on our existing apps or suggest a new tool that would help you. We're constantly
                    looking for ways to create more useful applications.
                  </p>
                </div>

                <div className="space-y-8 mt-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Mail className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Email</h3>
                      <p className="text-slate-400">hello@romiworks.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Linkedin className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">LinkedIn</h3>
                      <p className="text-slate-400">linkedin.com/in/romiworks</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/50">
                      <Github className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">GitHub</h3>
                      <p className="text-slate-400">github.com/romiworks</p>
                    </div>
                  </div>
                </div>
              </div>
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
            <Link href="https://github.com/romiworks" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="https://linkedin.com/in/romiworks" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:hello@romiworks.com">
              <Mail className="h-5 w-5 text-slate-400 hover:text-white transition-colors" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

