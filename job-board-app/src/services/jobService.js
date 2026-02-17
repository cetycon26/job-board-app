import { jobs } from "../data/jobs";

export const getJobs = () =>
  new Promise((resolve) => setTimeout(() => resolve(jobs), 300));

export const getJobById = (id) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(jobs.find((j) => j.id === id)), 300),
  );
