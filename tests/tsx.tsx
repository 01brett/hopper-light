import * as React from "react";

type cool = {
  name: string;
  number: number;
};

const coolArr: cool[] = [
  {
    name: "Bert",
    number: 133,
  },
  {
    name: "Ernie",
    number: 101,
  },
];

interface Shoe {
  size: number;
  name: string;
}

interface Food {
  type: "fruit" | "vegetable";
  name: string;
}

function generateSome<T>(howMany: number): T {
  return {
    size: 10,
    name: "wes",
  };
}

const unusedVariable;

type CoolProps = {
  title: string;
  children: React.ReactNode;
};

export default async function unreachableCode(): Promise<number> {
  return 10;
}

export function greatComponent({ title, children }: CoolProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

const myShoe = generateSome<Shoe>(10);

const banana: Food = {
  type: "fruit",
  name: "Banana",
};
