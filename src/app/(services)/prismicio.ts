import * as prismic from "@prismicio/client";
import sm from "../../../sm.json";

export const repositoryName = prismic.getRepositoryName(sm.apiEndpoint);

export const createClient = () => {
  return prismic.createClient(sm.apiEndpoint);
};