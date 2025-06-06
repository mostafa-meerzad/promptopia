import {
  Box,
  Button,
  Card,
  CardBody,
  CardRoot,
  Flex,
  Grid,
  SimpleGrid,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import PromptCard from "./PromptCard";
import { prisma } from "@/lib/prisma";
import { section } from "framer-motion/client";

interface Prompt {
  prompts: { prompt: string; id: number }[];
}

const PromptList = async () => {
  
};

export default PromptList;
