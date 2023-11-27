# Devcontainer Boilerplate for React and NestJS

This repository serves as a boilerplate to illustrate how to develop a full-stack application using React for the frontend and NestJS for the backend, with both parts written in TypeScript. It's designed to be run in Visual Studio Code (VSCode) and GitHub Codespaces, providing a containerized development environment.

## Tech Stack

- **Frontend**: React (with Vite as the frontend build tool)
- **Backend**: NestJS (using NestJS CLI for backend development)
- **Common**: Node.js, TypeScript

## Project Structure

- `react-ui`: The React frontend module, set up with Vite for an optimized development experience.
- `nest-backend`: The NestJS backend module, utilizing NestJS as the development framework.

## Getting Started

### Running in VSCode

1. **Prerequisites**: Ensure you have [Docker](https://www.docker.com/products/docker-desktop) installed and running on your system. Also, install [Visual Studio Code](https://code.visualstudio.com/) with the [Remote - Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

2. **Open in Container**: Clone this repository and open it in VSCode. VSCode will prompt you to reopen the folder in a container. Select 'Reopen in Container' to start the containerized environment.

3. **Develop and Test**: Start developing by launching the `react-ui` module using Vite and the `nest-backend` module using the NestJS CLI.

### Running in GitHub Codespaces

1. **Setup Codespaces**: Navigate to the GitHub repository and click on the 'Code' button. Select 'Open with Codespaces' and then 'New codespace'.

2. **Develop and Test**: Once the codespace is ready, you can start working on both the `react-ui` and `nest-backend` modules within the codespace environment.

## Development Workflow

### React UI Module

1. Navigate to the `react-ui` directory.
2. Run `npm install` to install dependencies.
3. Start the development server using `npx vite`.

### Nest Backend Module

1. Navigate to the `nest-backend` directory.
2. Run `npm install` to install dependencies.
3. Start the NestJS server using `npx start`.

## License

This project is licensed under the [MIT License](LICENSE).
