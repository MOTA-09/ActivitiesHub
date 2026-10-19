# Graph Report - ActivitiesHub (2026-10-19)

## Corpus Check

- 102 files · ~125,499 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 13 file(s) not represented in the graph (top: (none) 11, .nswag 1, .css 1)

## Summary

- 460 nodes · 569 edges · 44 communities (28 shown, 16 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Graph Freshness

- Built from commit: `00b60a8e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)

- package.json
- Command
- EventsHub.UnitTests.csproj
- EventsHub.Persistence
- .GetEventsAsync
- AppDbContextModelSnapshot
- @mui/material
- EventsControllerTests.cs
- compilerOptions
- devDependencies
- compilerOptions
- Events Request Collection Folder
- Graphify Knowledge Graph Pipeline
- https
- EventsHub.OpenApi
- Part 2: .NET only (Husky.Net)
- WeatherForecast
- Event
- EventsHub System Architecture
- Local API base URL
- EventsHub web frontend
- tsconfig.json
- index.d.ts
- Architecture and README Documentation Workflow
- Software Testing Fundamentals
- Git in Practice Guide
- Graphify and OpenSpec Installation Guide
- OpenAPI Document and Typed Client Setup
- EventsHub Project Identity
- Local API base URL
- EventsHub integration test collection
- WeatherForecast request folder
- Events request folder
- EventsHub integration tests collection
- WeatherForecast request folder
- Purple Vite Lightning Favicon
- Social Media Icon Sprite
- IRequest
- GlobalTestSetup
- Handler
- Handler
- AppDbContext
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- Part 3: npm only, `package.json` in the repo root (Husky v9)

## God Nodes (most connected - your core abstractions)

1. `Event` - 25 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `Part 1: .NET + npm in the same repo (e.g. EventsHub)` - 14 edges
5. `Part 2: .NET only (Husky.Net)` - 14 edges
6. `Part 3: npm only, `package.json` in the repo root (Husky v9)` - 14 edges
7. `Part 4: npm only, `package.json` in a subfolder (Husky v9)` - 13 edges
8. `AppDbContext` - 13 edges
9. `EventsHub.Persistence` - 11 edges
10. `EventsHub.Domain` - 9 edges

## Surprising Connections (you probably didn't know these)

- `EventsHub API` --semantically_similar_to--> `Get Event HTTP Request` [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/Events/Events - Get - 200.yml
- `EventsHub API` --semantically_similar_to--> `Weather Forecast HTTP Request` [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/WeatherForecast/Weather Forecast - List 200.yml
- `GlobalTestSetup` --references--> `AppDbContext` [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `Project Graphify Instructions` --references--> `Graphify Knowledge Graph Pipeline` [EXTRACTED]
  AGENTS.md → .codex/skills/graphify/SKILL.md
- `EventsControllerTests` --references--> `EventsController` [EXTRACTED]
  tests/EventsHub.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.Api/Controllers/EventsController.cs

## Import Cycles

- None detected.

## Communities (44 total, 16 thin omitted)

### Community 0 - "package.json"

Cohesion: 0.05
Nodes (41): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+33 more)

### Community 1 - "Command"

Cohesion: 0.18
Nodes (12): Command, IMapper, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task (+4 more)

### Community 2 - "EventsHub.UnitTests.csproj"

Cohesion: 0.07
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 3 - "EventsHub.Persistence"

Cohesion: 0.09
Nodes (23): automapper, EventsHub.Domain, EventsHub.Persistence.Migrations, EventsHub.Application.Events.Queries, EventsHub.UnitTests, EventsHub.Persistence, EventsHub.Application.Events.Comands, EventsHub.Application.Core (+15 more)

### Community 4 - ".GetEventsAsync"

Cohesion: 0.12
Nodes (19): ActionResult, ControllerBase, HttpDelete, HttpPost, HttpPut, IMediator, IReadOnlyList, NotFoundObjectResult (+11 more)

### Community 5 - "AppDbContextModelSnapshot"

Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 6 - "@mui/material"

Cohesion: 0.14
Nodes (17): @mui/icons-material, @mui/material, react, App(), NavBar(), Props, web_src_app_layout_styles, ActivityCard() (+9 more)

### Community 7 - "EventsControllerTests.cs"

Cohesion: 0.15
Nodes (10): EventsHub.Api.Controllers, EventsHub.UnitTests.Controllers, IEnumerable, microsoft_aspnetcore_mvc, newtonsoft_json_serialization, HttpGet, WeatherForecastController, system_reflection (+2 more)

### Community 8 - "compilerOptions"

Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "devDependencies"

Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 10 - "compilerOptions"

Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 11 - "Events Request Collection Folder"

Cohesion: 0.18
Nodes (13): EventsHub API, EventsHub.Application Placeholder, EventsHub Domain and Event Entity, EventsHub OpenAPI Host and Client Generation, EventsHub Persistence Layer, Create Event HTTP Request, Delete Event HTTP Request, Edit Event HTTP Request (+5 more)

### Community 12 - "Graphify Knowledge Graph Pipeline"

Cohesion: 0.20
Nodes (10): Project Graphify Instructions, Graphify Knowledge Graph Pipeline, URL Ingestion and Folder Watching, Graph Exports and Token Benchmark, Semantic Extraction Schema, GitHub Clone and Cross-Repository Merge, Commit Hook and CLAUDE.md Integration, Graph Query, Path, and Explain Operations (+2 more)

### Community 13 - "https"

Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 14 - "EventsHub.OpenApi"

Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 15 - "Part 2: .NET only (Husky.Net)"

Cohesion: 0.06
Nodes (31): How to use this guide, Installing Husky in a Project: .NET and npm, Optional: add Prettier (code formatting), Part 2: .NET only (Husky.Net), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Skipping hooks (use sparingly), Step 10: Commit the Husky files (+23 more)

### Community 16 - "WeatherForecast"

Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Event"

Cohesion: 0.15
Nodes (12): DateTime, Event, Category, City, Date, Description, Id, IsCancelled (+4 more)

### Community 18 - "EventsHub System Architecture"

Cohesion: 0.70
Nodes (5): EventsHub Developer Guide, EventsHub System Architecture, Clean Architecture Fundamentals, CQRS Fundamentals, Entity Framework Core DbContext Fundamentals

### Community 19 - "Local API base URL"

Cohesion: 0.40
Nodes (5): Local API base URL, Get event success request, Get event not found request, List events request, List weather forecast request

### Community 20 - "EventsHub web frontend"

Cohesion: 0.40
Nodes (5): Events Hub HTML entry document, EventsHub frontend and backend architecture, EventsHub web frontend, Frontend HTTP API connection, Vite React TypeScript stack

### Community 37 - "IRequest"

Cohesion: 0.20
Nodes (10): IRequest, Command, Event, CreateEvents, Command, Id, DeleteEvent, Command (+2 more)

### Community 38 - "GlobalTestSetup"

Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 39 - "Handler"

Cohesion: 0.32
Nodes (7): ILogger, List, CancellationToken, Task, GetEventList, Handler, Query

### Community 40 - "Handler"

Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 41 - "AppDbContext"

Cohesion: 0.40
Nodes (5): DbContext, DbContextOptions, DbSet, AppDbContext, Events

### Community 42 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"

Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky.Net as a local tool, Step 3: Install the Git hooks (+7 more)

### Community 43 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"

Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

## Knowledge Gaps

- **236 isolated node(s):** `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites`, `Step 2: Install Husky.Net as a local tool`, `Step 3: Install the Git hooks` (+231 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 283 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **16 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions

_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Event` to `.GetEventsAsync`, `IRequest`, `Handler`, `Handler`, `AppDbContext`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `AppDbContext` to `Command`, `EventsHub.Persistence`, `GlobalTestSetup`, `Handler`, `Handler`, `Event`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **What connects `How to use this guide`, `Where to run the commands (read this once)`, `Step 1: Check prerequisites` to the rest of the system?**
  _236 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.05353535353535353 - nodes in this community are weakly interconnected._
- **Should `EventsHub.UnitTests.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.07386363636363637 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Persistence` be split into smaller, more focused modules?**
  _Cohesion score 0.08846153846153847 - nodes in this community are weakly interconnected._
- **Should `.GetEventsAsync` be split into smaller, more focused modules?**
  _Cohesion score 0.12433862433862433 - nodes in this community are weakly interconnected._
