// an interface is like a blueprint that defines the structure an object or a function should have, specifying the names and types of its parts.

// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface user {
  name: string;
  readonly password: number;
  userID: number;
  //   startTrail: () => string;
  startTrail(): string;
  getCoupon(couponname: string): number;
}

// ayush.password = 26976; // readonly

interface user {
  githubToken: string;
}

interface Admin extends user {
  role: "admin" | "customer" | "learner";
}

const ayush: Admin = {
  name: "ayush",
  password: 2667,
  userID: 367,
  role: "admin",
  startTrail: () => {
    return "traail started";
  },
  getCoupon: (name: "ayush") => {
    return 30;
  },

  githubToken: "25t9hggt",
};

interface Animal {
  species: string;
}

interface AnimalName extends Animal {
  name: string;
  ID: number;
}

const getAnimal: AnimalName = { species: "HomoSepian", name: "Ayush", ID: 86 };

console.log(getAnimal);
