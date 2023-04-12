import { render, within } from "@testing-library/react-native";
import { kNumFormatter } from "../utils";
import RepositoryListContainer from "./RepositoryListContainer";
import React from "react";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const screen = render(
        <RepositoryListContainer repositories={repositories} />
      );
      const fullName = screen.getAllByTestId("fullName");
      const description = screen.getAllByTestId("description");
      const language = screen.getAllByTestId("language");
      const statsBar = screen.getAllByTestId("statsBar");
      repositories.edges.forEach((rep, i) => {
        expect(fullName[i]).toHaveTextContent(rep.node.fullName);
        expect(description[i]).toHaveTextContent(rep.node.description);
        expect(language[i]).toHaveTextContent(rep.node.language);
        expect(statsBar[i].children[1]).toHaveTextContent(
          `${kNumFormatter(rep.node.forksCount)}forks`
        );
        expect(statsBar[i].children[0]).toHaveTextContent(
          `${kNumFormatter(rep.node.stargazersCount)}stars`
        );
        expect(statsBar[i].children[3]).toHaveTextContent(
          `${kNumFormatter(rep.node.ratingAverage)}rating`
        );
        expect(statsBar[i].children[2]).toHaveTextContent(
          `${kNumFormatter(rep.node.reviewCount)}review`
        );
      });
    });
  });
});
