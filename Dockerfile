FROM denoland/deno:latest

WORKDIR /app

COPY . .

ENTRYPOINT [ "deno", "run", "--allow-net", "./main.ts" ]
