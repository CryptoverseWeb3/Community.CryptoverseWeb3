/*Two hardcoded job samples while we don't have a backend */
import img1 from "../../src/assets/images/bitcoin.png";
import img2 from "../../src/assets/images/blockchain.png";
import img3 from "../../src/assets/images/nft.png";

export const blogExamples = [
  {
    id: 1,
    title: "What is Docker?",
    author: "Thecyberworld",
    date: "Aug 27, 2022",
    content:
      "A platform for building, running, and shipping applications in a consistent manner.\n\nIf your application works on the development machine, in the same way it will work on other machines. \n\n  It works on my machine! most of the time our applications do not work on the other machines. Reasons: \n\n 1. One or more files missing\n\n \t2. Software version mismatch \n\n 3. node14.1 - on your machine \n\n 4. node9 - on another machine \n\n 5. Different configuration settings \n\n Here docker comes to rescue you.If your application works on your machine, definitely it will run on another machine.\n\n This is the beauty of docker, its isolated environment allows multiple applications to use different versions of some software side by side\n\n 1. one application using Node 14\n\n 2. second application using Node 9\n\n 3. Both applications can run on the same machine side by side without messing with each other.\n\n      So this is how docker allows us to consistently run our applications on different machines.\n\n      One more benefit! When we are done with this second application and don't want to work on it anymore, we can remove the application and all its dependency in one go...\n\n Without docker, as we work on projects, our development machines get cluttered with so many libraries and tools used by different applications, and after a while, we don't know if we can remove one or more of these tools because we are always afraid that we can mess up with some applications\n\n      With docker, we don't have to worry about this, because each application run with its dependencies inside an isolated environment we can safely remove our application with all its dependencies to clean up our machine.\n\n isn't that great?\n\n     So, In a nutshell, Docker helps us consistently build, run and ship applications.",
    tags: ["Docker", "Devops"],
  },
  {
    id: 2,
    title: "What is Kubernetes?",
    author: "Thecyberworld",
    date: "Aug 27, 2022",
    content:
      "A platform for building, running, and shipping applications in a consistent manner.\n\nIf your application works on the development machine, in the same way it will work on other machines. \n\n  It works on my machine! most of the time our applications do not work on the other machines. Reasons: \n\n 1. One or more files missing\n\n \t2. Software version mismatch \n\n 3. node14.1 - on your machine \n\n 4. node9 - on another machine \n\n 5. Different configuration settings \n\n Here docker comes to rescue you.If your application works on your machine, definitely it will run on another machine.\n\n This is the beauty of docker, its isolated environment allows multiple applications to use different versions of some software side by side\n\n 1. one application using Node 14\n\n 2. second application using Node 9\n\n 3. Both applications can run on the same machine side by side without messing with each other.\n\n      So this is how docker allows us to consistently run our applications on different machines.\n\n      One more benefit! When we are done with this second application and don't want to work on it anymore, we can remove the application and all its dependency in one go...\n\n Without docker, as we work on projects, our development machines get cluttered with so many libraries and tools used by different applications, and after a while, we don't know if we can remove one or more of these tools because we are always afraid that we can mess up with some applications\n\n      With docker, we don't have to worry about this, because each application run with its dependencies inside an isolated environment we can safely remove our application with all its dependencies to clean up our machine.\n\n isn't that great?\n\n     So, In a nutshell, Docker helps us consistently build, run and ship applications.",
    tags: ["Kubernetes", "Devops"],
  },
];
