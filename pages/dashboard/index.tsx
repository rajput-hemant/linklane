import React, { FormEvent, useRef, useState } from "react";
import Head from "next/head";
import { Plus } from "lucide-react";
import { useSession } from "next-auth/react";



import { Icons } from "@/components/icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/seperator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Sidebar from "./sidebar";


interface Project {
  name: string;
  description: string;
  github: string;
  techStack: string;
}

const Dashboard = () => {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <main className="flex">
        <Sidebar>
          <div className="p-1">
            <h3 className="flex justify-center py-2 text-2xl font-bold text-slate-600 dark:text-grey-300">
              Alumini List
            </h3>
            <div className="flex h-[84vh] flex-col gap-2 overflow-y-scroll rounded p-2 shadow-inner">
              {Array.from({ length: 50 }).map((_, i) => (
                <div className="card flex h-24 items-center p-5">
                  <Avatar className="h-10 w-10">
                    <AvatarImage className="h-10 w-10"></AvatarImage>
                    <AvatarFallback>HR</AvatarFallback>
                  </Avatar>
                  <span className="pl-5 font-bold">Alumini {i + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </Sidebar>
        <Tabs defaultValue="projects" className="m-2 w-full xl:mx-10">
          <TabsList>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="chatroom">Chatroom</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <Projects />
          </TabsContent>
          <TabsContent value="chatroom" className="">
            <Chat />
          </TabsContent>
          <TabsContent value="events">
            <Events />
          </TabsContent>
        </Tabs>
        <Sidebar className="md:hidden xl:flex">
          <div className="flex flex-col items-center justify-center gap-4">
            <h4 className="pt-10 text-3xl font-bold">Your Profile</h4>
            <div className="py-10">
              <Avatar className="h-24 w-24">
                <AvatarImage src={session?.user.image!} className="h-24 w-24" />
                <AvatarFallback>HR</AvatarFallback>
              </Avatar>
            </div>
            <h5 className="text-2xl font-semibold">Ritik Kuntal</h5>
            <h6 className="">Student</h6>
            <p className="text-2xl">Interests</p>
            <div className="flex flex-wrap gap-2 px-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <span className="rounded-full bg-grey-100 px-2 py-1 text-white">
                  Interest {i + 1}
                </span>
              ))}
            </div>
            <div className="card h-72 w-72"></div>
          </div>
        </Sidebar>
      </main>
    </>
  );
};

export default Dashboard;

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      name: "Project 1",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 2",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 3",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 4",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 4",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 4",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 4",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
    {
      name: "Project 4",
      description: "This is a project",
      github: "https://github.com",
      techStack: ["java", "python", "nextjs", "react"],
    },
  ]);

  const addProject = (
    name: string,
    description: string,
    github: string,
    techStack: string
  ) => {
    const _techStack = techStack.split(",");

    setProjects((prev) => {
      return [...prev, { name, description, github, techStack: _techStack }];
    });
  };

  return (
    <div className="h-[81.5vh]">
      <div className="mx-5 flex items-end justify-between pb-5">
        <h3 className="font-bold">Projects for you.</h3>
        <AddProject projects={projects} addProject={addProject} />
      </div>
      <div className="flex h-[77vh] flex-wrap justify-center gap-4 overflow-y-scroll rounded py-2 shadow-inner">
        {projects.map((project) => (
          <div className="card flex h-72 w-fit flex-col items-center p-5">
            <Avatar className="h-20 w-20">
              <AvatarImage className="h-20 w-20"></AvatarImage>
              <AvatarFallback>HR</AvatarFallback>
            </Avatar>
            <h4 className="py-4 font-bold">{project.name}</h4>
            <Button
              variant="outline"
              className="flex gap-2 text-lg font-semibold dark:bg-white dark:text-black"
            >
              <Icons.gitHub className="h-5 w-5" />
              Github
            </Button>
            <div className="flex gap-2 py-5">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="border-2 border-blue-400 bg-transparent text-blue-500 dark:text-blue-500">Description</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="inline-block  justify-between px-2">
                    <h5 className="text-center font-bold">Description</h5>
                    <p>{project.description}</p>
                  </div>
                </HoverCardContent>
              </HoverCard>
              <Separator orientation="vertical" />
              <HoverCard>
                <HoverCardTrigger asChild>
                  <Button className="border-2 border-blue-400 bg-transparent text-blue-500 dark:text-blue-500">Tech Stack</Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="inline-block  justify-between px-2">
                    <h5 className="text-center font-bold">
                      {project.techStack}
                    </h5>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.techStack.map((i) => (
                        <li className="list-none rounded-full bg-slate-200 px-2 dark:text-black">
                          {i}
                        </li>
                      ))}
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddProject = ({
  projects,
  addProject,
}: {
  projects: any;
  addProject: (
    name: string,
    description: string,
    github: string,
    techStack: string
  ) => void;
}) => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const descriptionRef = React.useRef<HTMLTextAreaElement>(null);
  const techStackRef = React.useRef<HTMLInputElement>(null);
  const githubLinkRef = React.useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    const name = nameRef.current?.value!;
    const description = descriptionRef.current?.value!;
    const techStack = techStackRef.current?.value!;
    const github = githubLinkRef.current?.value!;

    console.log(projects);
    addProject(name, description, github, techStack);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button className='bg-indigo-900 dark:bg-indigo-800 dark:text-white'>
          <Plus/>
          Add Projects
        </Button>{" "}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Project</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              ref={nameRef}
              placeholder="Add Project Name"
              className="col-span-3"
            />
          </div>
          {/* github lonk */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Github Link
            </Label>
            <Input
              id="name"
              ref={githubLinkRef}
              placeholder="Project Link"
              className="col-span-3"
            />
          </div>
          {/* tech stack */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Tech Stack
            </Label>
            <Input
              id="username"
              ref={techStackRef}
              placeholder="Enter the Tech Stack"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Description
            </Label>
            <Textarea
              id="username"
              ref={descriptionRef}
              placeholder="Add Project Description"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">
            Add Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const Chat = () => {
  return (
    <div className="px-1 lg:px-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Chat</h1>
        <Button variant="subtle">
          <span className="font-bold">Create Room</span>
        </Button>
      </div>
      <div className="my-2 grid h-96 grid-cols-2 flex-col gap-x-4 overflow-y-scroll rounded-md p-2 shadow-inner md:flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="card my-2 flex flex-col items-center gap-5 p-4 md:w-full md:flex-row md:py-0 md:px-5"
          >
            <Avatar className="h-10 w-10">
              <AvatarImage className="h-10 w-10"></AvatarImage>
              <AvatarFallback>HR</AvatarFallback>
            </Avatar>
            <div className="flex w-full flex-col items-center justify-between md:flex-row">
              <div className="md:w-full md:pl-5">Development</div>
              <div className="flex w-full flex-col items-center justify-between md:flex-row">
                <div className="flex flex-col items-center py-5">
                  <h4>Name</h4>
                  <h5>Position</h5>
                </div>
                <Button variant="subtle">Join</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h3 className="my-2 text-lg font-bold">Suggestions for you</h3>
      <div className="flex w-[88vw] gap-2 overflow-x-scroll p-2 shadow-inner md:w-[55vw]">
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={1} className="card h-72">
            <div className="w-44"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div>
      <h1>Events</h1>
    </div>
  );
};