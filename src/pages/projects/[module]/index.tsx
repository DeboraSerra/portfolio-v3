import Projects from "@/backend/controller/projects.controller";
import ProjectModel from "@/backend/model/projects.model";
import ProjectModule from "@/components/pages/Projects/Module";
import { Modules, Project } from "@/helpers/interfaces";
import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

export default function Module({ projects }: { projects: Project[] }) {
  const {
    query: { module },
  } = useRouter();
  return (
    <>
      <Head>
        <title>Projects {module} - Débora Serra</title>
      </Head>
      <ProjectModule projects={projects} module={module as Modules} />
    </>
  );
}

export async function getStaticPaths() {
  const routes = await ProjectModel.getPaths();
  const paths = routes.map(({ route }) => ({
    params: { module: route },
  }));
  return {
    paths,
    fallback: true,
  };
}

interface Route extends GetStaticPropsContext {
  params: { module: Modules };
}

export const getStaticProps = async ({ params }: Route) => {
  const { module } = params;
  const projects = await Projects.getByModule(module);
  if (!projects || projects.length === 0) return { notFound: true };
  return {
    props: {
      projects,
    },
  };
};
