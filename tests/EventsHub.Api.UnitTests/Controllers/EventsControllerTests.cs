using EventsHub.Api.Controllers;
using EventsHub.Application.Core;
using EventsHub.Application.Core.Mapping;
using EventsHub.Application.Events.Queries;
using EventsHub.Domain;
using EventsHub.Persistence;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace EventsHub.UnitTests.Controllers;

[TestFixture]
public class EventsControllerTests
{
    private EventsController _eventsController = null!;
    private ServiceProvider _serviceProvider = null!;

    private readonly List<string> _ownendEventIds = [];

    private static AppDbContext Db => GlobalTestSetup.AppDbContext;

    [SetUp]
    public void Setup()
    {
        var services = new ServiceCollection();
        services.AddMediatR(opt => opt.RegisterServicesFromAssemblyContaining<GetEventList.Handler>());
        services.AddSingleton(GlobalTestSetup.AppDbContext);
        services.AddSingleton<IMapper>(new Mapper(new MappingProfiles()));
        services.AddLogging();
        _serviceProvider = services.BuildServiceProvider();


        _eventsController = new EventsController
        {
            ControllerContext = new ControllerContext
            {
                HttpContext = new DefaultHttpContext { RequestServices = _serviceProvider }
            }
        };
    }

    [TearDown]
    public async Task TearDown()
    {
        foreach (var id in _ownendEventIds)
        {
            var leftover = await Db.Events.FindAsync(id);
            if (leftover is not null)
            {
                Db.Events.Remove(leftover);
                await Db.SaveChangesAsync();
            }
        }
        _ownendEventIds.Clear();
        await _serviceProvider.DisposeAsync();
    }

    [Test]
    public async Task GetEventsAsync_WhenEventsExist_ReturnsAllEvents_Async()
    {
        // Arrange
        var expectedCount = await GlobalTestSetup.AppDbContext.Events.CountAsync();

        // Act
        var result = await _eventsController.GetEventsAsync(CancellationToken.None);

        // Assert
        Assert.That(result.Value, Is.Not.Null);
        Assert.That(result.Value, Has.Count.EqualTo(expectedCount));

    }


    [Test]
    public async Task GetEventsAsync_WhenEventsExist_ReturnsMatchingEvents_Async()
    {
        // Arrange
        var existing = await Db.Events.FirstAsync();

        // Act
        var result = await _eventsController.GetEventDetailAsync(existing.Id);

        // Assert
        Assert.That(result.Value, Is.Not.Null);
        var detail = result.Value!;
        Assert.Multiple(() =>
        {
            Assert.That(detail.Id, Is.EqualTo(existing.Id));
            Assert.That(detail.Title, Is.EqualTo(existing.Title));
            Assert.That(detail.Description, Is.EqualTo(existing.Description));
            Assert.That(detail.Date, Is.EqualTo(existing.Date));
        });

    }

    [Test]
    public void GetEventDetailAsync_WhenEventDoesntExist_ThrowsEventNotFound_Async()
    {
        // Arrange
        var nonExistentId = Guid.NewGuid().ToString();

        // Act & Assert
        var ex = Assert.ThrowsAsync<Exception>(() => _eventsController.GetEventDetailAsync(nonExistentId));
        Assert.That(ex!.Message, Is.EqualTo("Activity was not found"));

    }


    [Test]
    public async Task CreateEventAsync_WhenEventIsValid_ReturnsIdAndPersistsEvent()
    {
        // Arrange
        var newEvent = NewEvent("Controller create test");
        _ownendEventIds.Add(newEvent.Id);
        //Act
        var result = await _eventsController.CreateEventAsync(newEvent);
        // Assert
        Assert.That(result.Value, Is.EqualTo(newEvent.Id));
        var stored = await Db.Events.AsNoTracking().FirstOrDefaultAsync(e => e.Id == newEvent.Id);
        Assert.That(stored, Is.Not.Null);
    }

    private static Event NewEvent(string? id = null, string title = "Test event") => new()
    {
        Id = id ?? Guid.NewGuid().ToString(),
        Title = title,
        Description = "Test event description",
        Category = "Test music",
        City = "Test city",
        Venue = "Test venue",
        Date = DateTime.UtcNow.AddDays(7)

    };

}

