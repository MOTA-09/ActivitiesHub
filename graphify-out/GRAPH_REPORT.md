# Graph Report - ActivitiesHub  (2026-09-29)

## Corpus Check
- Corpus is ~47,074 words - fits in a single context window. You may not need a graph.

## Summary
- 382 nodes · 474 edges · 40 communities (21 shown, 19 thin omitted)
- Extraction: 98% EXTRACTED · 2% INFERRED · 0% AMBIGUOUS · INFERRED: 8 edges (avg confidence: 0.82)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Frontend Package Ecosystem
- Application Request Handlers
- Solution Dependencies
- Application Layer Mapping
- Events API Endpoints
- Database Migrations
- CQRS Persistence Handlers
- API Controllers and Tests
- Frontend Compiler Settings
- Frontend Development Tools
- TypeScript Build Settings
- Events API Test Collections
- Project Architecture Documentation
- API Launch Profile
- OpenAPI Launch Profile
- Frontend Runtime Packages
- Weather Forecast Model
- Integration Test Lifecycle
- Backend Architecture Guides
- API Test Environments
- Frontend Application Design
- TypeScript Project References
- Activity Domain Contract
- Architecture Documentation Workflow
- Software Testing Guide
- Git Workflow Guide
- Graphify and OpenSpec Setup
- OpenAPI Client Generation
- EventsHub Project Overview
- Legacy API Test Configuration
- Legacy Integration Test Collection
- Legacy Weather Requests
- Legacy Event Requests
- Integration Test Collection
- Weather Forecast Requests
- Vite Favicon
- Social Icon Sprite
- Frontend Hero Artwork
- React Logo Asset
- Vite Logo Asset

## God Nodes (most connected - your core abstractions)
1. `Event` - 25 edges
2. `compilerOptions` - 18 edges
3. `compilerOptions` - 15 edges
4. `AppDbContext` - 13 edges
5. `EventsHub.Persistence` - 11 edges
6. `EventsHub.Domain` - 9 edges
7. `Graphify Knowledge Graph Pipeline` - 9 edges
8. `EventsController` - 8 edges
9. `Handler` - 8 edges
10. `EventsHubBaseController` - 6 edges

