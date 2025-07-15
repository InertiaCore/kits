#! /usr/bin/env node
import path from "path";
import * as fs from "fs/promises";
import prompts from "prompts";
import { exec } from "child_process";

(async () => {
  // Get the name
  const { value: projectName } = await prompts({
    type: "text",
    name: "value",
    message: "Enter the project name",
  });

  if (!projectName) {
    console.log("Project name is required.");
    process.exit(1);
  }

  const nameSpace = projectName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");

  const { value: projectType } = await prompts({
    type: "select",
    name: "value",
    message: "Choose a starter kit",
    choices: [
      {
        title: "React + TypeScript",
        value: "react-ts",
      },
      {
        title: "Vue + TypeScript",
        value: "vue-ts",
      },
    ],
    initial: 0,
  });

  const currentDir = process.cwd();

  const projectPath = path.join(currentDir, projectName);

  try {
    // Check if the project already exists
    await fs.access(projectPath);
    console.log(`Directory \`${projectName}\` already exists.`);
    process.exit(1);
  } catch (error) {}

  console.log(`Creating project at \`${projectPath}\`...`);
  // Create the project directory
  await fs.mkdir(projectPath);

  const isWindows = process.platform === "win32";
  let replacement = isWindows ? "file:///" : "file:";

  // Current Script dir
  const scriptDir = await fs.realpath(
    path.dirname(import.meta.url).replace(replacement, "")
  );

  // Copy the project files
  const from = await fs.realpath(
    path.join(scriptDir, `..`, `stubs`, `${projectType}`)
  );
  const to = await fs.realpath(projectPath);
  await fs.cp(from, to, {
    recursive: true,
    filter: (src) => {
      const disAllowedDirs = ["obj", "bin", "build"];
      return !disAllowedDirs.some((dir) => src.includes(dir));
    },
  });

  // Rename and replace the project name
  await fs.rename(
    path.join(projectPath, "ProjectName.csproj"),
    path.join(projectPath, `${nameSpace}.csproj`)
  );

  // Loop through all the files in the project and replace the project name
  const files = await fs.readdir(projectPath, {
    withFileTypes: true,
    recursive: true,
  });

  for (const file of files) {
    if (file.isDirectory()) {
      continue;
    }
    const allowedExtensions = [
      "cs",
      "ts",
      "tsx",
      "json",
      "css",
      "html",
      "cshtml",
    ];
    // Only Change .cs files
    if (!allowedExtensions.includes(file.name.split(".").pop())) {
      continue;
    }
    const content = await fs.readFile(
      path.join(file.parentPath, file.name),
      "utf8"
    );
    await fs.writeFile(
      path.join(file.parentPath, file.name),
      content.replaceAll("ProjectName", nameSpace)
    );
  }

  try {
    // Install the dependencies
    console.log("Installing dependencies...");
    await exec(`npm install`, {
      cwd: await fs.realpath(path.join(projectPath, "ClientApp")),
    });

    console.log("Dependencies installed successfully");
  } catch (error) {
    console.warn("Please install the dependencies manually");
    console.warn("cd ClientApp");
    console.warn("npm install");
  }

  console.log(`Project created successfully at ${projectPath}`);
})();
