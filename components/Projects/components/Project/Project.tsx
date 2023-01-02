import { NextPage } from "next";
import { usePageLoading } from "../../../../helpers/usePageLoading";
import { IoChevronBack } from "react-icons/io5";
import { Project as IProject } from "../../../../helpers/interfaces";

import * as S from "./Project.styled";
import { useRouter } from "next/router";
import Image from "next/image";

interface Props {
  project: IProject;
}

const Project: NextPage<Props> = ({ project }) => {
  const { name, description, image, repository } = project;
  const { isLoading } = usePageLoading();
  const router = useRouter();

  if (isLoading) return <p>Loading...</p>;

  return (
    <S.Main>
      <div onClick={router.back} className="project__back-btn">
        <IoChevronBack className="project__back-icon" />
        Go back
      </div>
      <Image
        src={image}
        alt={name}
        width={500}
        height={500}
        className="project__img"
      />
      <div className="project__right">
        <h2 className="project__title">{name}</h2>
        <div className="project__description">
          {description.split(". ").map((p, i, arr) => (
            <p key={i}>{i === arr.length - 1? p : `${p}.`}</p>
          ))}
        </div>
        <a
          href={repository}
          target="_blank"
          rel="noreferrer"
          className="project__link"
        >
          {repository.includes("github.com")
            ? "See the repository"
            : "See it in action"}
        </a>
      </div>
    </S.Main>
  );
};

export default Project;
