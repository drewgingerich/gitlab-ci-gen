interface Job {
  name: string;
  image: string;
  script: string[];
  dependencies: Job[];
}

interface PushEntrypoint {
  source: "push";
  defaultBranch: boolean;
  featureBranch: boolean;
  environment: Record<string, string>;
}

interface WebEntrypoint {
  source: "web";
  environment: Record<string, string>;
  selectableEnvironment: Record<
    string,
    { value: string; options: string[]; description: string }
  >;
}

interface Workflow {
  jobs: {
    job: Job;
    dependsOn: Job[];
  };
}