## Surprising Connections (you probably didn't know these)
- `EventsHub API` --semantically_similar_to--> `Get Event HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/Events/Events - Get - 200.yml
- `EventsHub API` --semantically_similar_to--> `Weather Forecast HTTP Request`  [INFERRED] [semantically similar]
  src/EventsHub.Api/README.md → tests/EventsHub-IntegrationTest/WeatherForecast/Weather Forecast - List 200.yml
- `GlobalTestSetup` --references--> `AppDbContext`  [EXTRACTED]
  tests/EventsHub.UnitTests/GlobalTestSetup.cs → src/EventsHub.Persistence/AppDbContext.cs
- `Project Graphify Instructions` --references--> `Graphify Knowledge Graph Pipeline`  [EXTRACTED]
  AGENTS.md → .codex/skills/graphify/SKILL.md
- `EventsControllerTests` --references--> `EventsController`  [EXTRACTED]
  tests/EventsHub.UnitTests/Controllers/EventsControllerTests.cs → src/EventsHub.Api/Controllers/EventsController.cs

## Import Cycles
- None detected.

## Communities (40 total, 19 thin omitted)

### Community 0 - "Frontend Package Ecosystem"
Cohesion: 0.07
Nodes (36): axios, @babel/core, babel-plugin-react-compiler, @emotion/react, @emotion/styled, eslint, @eslint/js, eslint-plugin-react-hooks (+28 more)

### Community 1 - "Application Request Handlers"
Cohesion: 0.08
Nodes (32): ILogger, IRequest, List, Query, Command, Event, Command, Event (+24 more)

### Community 2 - "Solution Dependencies"
Cohesion: 0.07
Nodes (26): AutoMapper (13.0.1), coverlet.collector (6.0.4), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Microsoft.EntityFrameworkCore.Sqlite (10.0.11), Microsoft.NET.Test.Sdk (17.14.0) (+18 more)

### Community 3 - "Application Layer Mapping"
Cohesion: 0.11
Nodes (18): automapper, EventsHub.Domain, EventsHub.Application.Events.Queries, EventsHub.UnitTests, EventsHub.Persistence, EventsHub.Application.Events.Comands, EventsHub.Application.Core, mediatr (+10 more)

### Community 4 - "Events API Endpoints"
Cohesion: 0.16
Nodes (15): ActionResult, HttpDelete, HttpPost, HttpPut, IReadOnlyList, NotFoundObjectResult, ProducesResponseType, SetUp (+7 more)

### Community 5 - "Database Migrations"
Cohesion: 0.12
Nodes (15): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, MigrationBuilder, ModelSnapshot, DateTime (+7 more)

### Community 6 - "CQRS Persistence Handlers"
Cohesion: 0.14
Nodes (17): Command, DbContext, DbContextOptions, DbSet, IMapper, IRequestHandler, CancellationToken, Task (+9 more)

### Community 7 - "API Controllers and Tests"
Cohesion: 0.12
Nodes (14): ControllerBase, EventsHub.Api.Controllers, EventsHub.UnitTests.Controllers, IEnumerable, IMediator, microsoft_aspnetcore_mvc, newtonsoft_json_serialization, EventsHubBaseController (+6 more)

### Community 8 - "Frontend Compiler Settings"
Cohesion: 0.10
Nodes (19): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+11 more)

### Community 9 - "Frontend Development Tools"
Cohesion: 0.11
Nodes (18): devDependencies, @babel/core, babel-plugin-react-compiler, eslint, @eslint/js, eslint-plugin-react-hooks, eslint-plugin-react-refresh, globals (+10 more)

### Community 10 - "TypeScript Build Settings"
Cohesion: 0.12
Nodes (16): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+8 more)

### Community 11 - "Events API Test Collections"
Cohesion: 0.18
Nodes (13): EventsHub API, EventsHub.Application Placeholder, EventsHub Domain and Event Entity, EventsHub OpenAPI Host and Client Generation, EventsHub Persistence Layer, Create Event HTTP Request, Delete Event HTTP Request, Edit Event HTTP Request (+5 more)

### Community 12 - "Project Architecture Documentation"
Cohesion: 0.20
Nodes (10): Project Graphify Instructions, Graphify Knowledge Graph Pipeline, URL Ingestion and Folder Watching, Graph Exports and Token Benchmark, Semantic Extraction Schema, GitHub Clone and Cross-Repository Merge, Commit Hook and CLAUDE.md Integration, Graph Query, Path, and Explain Operations (+2 more)

### Community 13 - "API Launch Profile"
Cohesion: 0.20
Nodes (9): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, dotnetRunMessages, environmentVariables, launchBrowser, profiles, https (+1 more)

### Community 14 - "OpenAPI Launch Profile"
Cohesion: 0.22
Nodes (8): ASPNETCORE_ENVIRONMENT, applicationUrl, commandName, environmentVariables, launchBrowser, profiles, EventsHub.OpenApi, $schema

### Community 15 - "Frontend Runtime Packages"
Cohesion: 0.22
Nodes (9): dependencies, axios, @emotion/react, @emotion/styled, @fontsource/roboto, @mui/icons-material, @mui/material, react (+1 more)

### Community 16 - "Weather Forecast Model"
Cohesion: 0.25
Nodes (7): EventsHub.Api, DateOnly, WeatherForecast, Date, Summary, TemperatureC, TemperatureF

### Community 17 - "Integration Test Lifecycle"
Cohesion: 0.33
Nodes (5): OneTimeSetUp, OneTimeTearDown, Task, GlobalTestSetup, AppDbContext

### Community 18 - "Backend Architecture Guides"
Cohesion: 0.70
Nodes (5): EventsHub Developer Guide, EventsHub System Architecture, Clean Architecture Fundamentals, CQRS Fundamentals, Entity Framework Core DbContext Fundamentals

### Community 19 - "API Test Environments"
Cohesion: 0.40
Nodes (5): Local API base URL, Get event success request, Get event not found request, List events request, List weather forecast request

### Community 20 - "Frontend Application Design"
Cohesion: 0.40
Nodes (5): Events Hub HTML entry document, EventsHub frontend and backend architecture, EventsHub web frontend, Frontend HTTP API connection, Vite React TypeScript stack

## Knowledge Gaps
- **181 isolated node(s):** `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)`, `Microsoft.EntityFrameworkCore.Design (10.0.11)`, `Microsoft.NET.Sdk.Web` (+176 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 227 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Event` connect `Application Request Handlers` to `Application Layer Mapping`, `Events API Endpoints`, `CQRS Persistence Handlers`?**
  _High betweenness centrality (0.062) - this node is a cross-community bridge._
- **Why does `AppDbContext` connect `CQRS Persistence Handlers` to `Application Request Handlers`, `Application Layer Mapping`, `Integration Test Lifecycle`?**
  _High betweenness centrality (0.051) - this node is a cross-community bridge._
- **Why does `EventsHub.Persistence` connect `Application Layer Mapping` to `Database Migrations`?**
  _High betweenness centrality (0.025) - this node is a cross-community bridge._
- **What connects `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` to the rest of the system?**
  _181 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Frontend Package Ecosystem` be split into smaller, more focused modules?**
  _Cohesion score 0.06585365853658537 - nodes in this community are weakly interconnected._
- **Should `Application Request Handlers` be split into smaller, more focused modules?**
  _Cohesion score 0.08021390374331551 - nodes in this community are weakly interconnected._
- **Should `Solution Dependencies` be split into smaller, more focused modules?**
  _Cohesion score 0.07386363636363637 - nodes in this community are weakly interconnected._