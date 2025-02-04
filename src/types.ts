// src/types.ts
export type Translation = {
  about: {
    title: string;
    description: {
      one: string;
      two: string;
      three: string;
    };
  };
  timeline: {
    titles: {
      one: string;
      two: string;
      three: string;
    };
    dates: {
      one: string;
      two: string;
      three: string;
    };
    description: {
      one: string;
      two: string;
      three: string;
    };
  };
  technologies: {
    title: string;
  };
  projects: {
    title: string;
    urls: {
      code: string;
      preview: string;
    };
    description1: string;
    description2: string;
    description3: string;
    description4: string;
  };
};
