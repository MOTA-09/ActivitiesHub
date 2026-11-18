# Graph Report - ActivitiesHub  (2026-11-18)

## Corpus Check
- 134 files · ~142,604 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 17 file(s) not represented in the graph (top: (none) 13, .scss 2, .nswag 1)

## Summary
- 852 nodes · 1271 edges · 94 communities (52 shown, 42 thin omitted)
- Extraction: 93% EXTRACTED · 7% INFERRED · 0% AMBIGUOUS · INFERRED: 85 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `50bc37d7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- Command
- EventsHub.Api.UnitTests.csproj
- EventsHub.Domain
- Event
- 20261118133525_InitialCreate.Designer.cs
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
- .SeedAsync
- MapperTests
- web_src_index
- TypeMap
- Mapper
- system_runtime_compilerservices
- AppDbContext
- Part 3: npm only, `package.json` in the repo root (Husky v9)
- Qué cambia
- Guía de implementación con contenedores (Docker + PostgreSQL + Testcontainers)
- EventsHub.Application.Core.Mapping
- 5. Parte D — Orquestación con Docker Compose
- ActivityCard.tsx
- automapper
- Routes.tsx
- ActivityForm.tsx
- Profile
- 2. Parte A — Cambiar de SQLite a PostgreSQL
- 9. Parte F (OPCIONAL) — HTTPS con proxy inverso (Caddy + mkcert)
- GetEventListTests
- main.tsx
- HandlerTestBase
- 6. Parte E — Pruebas con Testcontainers
- GetEventDetailsTests
- .AddMapper
- .Handle_WhenIdAlreadyExists_ThrowsDbUpdateException
- IMapper
- AppDbContextModelSnapshot
- DocumentedProfileExample.cs
- scripts
- 3. Parte B — Contenedor del back-end (API)
- 4. Parte C — Contenedor del front-end (SPA)
- .BuildTargetModel
- lint-staged

## God Nodes (most connected - your core abstractions)
1. `Event` - 31 edges
2. `TypeMap` - 24 edges
3. `AppDbContext` - 20 edges
4. `EventsControllerTests` - 19 edges
5. `MapperTests` - 19 edges
6. `HandlerTestBase` - 18 edges
7. `compilerOptions` - 18 edges
8. `EventsHub.Application.Core.Mapping` - 15 edges
9. `@mui/material` - 15 edges
10. `compilerOptions` - 15 edges

## Surprising Connections (you probably didn't know these)
- `Por qué una base de datos NUEVA por prueba (handlers)` --references--> `GetEventListTests`  [INFERRED]
  docs/guides/ContainersImplementationGuide.md → tests/EventsHub.Application.UnitTests/Events/GetEventListTests.cs
- `Paso A.1 — Reemplazar el paquete del provider` --references--> `HandlerTestBase`  [INFERRED]
  docs/guides/ContainersImplementationGuide.md → tests/EventsHub.Application.UnitTests/Events/HandlerTestBase.cs
- `Paso E.3 — `PostgresFixture` de Application.UnitTests` --references--> `HandlerTestBase`  [INFERRED]
  docs/guides/ContainersImplementationGuide.md → tests/EventsHub.Application.UnitTests/Events/HandlerTestBase.cs
- `2. Parte A — Cambiar de SQLite a PostgreSQL` --references--> `AppDbContext`  [INFERRED]
  docs/guides/ContainersImplementationGuide.md → src/EventsHub.Persistence/AppDbContext.cs
- `Qué cambia` --references--> `AppDbContext`  [INFERRED]
  docs/guides/ContainersImplementationGuide.md → src/EventsHub.Persistence/AppDbContext.cs

## Import Cycles
- None detected.

## Communities (94 total, 42 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.08
Nodes (28): @babel/core, babel-plugin-react-compiler, date-fns, @emotion/react, @emotion/styled, eslint, eslint-config-prettier, @eslint/js (+20 more)

### Community 1 - "Command"
Cohesion: 0.17
Nodes (12): Command, IRequestHandler, CancellationToken, Task, CreateEvents, Handler, CancellationToken, Task (+4 more)

### Community 2 - "EventsHub.Api.UnitTests.csproj"
Cohesion: 0.06
Nodes (33): AutoMapper (13.0.1), MediatR (14.2.0), Microsoft.AspNetCore.Mvc.NewtonsoftJson (10.0.11), Microsoft.AspNetCore.OpenApi (10.0.11), Microsoft.EntityFrameworkCore.Design (10.0.11), Moq (4.20.72), Newtonsoft.Json (13.0.4), Npgsql.EntityFrameworkCore.PostgreSQL (10.0.3) (+25 more)

### Community 3 - "EventsHub.Domain"
Cohesion: 0.05
Nodes (41): ControllerBase, EventsHub.Domain, EventsHub.Application.UnitTests.Events, EventsHub.Application.Events.Queries, EventsHub.Api.UnitTests.Controllers, EventsHub.Api.Controllers, EventsHub.Persistence, EventsHub.Application.Events.Comands (+33 more)

### Community 4 - "Event"
Cohesion: 0.06
Nodes (43): ActionResult, HttpDelete, HttpPost, HttpPut, ILogger, NoContentResult, OkResult, ProducesResponseType (+35 more)

### Community 5 - "20261118133525_InitialCreate.Designer.cs"
Cohesion: 0.31
Nodes (8): EventsHub.Persistence.Migrations, microsoft_entityframeworkcore_infrastructure, microsoft_entityframeworkcore_migrations, microsoft_entityframeworkcore_storage_valueconversion, Migration, npgsql_entityframeworkcore_postgresql_metadata, InitialCreate, system

### Community 6 - "@mui/material"
Cohesion: 0.30
Nodes (9): @mui/material, ActivityDetailPage(), ActivityDetailsChat(), ActivityDetailsHeader(), Props, ActivityDetailsInfo(), Props, ActivityDetailsSidebar() (+1 more)

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

### Community 42 - ".SeedAsync"
Cohesion: 0.42
Nodes (4): Exception, Task, Test, EditEventTests

### Community 43 - "MapperTests"
Cohesion: 0.08
Nodes (38): ArgumentException, ArgumentNullException, InvalidOperationException, TestCase, IReadOnlyList, List, ChildDest, Name (+30 more)

### Community 63 - "TypeMap"
Cohesion: 0.10
Nodes (22): IReadOnlyDictionary, LambdaExpression, MethodInfo, PropertyInfo, Action, Expression, Func, IMappingExpression (+14 more)

### Community 64 - "Mapper"
Cohesion: 0.36
Nodes (5): Dictionary, Type, Mapper, Test, MappingProfilesTests

### Community 66 - "AppDbContext"
Cohesion: 0.14
Nodes (15): DbContext, DbContextOptions, DbSet, 8. Checklist de entrega, Paso E.2 — `GlobalTestSetup` de Api.UnitTests (cambio mínimo), Tabla resumen de archivos, OneTimeSetUp, OneTimeTearDown (+7 more)

### Community 67 - "Part 3: npm only, `package.json` in the repo root (Husky v9)"
Cohesion: 0.13
Nodes (15): Optional: add Prettier (code formatting), Part 3: npm only, `package.json` in the repo root (Husky v9), Skipping hooks (use sparingly), Step 10: Commit the Husky files, Step 11: Setup for a new teammate or CI, Step 1: Check prerequisites, Step 2: Make sure `package.json` and `.gitignore` exist, Step 3: Install Husky (+7 more)

### Community 68 - "Qué cambia"
Cohesion: 0.33
Nodes (5): Por qué cada proyecto levanta su propio contenedor, Por qué `PostgresFixture` vive en el namespace `...UnitTests.Events`, Por qué una base de datos NUEVA por prueba (handlers), Qué cambia, DbInitializer

### Community 69 - "Guía de implementación con contenedores (Docker + PostgreSQL + Testcontainers)"
Cohesion: 0.14
Nodes (13): 0. Decisiones de diseño, 1. Prerrequisitos, 7.1 Seguridad básica, 7.2 Problemas frecuentes, 7.3 Qué NO cubre esta guía (posibles extensiones), 7. Aspectos transversales, Arquitectura resultante (Partes A–E), Convenciones de terminal (+5 more)

### Community 70 - "EventsHub.Application.Core.Mapping"
Cohesion: 0.24
Nodes (6): EventsHub.Application.Core.Mapping, EventsHub.Application.UnitTests.Mapping, microsoft_extensions_dependencyinjection, system_collections, system_linq_expressions, system_reflection

### Community 71 - "5. Parte D — Orquestación con Docker Compose"
Cohesion: 0.18
Nodes (9): 5. Parte D — Orquestación con Docker Compose, Comandos útiles, Paso D.1 — Variables de entorno, Paso D.2 — `docker-compose.yml`, Paso D.3 — Levantar todo, Paso D.4 — Verificación (demostración), Paso F.4 — Overlay de Compose para HTTPS, MigrationBuilder (+1 more)

### Community 72 - "ActivityCard.tsx"
Cohesion: 0.31
Nodes (7): @mui/icons-material, react-calendar, ActivityCard(), Props, ActivityDashboard(), ActivityFilters(), ActivityList()

### Community 74 - "Routes.tsx"
Cohesion: 0.42
Nodes (6): react-router, App(), NavBar(), MenuItemLink(), HomePage(), web_src_features_home_homepage_module

### Community 75 - "ActivityForm.tsx"
Cohesion: 0.27
Nodes (6): axios, falling-leaves, @tanstack/react-query, ActivityForm(), agent, useActivities()

### Community 76 - "Profile"
Cohesion: 0.20
Nodes (7): IReadOnlyList, List, Profile, Maps, MappingProfiles, SetUp, SamplePersonProfile

### Community 77 - "2. Parte A — Cambiar de SQLite a PostgreSQL"
Cohesion: 0.25
Nodes (8): 2. Parte A — Cambiar de SQLite a PostgreSQL, Paso A.1 — Reemplazar el paquete del provider, Paso A.2 — Cadena de conexión (DOS archivos), Paso A.3 — `Program.cs`, Paso A.4 — Fechas en UTC en el seed (cambio obligatorio con Npgsql), Paso A.5 — Forzar `Kind=Utc` en `Event.Date` (fix robusto), Paso A.6 — Regenerar la migración, Paso A.7 — Probar la API contra un Postgres en contenedor (antes de dockerizar la API)

### Community 78 - "9. Parte F (OPCIONAL) — HTTPS con proxy inverso (Caddy + mkcert)"
Cohesion: 0.25
Nodes (8): 9. Parte F (OPCIONAL) — HTTPS con proxy inverso (Caddy + mkcert), Paso F.1 — Instalar mkcert y generar el certificado, Paso F.2 — Ignorar `certs/` en git, Paso F.3 — Configuración del proxy (Caddy), Paso F.5 — Qué NO cambia en la SPA ni en el CORS, Paso F.6 — `Program.cs`: encabezados reenviados (X-Forwarded-*), Paso F.7 — Verificación y vuelta al modo HTTP, Variante opcional: nginx como proxy

### Community 79 - "GetEventListTests"
Cohesion: 0.43
Nodes (5): Paso E.6 — Qué podría comportarse distinto en PostgreSQL, OperationCanceledException, Task, Test, GetEventListTests

### Community 80 - "main.tsx"
Cohesion: 0.25
Nodes (7): @fontsource/roboto, react, react-dom, @tanstack/react-query-devtools, web_src_app_layout_styles, router, queryClient

### Community 81 - "HandlerTestBase"
Cohesion: 0.29
Nodes (6): SqliteConnection, SetUp, Task, TearDown, HandlerTestBase, Context

### Community 82 - "6. Parte E — Pruebas con Testcontainers"
Cohesion: 0.29
Nodes (7): 6. Parte E — Pruebas con Testcontainers, Notas finales de la Parte E, Paso E.1 — Paquetes (dos proyectos), Paso E.3 — `PostgresFixture` de Application.UnitTests, Paso E.4 — `HandlerTestBase` sobre PostgreSQL, Paso E.5 — Compilar toda la solución, Paso E.7 — Ejecutar

### Community 83 - "GetEventDetailsTests"
Cohesion: 0.33
Nodes (4): Exception, Task, Test, GetEventDetailsTests

### Community 84 - ".AddMapper"
Cohesion: 0.33
Nodes (4): Assembly, IServiceCollection, Type, MappingServiceCollectionExtensions

### Community 85 - ".Handle_WhenIdAlreadyExists_ThrowsDbUpdateException"
Cohesion: 0.47
Nodes (4): DbUpdateException, Task, Test, CreateEventTests

### Community 86 - "IMapper"
Cohesion: 0.40
Nodes (3): Handler, IMapper, SetUp

### Community 87 - "AppDbContextModelSnapshot"
Cohesion: 0.40
Nodes (4): ModelSnapshot, DateTime, ModelBuilder, AppDbContextModelSnapshot

### Community 88 - "DocumentedProfileExample.cs"
Cohesion: 0.40
Nodes (4): EventSummary, Location, Title, EventSummaryProfile

### Community 89 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, preview

### Community 90 - "3. Parte B — Contenedor del back-end (API)"
Cohesion: 0.50
Nodes (4): 3. Parte B — Contenedor del back-end (API), Paso B.1 — `.dockerignore` (raíz del repo), Paso B.2 — Dockerfile de la API, Paso B.3 — Construir y probar la imagen de la API

### Community 91 - "4. Parte C — Contenedor del front-end (SPA)"
Cohesion: 0.50
Nodes (4): 4. Parte C — Contenedor del front-end (SPA), Paso C.1 — `web/.dockerignore`, Paso C.2 — `web/nginx.conf`, Paso C.3 — `web/Dockerfile`

### Community 93 - "lint-staged"
Cohesion: 0.67
Nodes (3): lint-staged, *.{json,md,css}, *.{ts,tsx}

## Knowledge Gaps
- **357 isolated node(s):** `$schema`, `tasks`, `Mediator`, `net10.0`, `Microsoft.AspNetCore.OpenApi (10.0.11)` (+352 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 466 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **42 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `AppDbContext` connect `AppDbContext` to `Command`, `EventsHub.Domain`, `Event`, `Qué cambia`, `2. Parte A — Cambiar de SQLite a PostgreSQL`, `HandlerTestBase`?**
  _High betweenness centrality (0.050) - this node is a cross-community bridge._
- **Why does `Mapper` connect `Mapper` to `EventsHub.Application.Core.Mapping`, `MapperTests`, `Profile`, `.AddMapper`, `IMapper`, `TypeMap`?**
  _High betweenness centrality (0.044) - this node is a cross-community bridge._
- **Why does `Event` connect `Event` to `Mapper`, `AppDbContext`, `EventsHub.Domain`, `.SeedAsync`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `AppDbContext` (e.g. with `2. Parte A — Cambiar de SQLite a PostgreSQL` and `8. Checklist de entrega`) actually correct?**
  _`AppDbContext` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `$schema`, `tasks`, `Mediator` to the rest of the system?**
  _357 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.08387096774193549 - nodes in this community are weakly interconnected._
- **Should `EventsHub.Api.UnitTests.csproj` be split into smaller, more focused modules?**
  _Cohesion score 0.06219512195121951 - nodes in this community are weakly interconnected._