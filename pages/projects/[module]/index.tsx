import Head from "next/head";
import Projects from "../../../components/Projects/Projects";
import { default as Controller } from "../../../backend/projects.controller";
import { Project, ProjectsPaths, Modules } from "../../../helpers/interfaces";
import { GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";

interface Props {
  projects: Project[];
  module: Modules;
}

interface QueryKeys extends ParsedUrlQuery {
  module: Modules;
}

const ProjectsPage: NextPage<Props> = ({ projects, module }) => {
  return (
    <main>
      <Head>
        <title>Débora Serra - Portfolio | Projects</title>
      </Head>
      <Projects projects={projects} module={module} />
    </main>
  );
}

export default ProjectsPage;

export const getStaticPaths = async () => {
  const result = await Controller.getPaths();
  const paths = (result as ProjectsPaths[]).map(({ route }) => ({
    params: { module: `/${route}` },
  }));
  return {
    fallback: 'blocking',
    paths,
  }
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { module } = context.params as QueryKeys;
  const allProjects = await Controller.getAll();
  const projects = allProjects[module];
  if (!module || !projects) return { redirect: '/' }
  return {
    props: {
      projects,
      module,
    },
    revalidate: 3600,
  }
};
