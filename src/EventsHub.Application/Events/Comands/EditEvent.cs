using EventsHub.Persistence;
using EventsHub.Domain;
using MediatR;
using AutoMapper;

namespace EventsHub.Application.Events.Comands;

public class EditEvent
{
    public class Command : IRequest
    {
        public required Event Event { get; set; }

    }

    public class Handler(AppDbContext context, IMapper mapper) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var @event = await context.Events
                .FindAsync([request.Event.Id], cancellationToken)
                ?? throw new Exception("Event not found");

            mapper.Map(request.Event, @event);

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
