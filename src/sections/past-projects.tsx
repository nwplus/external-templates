"use client";

import { useCollectFood } from "@/components/food-collection";
import { SELECTED_LAYERS } from "@/components/market-art/selected-projects";
import { ResponsiveScene } from "@/components/responsive-scene";
import { sceneBox, SectionArt } from "@/components/section-art";
import { PAST_PROJECTS } from "@/constants/past-projects";
import { PROJECT_DESKTOP, PROJECT_MOBILE } from "@/constants/section-art";

import { useState } from "react";

import "./market-sections.css";

function ProjectScene({ mobile }: { mobile: boolean }) {
  const collectFood = useCollectFood();
  const [selected, setSelected] = useState<number | null>(null);
  const width = mobile ? 402 : 1512;
  const height = mobile ? 874 : 982;
  const project = selected === null ? null : PAST_PROJECTS[selected];
  const box = (x: number, y: number, w: number, h: number) =>
    sceneBox(x, y, w, h, width, height);
  const detailPositions = mobile
    ? [
        [83, 307, 84, 353, 238, 455],
        [82, 310, 82, 346, 237, 452],
        [81, 311, 82, 351, 237, 471],
      ]
    : [
        [1068, 457, 1069, 503, 1223, 605],
        [1068, 454, 1068, 490, 1223, 596],
        [1067, 447, 1068, 487, 1223, 607],
      ];
  const positions = detailPositions[selected ?? 0];
  const selectedArt =
    selected === 0
      ? [SELECTED_LAYERS[0], SELECTED_LAYERS[1]]
      : selected === 1
        ? [SELECTED_LAYERS[3]]
        : [SELECTED_LAYERS[2]];
  const targets = mobile
    ? [
        [36, 492, 121, 261],
        [234, 661, 119, 92],
        [153, 661, 81, 92],
      ]
    : [
        [149, 273, 249, 288],
        [381, 335, 213, 207],
        [590, 327, 236, 210],
      ];
  return (
    <div
      className={`market-scene project-scene ${mobile ? "market-mobile" : "market-desktop"}`}
      style={{ aspectRatio: `${width}/${height}` }}
    >
      <SectionArt
        layers={
          mobile
            ? PROJECT_MOBILE.filter(
                (layer) => !project || layer.name !== "labels"
              ).map((layer) =>
                project && layer.name === "fruits"
                  ? {
                      ...layer,
                      src: `/assets/past-projects/mobile/fruit-selection-${selected}.svg`,
                    }
                  : layer
              )
            : PROJECT_DESKTOP
        }
        width={width}
        height={height}
      />
      <h2
        className="market-heading"
        style={mobile ? box(61, 34, 263, 51) : box(608, 95, 296, 51)}
      >
        Past Projects
      </h2>
      {targets.map(([x, y, w, h], index) => (
        <button
          key={PAST_PROJECTS[index].name}
          type="button"
          className="fruit-target"
          style={box(x, y, w, h)}
          aria-label={`View ${PAST_PROJECTS[index].name}`}
          aria-pressed={selected === index}
          onClick={() => {
            setSelected(selected === index ? null : index);
            if (index === 1) collectFood("mango-sticky-rice");
          }}
        />
      ))}
      {project && !mobile && (
        <SectionArt layers={selectedArt} width={width} height={height} />
      )}
      <div aria-live="polite" aria-atomic="true">
        {project ? (
          <>
            <h3
              className="project-detail"
              style={box(positions[0], positions[1], 240, 21)}
            >
              {project.name}
            </h3>
            <p
              className="project-detail"
              style={box(
                positions[2],
                positions[3],
                240,
                selected === 0 ? 84 : 105
              )}
            >
              {project.description}
            </p>
            <a
              className="project-detail project-link"
              style={box(positions[4], positions[5], 85, 21)}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn more<span className="sr-only"> about {project.name}</span>
            </a>
          </>
        ) : (
          <p
            className="project-detail project-prompt"
            style={
              mobile ? box(100, 308, 201, 42.289) : box(1068, 496, 240, 42)
            }
          >
            {mobile
              ? "Tap on a fruit to see their corresponding project!"
              : "Select a fruit at their stands to check out a project!"}
          </p>
        )}
      </div>
    </div>
  );
}

/** Interactive fruit selectors with distinct desktop and phone compositions. */
export default function PastProjects() {
  return (
    <section id="past-projects" aria-label="Past Projects">
      <ResponsiveScene
        desktop={<ProjectScene mobile={false} />}
        mobile={<ProjectScene mobile />}
      />
    </section>
  );
}
