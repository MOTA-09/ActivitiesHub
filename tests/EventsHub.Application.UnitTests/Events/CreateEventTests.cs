using EventsHub.Application.Events.Comands;
using Microsoft.EntityFrameworkCore;

namespace EventsHub.Application.UnitTests.Events;

[TestFixture]
public class CreateEventTests : HandlerTestBase
{
    [Test]
    public async Task Handle_WhenEventIsValid_PersistsEventAndReturnsItsId()
    {
        // Arrange
        var @event = NewEvent(title: "New event");
        var handler = new CreateEvents.Handler(Context);
        var command = new CreateEvents.Command { Event = @event };

        // Act
        var id = await handler.Handle(command, CancellationToken.None);

        // Assert
        Assert.That(id, Is.EqualTo(@event.Id));
        var stored = await Context.Events.AsNoTracking().FirstOrDefaultAsync(e => e.Id == id);
        Assert.That(stored, Is.Not.Null);
        Assert.That(stored!.Title, Is.EqualTo("New event"));
    }

    [Test]
    public async Task Handle_WhenIdAlreadyExists_ThrowsDbUpdateException()
    {
        // Arrange
        var existing = await SeedAsync("Existing");
        var handler = new CreateEvents.Handler(Context);
        var command = new CreateEvents.Command { Event = NewEvent(existing.Id, "Duplicate") };

        // Act & Assert
        Assert.ThrowsAsync<DbUpdateException>(() => handler.Handle(command, CancellationToken.None));
    }
}
