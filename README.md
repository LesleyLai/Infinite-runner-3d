# Tower of Socerer 3d

## Setup

Run the following commands from within the repository's root folder to setup the application:

1. `yarn install`

## Running

Run the following commands from within the repository's root folder to run the project using `webpack-dev-server`:

1. `yarn start`

## Build

Run the following commands from within the repository's root folder to build the project using `webpack`:

1. `yarn build`

## Structure

- `src/` *source code folder*

    - `index.ts` *application entry point*

    - `glsl.d.ts` *typescript definition file to resolve .glsl files*

    - `Materials/` *folder for custom materials/shaders*

        - `SampleMaterial.ts` *sample custom material*

        - `Shaders/` *folder containing GLSL shader code*

            - `Sample/` *folder containing sample shader* 

                - `sample.fragment.glsl` *sample fragment shader*

                - `sample.vertex.glsl` *sample vertex shader*

- `public` *folder containing static assets*

    - `index.html` *HTML entry point*

- `dist` *folder containing output of build process*
