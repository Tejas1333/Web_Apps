export const tree = [
  {
    id: 1,
    label: "Frontend",
    children: [
      {
        id: 2,
        label: "HTML",
      },
      {
        id: 3,
        label: "CSS",
      },
      {
        id: 4,
        label: "JavaScript",
      },
      {
        id: 5,
        label: "React",
        children: [
          {
            id: 6,
            label: "Hooks",
            children: [
              {
                id: 13,
                label: "useState",
              },
              {
                id: 14,
                label: "useEffect",
              },
              {
                id: 15,
                label: "useMemo",
              },
            ],
          },
          {
            id: 7,
            label: "Context API",
          },
          {
            id: 8,
            label: "Redux",
          },
          {
            id: 16,
            label: "Next.js",
            children: [
              {
                id: 17,
                label: "App Router",
              },
              {
                id: 18,
                label: "Server Components",
              },
              {
                id: 19,
                label: "API Routes",
              },
            ],
          },
        ],
      },
      {
        id: 20,
        label: "Tailwind CSS",
      },
    ],
  },

  {
    id: 21,
    label: "Backend",
    children: [
      {
        id: 22,
        label: "Node.js",
      },
      {
        id: 23,
        label: "Express.js",
      },
      {
        id: 24,
        label: "MongoDB",
        children: [
          {
            id: 25,
            label: "Mongoose",
          },
          {
            id: 26,
            label: "Aggregation",
          },
        ],
      },
      {
        id: 27,
        label: "Authentication",
        children: [
          {
            id: 28,
            label: "JWT",
          },
          {
            id: 29,
            label: "OAuth",
          },
        ],
      },
    ],
  },

  {
    id: 30,
    label: "Data Structures",
    children: [
      {
        id: 31,
        label: "Arrays",
      },
      {
        id: 32,
        label: "Linked List",
      },
      {
        id: 33,
        label: "Stack",
      },
      {
        id: 34,
        label: "Queue",
      },
      {
        id: 35,
        label: "Trees",
        children: [
          {
            id: 36,
            label: "Binary Tree",
          },
          {
            id: 37,
            label: "BST",
          },
          {
            id: 38,
            label: "Trie",
          },
        ],
      },
      {
        id: 39,
        label: "Graphs",
      },
    ],
  },

  {
    id: 40,
    label: "System Design",
    children: [
      {
        id: 41,
        label: "Load Balancer",
      },
      {
        id: 42,
        label: "Caching",
        children: [
          {
            id: 43,
            label: "Redis",
          },
          {
            id: 44,
            label: "CDN",
          },
        ],
      },
      {
        id: 45,
        label: "Database Scaling",
      },
    ],
  },

  {
    id: 46,
    label: "DevOps",
    children: [
      {
        id: 47,
        label: "Docker",
      },
      {
        id: 48,
        label: "Kubernetes",
      },
      {
        id: 49,
        label: "CI/CD",
      },
      {
        id: 50,
        label: "AWS",
        children: [
          {
            id: 51,
            label: "EC2",
          },
          {
            id: 52,
            label: "S3",
          },
          {
            id: 53,
            label: "Lambda",
          },
        ],
      },
    ],
  },
];