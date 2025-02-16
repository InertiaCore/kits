#! /usr/bin/env node
import path from "path";
import * as fs from "fs/promises";
import prompts from "prompts";
import { execSync } from "child_process";

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

  const { value: projectType } = await prompts({
    type: "select",
    name: "value",
    message: "Choose a starter kit",
    choices: [
      {
        title: "React + TypeScript",
        value: "react-ts",
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

  // Create the project directory
  await fs.mkdir(projectPath);

  // Current Script dir
  const scriptDir = path.dirname(import.meta.url).replace("file://", "");

  // Copy the project files
  await fs.cp(path.join(scriptDir, `../stubs/${projectType}`), projectPath, {
    recursive: true,
    filter: (src) => {
      const disAllowedDirs = ["obj", "bin", "node_modules", "build"];
      return !disAllowedDirs.some((dir) => src.includes(dir));
    },
  });

  // Rename and replace the project name
  await fs.rename(
    path.join(projectPath, "ProjectName.csproj"),
    path.join(projectPath, `${projectName}.csproj`)
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
      content.replaceAll("ProjectName", projectName)
    );
  }

  // Install the dependencies
  execSync(`npm install`, { cwd: path.join(projectPath, "ClientApp") });

  console.log(`Project created successfully at ${projectPath}`);
})();
