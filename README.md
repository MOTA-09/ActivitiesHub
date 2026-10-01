# EventsHub

EventsHub is an events listing application with a React frontend and a .NET Web API. The apps are built separately; at runtime, the browser requests event data from the API over HTTP.

## Run locally

Start the API from the repository root:

```powershell
dotnet run --project src/EventsHub.Api
```

In another terminal, start the frontend:

```powershell
cd web
npm install
npm run dev
```

The frontend dev server runs at `https://localhost:3000` and calls the API at `https://localhost:5001`. The API applies EF Core migrations and seeds its SQLite database at startup.

## Repository map

- [`web/`](web/README.md) | React, Vite, and MUI frontend.
- [`src/EventsHub.Api/`](src/EventsHub.Api/README.md) | ASP.NET Core HTTP API and runtime host.
- [`src/EventsHub.Domain/`](src/EventsHub.Domain/README.md) | shared `Event` entity.
- [`src/EventsHub.Persistence/`](src/EventsHub.Persistence/README.md) | SQLite access, migrations, and seed data.
- [`src/EventsHub.Application/`](src/EventsHub.Application/README.md) | currently an empty placeholder layer.
- [`src/EventsHub.OpenApi/`](src/EventsHub.OpenApi/README.md) | separate host for OpenAPI generation and typed-client codegen; not part of the runtime app.
- [`docs/Architecture.md`](docs/Architecture.md) | component relationships and request flow.

## Build and checks

Build the backend solution with `dotnet build EventsHub.slnx`. In `web/`, use `npm run build` to type-check and build the frontend, or `npm run lint` to run ESLint. Backend unit tests are in `tests/EventsHub.UnitTests`; HTTP integration requests are maintained as a Bruno collection in `tests/EventsHub.IntegrationTests`.
