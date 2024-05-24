# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app

# install dependencies into temp directory
# this will cache them and speed up future builds
FROM base AS install
RUN mkdir -p /temp/dev
COPY package.json /temp/dev/
RUN cd /temp/dev && bun install --frozen-lockfile

# install with --production (exclude devDependencies)
RUN mkdir -p /temp/prod
COPY package.json /temp/prod/
RUN cd /temp/prod && bun install --frozen-lockfile --production

# copy node_modules from temp directory
# then copy all (non-ignored) project files into the image
FROM base AS prerelease
COPY --from=install /temp/dev/node_modules node_modules
COPY . .

# [optional] tests & build
ENV NODE_ENV=production
ENV MONGODB_URL=mongodb+srv://gallis:gallis123@cluster0.5lrik.mongodb.net/comptamat?retryWrites=true&w=majority
ENV JWT_SECRET=d42e255f54ecaf88afa09f1cc4dec54c
RUN bun run build
# run the app
EXPOSE 3000/tcp
ENTRYPOINT [ "bun", "run", "dist/main.js" ]