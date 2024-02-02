"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Image from "next/image";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

interface Props {
  title: string;
  body: string;
  image: string;
  links: { GitHub: string; Demo: string };
}

export function ProjectCard({ title, body, image, links }: Props) {
  return (
    <Card className="mt-6 w-96 bg-gradient-to-r from-[#c0ceaa] to-lime-300">
      <CardHeader color="blue-gray" className="relative h-56">
        <Image src={image} alt="card-image" layout="fill" />
      </CardHeader>
      <CardBody className="overflow-y-auto scrollbar-hide h-44">
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <Typography>{body}</Typography>
      </CardBody>
      <CardFooter className="flex justify-start pt-0">
        <a href={links.GitHub} target="_blank">
          <Button className="flex mt-2 mr-2 hover:text-lime-300">
            <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        </a>
        <a href={links.Demo} target="_blank">
          <Button className="flex mt-2 mr-2 hover:text-lime-300">
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}
