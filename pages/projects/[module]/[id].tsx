import { GetStaticPathsContext, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { ParsedUrlQuery } from "querystring";
import { default as Controller } from "../../../backend/projects.controller";
import Project from "../../../components/Projects/components/Project/Project";
import { Modules, Project as IProject, ProjectArrays, ProjectsPaths } from "../../../helpers/interfaces";

interface Props {
  project: IProject;
  module: Modules;
}

interface QueryKeys extends ParsedUrlQuery {
  module: Modules;
  projectName: string;
}

const  ProjectPage: NextPage<Props> = ({ project }) => {
  return (
    <main>
      <Head>
        <title>Débora Serra - Portfolio | Project Me</title>
      </Head>
      <Project project={ project } />
    </main>
  );
}

export default ProjectPage

export const getStaticPaths = async () => {
  const result = await Controller.getAll();
  const routes = Object.keys(result);
  const paths = [];
  for (let i = 0; i < routes.length; i += 1) {
    for (let x = 0; x < result[routes[i]].length; x += 1) {
      const path = { params: { module: '', id: '' } };
      path.params.module = routes[i];
      path.params.id = result[routes[i]][x].id.toString();
      paths.push(path);
    }
  }
  return {
    fallback: 'blocking',
    paths,
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { module, id } = context.params as QueryKeys;
  if (!module || !id) return { redirect: '/' }
  const [project] = await Controller.getOne(+id, module);
  if (!project) return { redirect: '/' }
  return {
    props: {
      project: project,
      module,
    },
    revalidate: 3600,
  }
};
