# Graph Report - ActivitiesHub  (2026-11-17)

## Corpus Check
- 133 files · ~131,751 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 17 file(s) not represented in the graph (top: (none) 13, .scss 2, .nswag 1)

## Summary
- 789 nodes · 1178 edges · 74 communities (33 shown, 41 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 56 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e909d654`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Command
- EventsHub.Api.UnitTests.csproj
- EventsHub.Application.Core.Mapping
- Event
- 20260902035943_InitialCreate.Designer.cs
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
- MapperTests
- web_src_index
- TypeMap
- Mapper
- system_runtime_compilerservices
- GlobalTestSetup
- Part 4: npm only, `package.json` in a subfolder (Husky v9)
- AppDbContext
- Handler
- Handler
- Handler
- IRequest
- automapper

## God Nodes (most connected - your core abstractions)
1. `Event` - 30 edges
2. `TypeMap` - 24 edges
3. `MapperTests` - 19 edges
4. `EventsControllerTests` - 18 edges
5. `compilerOptions` - 18 edges
6. `EventsHub.Application.Core.Mapping` - 15 edges
7. `AppDbContext` - 15 edges
8. `@mui/material` - 15 edges
9. `compilerOptions` - 15 edges
10. `Mapper` - 14 edges

## Surprising Connections (you probably didn't know these)
- `EventsHub API` --semantically_similar_to--> `Get Event HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/Events/Events - Get - 200.yml
- `EventsHub API` --semantically_similar_to--> `Weather Forecast HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/WeatherForecast/Weather Forecast - List 200.yml
- `EditEventTests` --references--> `IMapper`  [EXTRACTED]
  tests/EventsHub.Application.UnitTests/Events/EditEventTests.cs → src/EventsHub.Application/Core/Mapping/IMapper.cs
- `SamplePersonProfile` --inherits--> `Profile`  [EXTRACTED]
  tests/EventsHub.Application.UnitTests/Mapping/MapperFixtures.cs → src/EventsHub.Application/Core/Mapping/Profile.cs
- `TestProfile` --inherits--> `Profile`  [EXTRACTED]
  tests/EventsHub.Application.UnitTests/Mapping/MapperFixtures.cs → src/EventsHub.Application/Core/Mapping/Profile.cs

## Import Cycles
- None detected.

## Communities (74 total, 41 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.06
Nodes (36): @babel/core, babel-plugin-react-compiler, date-fns, @emotion/react, @emotion/styled, eslint, eslint-config-prettier, @eslint/js (+28 more)

### Community 1 - "Command"
Cohesion: 0.27
Nodes (8): Command, IRequestHandler, CancellationToken, Task, Handler, CancellationToken, Task, Handler

### Community 2 - "EventsHub.Api.UnitTests.csproj"
Cohesion: 0.06
Nodes (33): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4) (+25 more)

### Community 3 - "EventsHub.Application.Core.Mapping"
Cohesion: 0.07
Nodes (29): ControllerBase, EventsHub.Domain, EventsHub.Application.Core.Mapping, EventsHub.Application.UnitTests.Events, EventsHub.Application.Events.Queries, EventsHub.Api.UnitTests.Controllers, EventsHub.Api.Controllers, EventsHub.Persistence (+21 more)

### Community 4 - "Event"
Cohesion: 0.08
Nodes (32): ActionResult, HttpDelete, HttpPost, HttpPut, NoContentResult, OkResult, ProducesResponseType, ServiceProvider (+24 more)

### Community 5 - "20260902035943_InitialCreate.Designer.cs"
Cohesion: 0.12
Nodes (15): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, MigrationBuilder, ModelSnapshot, DateTime (+7 more)

### Community 6 - "@mui/material"
Cohesion: 0.09
Nodes (35): axios, falling-leaves, @fontsource/roboto, @mui/icons-material, @mui/material, react, react-calendar, react-dom (+27 more)

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
Nodes (47): How to use this guide, Installing Husky in a Project: .NET and npm, Optional: add Prettier (code formatting), Optional: add Prettier (code formatting), Part 1: .NET + npm in the same repo (e.g. EventsHub), Part 2: .NET only (Husky.Net), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly) (+39 more)

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

### Community 43 - "MapperTests"
Cohesion: 0.08
Nodes (38): ArgumentException, ArgumentNullException, InvalidOperationException, TestCase, IReadOnlyList, List, ChildDest, Name (+30 more)

### Community 63 - "TypeMap"
Cohesion: 0.09
Nodes (24): IReadOnlyDictionary, LambdaExpression, MethodInfo, PropertyInfo, Action, Expression, Func, IMappingExpression (+16 more)

### Community 64 - "Mapper"
Cohesion: 0.08
Nodes (23): Assembly, Handler, IServiceCollection, IMapper, Dictionary, Type, Mapper, Type (+15 more)

### Community 66 - "GlobalTestSetup"
Cohesion: 0.33
Nodes (5): OneTimeSetUp, OneTimeTearDown, Task, GlobalTestSetup, AppDbContext

### Community 67 - "Part 4: npm only, `package.json` in a subfolder (Husky v9)"
Cohesion: 0.14
Nodes (14): Optional: add Prettier (code formatting), Part 4: npm only, `package.json` in a subfolder (Husky v9), Skipping hooks (use sparingly), Step 10: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Install Husky, Step 3: Point the `prepare` script at the subfolder, Step 4: Install the hooks (+6 more)

### Community 68 - "AppDbContext"
Cohesion: 0.25
Nodes (7): DbContext, DbContextOptions, DbSet, AppDbContext, Events, Task, DbInitializer

### Community 69 - "Handler"
Cohesion: 0.32
Nodes (7): ILogger, CancellationToken, List, Task, GetEventList, Handler, Query

### Community 70 - "Handler"
Cohesion: 0.29
Nodes (7): Query, CancellationToken, Task, GetEventDetails, Handler, Query, Id

### Community 71 - "Handler"
Cohesion: 0.25
Nodes (6): CancellationToken, Task, Command, Event, EditEvent, Handler

### Community 72 - "IRequest"
Cohesion: 0.29
Nodes (7): IRequest, Command, Event, CreateEvents, Command, Id, DeleteEvent

## Knowledge Gaps
- **323 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+318 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 430 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **41 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Mapper` connect `Mapper` to `MapperTests`, `TypeMap`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `Event` connect `Event` to `Mapper`, `AppDbContext`, `Handler`, `Handler`, `Handler`, `IRequest`, `HandlerTestBase`?**
  _High betweenness centrality (0.040) - this node is a cross-community bridge._
- **Why does `EventsHub.Application.Core.Mapping` connect `EventsHub.Application.Core.Mapping` to `Mapper`, `MapperTests`, `TypeMap`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _323 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.06342780026990553 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Api.UnitTests.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.06219512195121951 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Application.Core.Mapping` be split into smaller, more focused modules?**
  _Cohesion score 0.07205387205387205 - nodes in this community are weakly interconnected._