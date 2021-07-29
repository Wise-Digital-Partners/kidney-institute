export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "6102e0ccfe905145eacfbef0",
                  title: "Sanity Studio",
                  name: "kidney-institute-studio",
                  apiId: "99ca5118-dd2a-4623-b3f6-4bb57b0af9b3",
                },
                {
                  buildHookId: "6102e0cc61c271462a50185b",
                  title: "Blog Website",
                  name: "kidney-institute",
                  apiId: "393fe909-bf0b-4916-b7df-ac71f0f04f40",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/hamletavetisian/kidney-institute",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://kidney-institute.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
