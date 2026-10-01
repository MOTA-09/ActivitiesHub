# EventsHub.Application

**This project is currently an unused placeholder.** It contains no `.cs`
files — only its `.csproj`, which references `EventsHub.Domain` and
`EventsHub.Persistence`.

## Connections

The project references Domain and Persistence, and Api references Application. Project references therefore make those assemblies available to Api transitively. There are no application services or use cases here today, so API controllers access `AppDbContext` directly.

## Why it exists

`EventsHub.Api` references only `EventsHub.Application` (not `Domain` or
`Persistence` directly). Since .NET project references are transitive, `Api`
reaches `Persistence`/`Domain` *through* this project. It's a structural
stand-in for an application/service layer that the Clean-Architecture-shaped
solution layout implies should exist, but doesn't yet — controllers in
`EventsHub.Api` currently call `AppDbContext` from `EventsHub.Persistence`
directly. See
[`docs/Architecture.md`](../../docs/Architecture.md#architectural-pattern)
for the full picture.

## If you're adding backend logic

Before adding a service, use-case handler, or DTO/mapping type here, note
that today nothing in the codebase expects this layer to have content —
`Api` bypasses it entirely. Introducing real code here is a deliberate
architectural change (start routing controller logic through it), not just
"the obvious place to put a class." If that's not the intent, prefer adding
logic where the existing pattern already puts it (directly in the
`EventsHub.Api` controllers, alongside `AppDbContext` usage).
