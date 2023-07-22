import Projects from "@/backend/projects.controller";
import ProjectModule from "@/components/pages/Projects/Module";
import { Modules, Project } from "@/helpers/interfaces";
import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import { useRouter } from "next/router";

export default function Module({ projects }: { projects: Project[] }) {
  const {
    query: { module },
  } = useRouter();
  return <ProjectModule projects={projects} module={module as Modules} />;
}

export async function getStaticPaths() {
  const routes = await Projects.getPaths();
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
