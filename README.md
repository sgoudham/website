<h1 align="center">
   My Personal Website
</h1>

<h3 align="center">
   <a href="https://goudham.com"><img src="assets/me-circle.png" width="150px" alt=""/></a><br>
   <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/bbc6efd2096b8cfa82d00f8ad1099b1b2b34fc8f/assets/misc/transparent.png" height="30" width="0px"/>
   <a href="https://goudham.com">✨ https://goudham.com ✨</a>
   <img src="https://raw.githubusercontent.com/catppuccin/catppuccin/bbc6efd2096b8cfa82d00f8ad1099b1b2b34fc8f/assets/misc/transparent.png" height="30" width="0px"/>
</h3>

Believe it or not, this is what I'd consider to be my first "project" involving modern front-end technologies. I don't
have much experience with the tech stack that I've chosen here or even front-end development in general.

I hope this maybe, just maybe inspires someone else to just throw themselves into a project and have some fun along the
way :D

Also, *technically*, this is a **work-in-progress** but shh...

## Dependencies

- NodeJS 18
- Yarn
- **(Optional)** Container Orchestration Tool (e.g Docker)

If you're a ~~filthy~~ [Nix/NixOS](https://nixos.org/) user, you can take advantage of the [flake.nix](flake.nix) by
running `nix develop` to automatically get a shell with all the required dependencies.

## Building

1. Install the required dependencies via `yarn`

   ```shell
   yarn install
   ```

2. Run the development server

   ```shell
   yarn dev
   ```

   If you're a containers type of person, you can instead run the server via the
   provided [Dockerfile](Dockerfile):

   ```shell
   docker build -t website .
   docker run --rm -it -p 3000:3000 --name website website:latest
   ```

## Deployment

This is mostly for me when I revisit this godforsaken project in 7 months having forgotten everything :P

This repository has a [publish.yml](.github/workflows/publish.yml) action which automatically builds
the [Dockerfile](Dockerfile) and pushes
to [Docker Hub](https://hub.docker.com/repository/docker/sgoudham/website/general) with the latest updates. This image
is then automatically retrieved by [Watchtower](https://containrrr.dev/watchtower/) on my server which automatically
replaces the production docker container, therefore deploying the new updates to production. (In the future, I may
switch this workflow to only use [Portainer](https://www.portainer.io/).)

### Manual Commands

```shell
docker tag website:latest sgoudham/website:latest
docker push sgoudham/website:latest
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE)
