# Graph Report - ActivitiesHub  (2026-11-17)

## Corpus Check
- 129 files · ~130,433 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 17 file(s) not represented in the graph (top: (none) 13, .scss 2, .nswag 1)

## Summary
- 716 nodes · 1009 edges · 74 communities (33 shown, 41 thin omitted)
- Extraction: 96% EXTRACTED · 4% INFERRED · 0% AMBIGUOUS · INFERRED: 37 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `c87d5a7b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Event
- EventsHub.Api.UnitTests.csproj
- EventsHub.Persistence
- EventsControllerTests
- AppDbContextModelSnapshot
- @mui/material
- dependencies
- compilerOptions
- devDependencies
- compilerOptions
- EventsHub System Architecture
- Graphify Knowledge Graph Pipeline
- https
- EventsHub.OpenApi
- Part 1: .NET + npm in the same repo (e.g. EventsHub)
- WeatherForecast
- .agents/skills/openspec-explore/SKILL.md
- .claude/skills/openspec-explore/SKILL.md
- Local API base URL
- opsx-explore.md
- tsconfig.json
- index.d.ts
- Architecture and README Documentation Workflow
- Software Testing Fundamentals
- Git in Practice Guide
- Graphify and OpenSpec Installation Guide
- OpenAPI Document and Typed Client Setup
- explore.md
- Local API base URL
- EventsHub integration test collection
- WeatherForecast request folder
- Events request folder
- EventsHub integration tests collection
- WeatherForecast request folder
- Purple Vite Lightning Favicon
- Social Media Icon Sprite
- task-runner.json
- commit-msg
- pre-commit
- HandlerTestBase
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- web_src_index
- TypeMap
- Mapper
- system_runtime_compilerservices
- GlobalTestSetup
- EventsHubBaseController
- eslint.config.js
- main.tsx
- vite.config.ts
- scripts
- lint-staged
- automapper

## God Nodes (most connected - your core abstractions)
1. `Event` - 29 edges
2. `TypeMap` - 24 edges
3. `EventsControllerTests` - 18 edges
4. `compilerOptions` - 18 edges
5. `AppDbContext` - 15 edges
6. `@mui/material` - 15 edges
7. `compilerOptions` - 15 edges
8. `Part 1: .NET + npm in the same repo (e.g. EventsHub)` - 14 edges
9. `Part 2: .NET only (Husky.Net)` - 14 edges
10. `Part 3: npm only, `package.json` in the repo root (Husky v9)` - 14 edges

## Surprising Connections (you probably didn't know these)
- `EventsHub API` --semantically_similar_to--> `Get Event HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/Events/Events - Get - 200.yml
- `EventsHub API` --semantically_similar_to--> `Weather Forecast HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/WeatherForecast/Weather Forecast - List 200.yml
- `EditEventTests` --references--> `IMapper`  [EXTRACTED]
  tests/EventsHub.Application.UnitTests/Events/EditEventTests.cs → src/EventsHub.Application/Core/Mapping/IMapper.cs
- `EventsControllerTests` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.Api.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.Persistence/AppDbContext.cs
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.Api.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs

## Import Cycles
- None detected.

## Communities (74 total, 41 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.11
Nodes (17): @babel/core, babel-plugin-react-compiler, date-fns, @emotion/react, @emotion/styled, lint-staged, prettier, sass-embedded (+9 more)

### Community 1 - "Event"
Cohesion: 0.05
Nodes (50): Command, DbContext, DbContextOptions, DbSet, ILogger, IRequest, IRequestHandler, Query (+42 more)

### Community 2 - "EventsHub.Api.UnitTests.csproj"
Cohesion: 0.06
Nodes (33): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4) (+25 more)

### Community 3 - "EventsHub.Persistence"
Cohesion: 0.06
Nodes (33): EventsHub.Domain, EventsHub.Application.Core.Mapping, EventsHub.Persistence.Migrations, EventsHub.Application.UnitTests.Events, EventsHub.Application.Events.Queries, EventsHub.Api.UnitTests.Controllers, EventsHub.Api.Controllers, EventsHub.Persistence (+25 more)

### Community 4 - "EventsControllerTests"
Cohesion: 0.12
Nodes (20): ActionResult, HttpDelete, HttpPost, HttpPut, NoContentResult, OkResult, ProducesResponseType, ServiceProvider (+12 more)

### Community 5 - "AppDbContextModelSnapshot"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 6 - "@mui/material"
Cohesion: 0.11
Nodes (28): axios, falling-leaves, @mui/icons-material, @mui/material, react-calendar, react-router, @tanstack/react-query, App() (+20 more)

### Community 7 - "dependencies"
Cohesion: 0.12
Nodes (16): dependencies, axios, date-fns, @emotion/react, @emotion/styled, falling-leaves, @fontsource/roboto, @mui/icons-material (+8 more)

### Community 8 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "devDependencies"
Cohesion: 0.10
Nodes (21): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh (+13 more)

### Community 10 - "compilerOptions"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 11 - "EventsHub System Architecture"
Cohesion: 0.14
Nodes (24): EventsHub Developer Guide, EventsHub System Architecture, Clean Architecture Fundamentals, CQRS Fundamentals, Entity Framework Core DbContext Fundamentals, EventsHub Project Identity, EventsHub API, EventsHub.Application Placeholder (+16 more)

### Community 12 - "Graphify Knowledge Graph Pipeline"
Cohesion: 0.20
Nodes (10): Project Graphify Instructions, Graphify Knowledge Graph Pipeline, URL Ingestion and Folder Watching, Graph Exports and Token Benchmark, Semantic Extraction Schema, GitHub Clone and Cross-Repository Merge, Commit Hook and CLAUDE.md Integration, Graph Query, Path, and Explain Operations (+2 more)

### Community 13 - "https"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 14 - "EventsHub.OpenApi"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 15 - "Part 1: .NET + npm in the same repo (e.g. EventsHub)"
Cohesion: 0.04
Nodes (46): How to use this guide, Installing Husky in a Project: .NET and npm, Optional: add Prettier (code formatting), Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Part 2: .NET only (Husky.Net), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly) (+38 more)

### Community 16 - "WeatherForecast"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - ".agents/skills/openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 18 - ".claude/skills/openspec-explore/SKILL.md"
Cohesion: 0.17
Nodes (11): Check for context, Ending Discovery, Guardrails, Handling Different Entry Points, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do (+3 more)

### Community 19 - "Local API base URL"
Cohesion: 0.40
Nodes (5): Local API base URL, Get event success request, Get event not found request, List events request, List weather forecast request

### Community 20 - "opsx-explore.md"
Cohesion: 0.18
Nodes (10): Check for context, Ending Discovery, Guardrails, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do, What You Might Do (+2 more)

### Community 28 - "explore.md"
Cohesion: 0.18
Nodes (10): Check for context, Ending Discovery, Guardrails, OpenSpec Awareness, Planning a Change, The Stance, What You Don't Have To Do, What You Might Do (+2 more)

### Community 42 - "HandlerTestBase"
Cohesion: 0.08
Nodes (26): DbUpdateException, OperationCanceledException, SqliteConnection, Task, Test, CreateEventTests, Exception, Task (+18 more)

### Community 43 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 63 - "TypeMap"
Cohesion: 0.10
Nodes (22): IReadOnlyDictionary, LambdaExpression, MethodInfo, PropertyInfo, Action, Expression, Func, IMappingExpression (+14 more)

### Community 64 - "Mapper"
Cohesion: 0.09
Nodes (18): Assembly, Handler, IServiceCollection, IMapper, Dictionary, Type, Mapper, Type (+10 more)

### Community 66 - "GlobalTestSetup"
Cohesion: 0.22
Nodes (7): OneTimeSetUp, OneTimeTearDown, Task, DbInitializer, Task, GlobalTestSetup, AppDbContext

### Community 67 - "EventsHubBaseController"
Cohesion: 0.22
Nodes (8): ControllerBase, IMediator, EventsHubBaseController, Mediator, HttpGet, IEnumerable, WeatherForecastController, WeatherForecast

### Community 68 - "eslint.config.js"
Cohesion: 0.25
Nodes (7): eslint, eslint-config-prettier, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals, typescript-eslint

### Community 69 - "main.tsx"
Cohesion: 0.25
Nodes (7): @fontsource/roboto, react, react-dom, @tanstack/react-query-devtools, web_src_app_layout_styles, router, queryClient

### Community 70 - "vite.config.ts"
Cohesion: 0.40
Nodes (4): @rolldown/plugin-babel, vite, vite-plugin-mkcert, @vitejs/plugin-react

### Community 71 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 72 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,css}, *.{ts,tsx}

## Knowledge Gaps
- **301 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+296 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 404 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **41 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `EventsControllerTests` connect `EventsControllerTests` to `Mapper`, `Event`, `EventsHub.Persistence`?**
  _High betweenness centrality (0.035) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `Event` to `GlobalTestSetup`, `EventsHub.Persistence`, `EventsControllerTests`, `HandlerTestBase`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Why does `Event` connect `Event` to `HandlerTestBase`, `EventsControllerTests`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _301 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1111111111111111 - nodes in this community are weakly interconnected._
- **Should `Event` be split into smaller, more focused modules?**
  _Cohesion score 0.0531986531986532 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Api.UnitTests.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.06219512195121951 - nodes in this community are weakly interconnected._